"use client";

import { useState, useEffect } from "react";
import { Plus, GripVertical, Edit, Trash2, ChevronDown, ChevronRight, Link as LinkIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  order: number;
  parentId?: string;
  target: string;
  menuType: string;
  published: boolean;
  children?: NavigationItem[];
}

export default function NavigationEditor() {
  const [items, setItems] = useState<NavigationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<NavigationItem | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [menuType, setMenuType] = useState<"main" | "footer" | "mobile">("main");

  useEffect(() => {
    loadNavigation();
  }, [menuType]);

  const loadNavigation = async () => {
    try {
      const response = await fetch(`/api/admin/navigation?type=${menuType}`);
      if (response.ok) {
        const data = await response.json();
        // Organize into tree structure
        const tree = buildTree(data);
        setItems(tree);
      }
    } catch (error) {
      console.error("Error loading navigation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const buildTree = (items: NavigationItem[]): NavigationItem[] => {
    const map = new Map<string, NavigationItem>();
    const roots: NavigationItem[] = [];

    items.forEach((item) => {
      map.set(item.id, { ...item, children: [] });
    });

    items.forEach((item) => {
      const node = map.get(item.id)!;
      if (item.parentId) {
        const parent = map.get(item.parentId);
        if (parent) {
          if (!parent.children) parent.children = [];
          parent.children.push(node);
        }
      } else {
        roots.push(node);
      }
    });

    return roots.sort((a, b) => a.order - b.order);
  };

  const handleSave = async (item: NavigationItem) => {
    try {
      const method = item.id ? "PUT" : "POST";
      const url = item.id
        ? `/api/admin/navigation/${item.id}`
        : "/api/admin/navigation";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...item, menuType }),
      });

      if (response.ok) {
        await loadNavigation();
        setEditingItem(null);
        setShowAddDialog(false);
      }
    } catch (error) {
      console.error("Error saving navigation item:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this menu item?")) return;

    try {
      const response = await fetch(`/api/admin/navigation/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await loadNavigation();
      }
    } catch (error) {
      console.error("Error deleting navigation item:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Navigation Menu Editor
        </h2>
        <div className="flex gap-2">
          <select
            value={menuType}
            onChange={(e) => setMenuType(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          >
            <option value="main">Main Menu</option>
            <option value="footer">Footer Menu</option>
            <option value="mobile">Mobile Menu</option>
          </select>
          <button
            onClick={() => {
              setEditingItem({
                id: "",
                label: "",
                href: "",
                order: items.length,
                target: "_self",
                menuType,
                published: true,
              });
              setShowAddDialog(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <LinkIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              No menu items yet. Add your first menu item!
            </p>
          </div>
        ) : (
          <NavigationTree
            items={items}
            onEdit={setEditingItem}
            onDelete={handleDelete}
            level={0}
          />
        )}
      </div>

      {/* Add/Edit Dialog */}
      {(showAddDialog || editingItem) && (
        <NavigationItemDialog
          item={editingItem!}
          onSave={handleSave}
          onClose={() => {
            setEditingItem(null);
            setShowAddDialog(false);
          }}
          parentItems={items}
        />
      )}
    </div>
  );
}

function NavigationTree({
  items,
  onEdit,
  onDelete,
  level,
}: {
  items: NavigationItem[];
  onEdit: (item: NavigationItem) => void;
  onDelete: (id: string) => void;
  level: number;
}) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <NavigationItemRow
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
          level={level}
        />
      ))}
    </div>
  );
}

function NavigationItemRow({
  item,
  onEdit,
  onDelete,
  level,
}: {
  item: NavigationItem;
  onEdit: (item: NavigationItem) => void;
  onDelete: (id: string) => void;
  level: number;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>
      <div
        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
        style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
        >
          {item.children && item.children.length > 0 ? (
            isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )
          ) : (
            <div className="w-4 h-4" />
          )}
        </button>

        <GripVertical className="w-4 h-4 text-gray-400 cursor-move" />

        <LinkIcon className="w-4 h-4 text-gray-400" />

        <span className="flex-1 text-gray-900 dark:text-white font-medium">
          {item.label}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {item.href}
        </span>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(item)}
            className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded transition-colors"
          >
            <Edit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
          >
            <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && item.children && item.children.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <NavigationTree
              items={item.children}
              onEdit={onEdit}
              onDelete={onDelete}
              level={level + 1}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavigationItemDialog({
  item,
  onSave,
  onClose,
  parentItems,
}: {
  item: NavigationItem;
  onSave: (item: NavigationItem) => void;
  onClose: () => void;
  parentItems: NavigationItem[];
}) {
  const [formData, setFormData] = useState(item);

  const getAllParents = (items: NavigationItem[], excludeId?: string): NavigationItem[] => {
    const result: NavigationItem[] = [];
    items.forEach((i) => {
      if (i.id !== excludeId) {
        result.push(i);
        if (i.children) {
          result.push(...getAllParents(i.children, excludeId));
        }
      }
    });
    return result;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-auto"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {item.id ? "Edit Menu Item" : "Add Menu Item"}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Label *
            </label>
            <input
              type="text"
              value={formData.label}
              onChange={(e) =>
                setFormData({ ...formData, label: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              placeholder="Menu Item Label"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              URL *
            </label>
            <input
              type="text"
              value={formData.href}
              onChange={(e) =>
                setFormData({ ...formData, href: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              placeholder="/page-url"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Parent Item (optional)
            </label>
            <select
              value={formData.parentId || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  parentId: e.target.value || undefined,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            >
              <option value="">None (Top Level)</option>
              {getAllParents(parentItems, item.id).map((parent) => (
                <option key={parent.id} value={parent.id}>
                  {parent.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Open In
            </label>
            <select
              value={formData.target}
              onChange={(e) =>
                setFormData({ ...formData, target: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            >
              <option value="_self">Same Window</option>
              <option value="_blank">New Window</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={formData.published}
              onChange={(e) =>
                setFormData({ ...formData, published: e.target.checked })
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="published"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Published
            </label>
          </div>

          <div className="flex gap-2 pt-4">
            <button
              onClick={() => onSave(formData)}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

