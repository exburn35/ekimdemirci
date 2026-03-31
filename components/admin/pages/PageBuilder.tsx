"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  GripVertical,
  Trash2,
  Edit,
  Eye,
  Save,
  X,
  Type,
  Image as ImageIcon,
  Layout,
  List,
  Heading,
  FileText,
  Link2,
  Video,
  Code,
} from "lucide-react";

// Component types that can be added to pages
export type ComponentType =
  | "hero"
  | "features"
  | "pricing"
  | "testimonials"
  | "cta"
  | "content"
  | "gallery"
  | "faq"
  | "stats"
  | "contact";

export interface PageComponent {
  id: string;
  type: ComponentType;
  data: Record<string, any>;
  order: number;
}

interface PageBuilderProps {
  pageId?: string;
  initialComponents?: PageComponent[];
  onSave: (components: PageComponent[]) => Promise<void>;
}

const componentTemplates: Record<
  ComponentType,
  { name: string; icon: any; defaultData: Record<string, any> }
> = {
  hero: {
    name: "Hero Bölümü",
    icon: Heading,
    defaultData: {
      title: "Web Sitemize Hoş Geldiniz",
      subtitle: "Çarpıcı alt başlığınız buraya",
      description: "Ziyaretçilerinizi etkilemek için bir açıklama ekleyin",
      buttonText: "Hemen Başlayın",
      buttonLink: "/",
      backgroundImage: "",
    },
  },
  features: {
    name: "Özellikler",
    icon: List,
    defaultData: {
      title: "Özelliklerimiz",
      subtitle: "Neler sunuyoruz",
      items: [
        { title: "Özellik 1", description: "Açıklama 1", icon: "✓" },
        { title: "Özellik 2", description: "Açıklama 2", icon: "✓" },
        { title: "Özellik 3", description: "Açıklama 3", icon: "✓" },
      ],
    },
  },
  pricing: {
    name: "Fiyatlandırma",
    icon: FileText,
    defaultData: {
      title: "Fiyatlandırma Paketleri",
      subtitle: "Mükemmel planı seçin",
      plans: [
        {
          name: "Başlangıç",
          price: "₺29",
          features: ["Özellik 1", "Özellik 2", "Özellik 3"],
        },
      ],
    },
  },
  testimonials: {
    name: "Müşteri Yorumları",
    icon: Type,
    defaultData: {
      title: "Müşterilerimiz Ne Diyor?",
      items: [
        {
          name: "Müşteri Adı",
          role: "CEO",
          content: "Harika hizmet!",
          avatar: "",
        },
      ],
    },
  },
  cta: {
    name: "Eylem Çağrısı (CTA)",
    icon: Link2,
    defaultData: {
      title: "Başlamaya Hazır mısınız?",
      description: "Bugün bize katılın",
      buttonText: "Kaydol",
      buttonLink: "/kayit",
    },
  },
  content: {
    name: "İçerik Bloğu",
    icon: FileText,
    defaultData: {
      title: "İçerik Başlığı",
      content: "İçeriğiniz buraya...",
    },
  },
  gallery: {
    name: "Resim Galerisi",
    icon: ImageIcon,
    defaultData: {
      title: "Galeri",
      images: [],
    },
  },
  faq: {
    name: "SSS",
    icon: Layout,
    defaultData: {
      title: "Sıkça Sorulan Sorular",
      items: [
        { question: "Soru 1?", answer: "Cevap 1" },
        { question: "Soru 2?", answer: "Cevap 2" },
      ],
    },
  },
  stats: {
    name: "İstatistikler",
    icon: Code,
    defaultData: {
      title: "Rakamlarla Biz",
      items: [
        { label: "Müşteriler", value: "100+" },
        { label: "Projeler", value: "500+" },
      ],
    },
  },
  contact: {
    name: "İletişim Formu",
    icon: Video,
    defaultData: {
      title: "İletişime Geçin",
      description: "Aşağıdaki formu doldurun",
    },
  },
};

export default function PageBuilder({
  pageId,
  initialComponents = [],
  onSave,
}: PageBuilderProps) {
  const [components, setComponents] = useState<PageComponent[]>(
    initialComponents
  );
  const [editingComponent, setEditingComponent] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    setComponents(initialComponents);
  }, [initialComponents]);

  const addComponent = (type: ComponentType) => {
    const newComponent: PageComponent = {
      id: `comp-${Date.now()}`,
      type,
      data: { ...componentTemplates[type].defaultData },
      order: components.length,
    };
    setComponents([...components, newComponent]);
    setShowAddMenu(false);
    setEditingComponent(newComponent.id);
  };

  const updateComponent = (id: string, data: Record<string, any>) => {
    setComponents(
      components.map((comp) =>
        comp.id === id ? { ...comp, data: { ...comp.data, ...data } } : comp
      )
    );
  };

  const deleteComponent = (id: string) => {
    setComponents(components.filter((comp) => comp.id !== id));
    if (editingComponent === id) {
      setEditingComponent(null);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(components);
    } catch (error) {
      console.error("Failed to save:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newComponents = [...components];
    const draggedItem = newComponents[draggedIndex];
    newComponents.splice(draggedIndex, 1);
    newComponents.splice(index, 0, draggedItem);
    setComponents(
      newComponents.map((comp, idx) => ({ ...comp, order: idx }))
    );
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sayfa Oluşturucu
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Sayfanızı oluşturmak için bileşenleri sürükleyip bırakın
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAddMenu(!showAddMenu)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Bileşen Ekle
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Kaydediliyor..." : "Sayfayı Kaydet"}
          </button>
        </div>
      </div>

      {/* Add Component Menu */}
      <AnimatePresence>
        {showAddMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {Object.entries(componentTemplates).map(([type, template]) => {
                const Icon = template.icon;
                return (
                  <button
                    key={type}
                    onClick={() => addComponent(type as ComponentType)}
                    className="flex flex-col items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {template.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Components List */}
      <div className="space-y-4">
        {components.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <Layout className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Henüz bileşen yok. Başlamak için &quot;Bileşen Ekle&quot; butonuna tıklayın.
            </p>
          </div>
        ) : (
          components.map((component, index) => {
            const template = componentTemplates[component.type];
            const Icon = template.icon;
            const isEditing = editingComponent === component.id;

            return (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
              >
                {/* Component Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {template.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setEditingComponent(
                          isEditing ? null : component.id
                        )
                      }
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {isEditing ? (
                        <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      )}
                    </button>
                    <button
                      onClick={() => deleteComponent(component.id)}
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </button>
                  </div>
                </div>

                {/* Component Editor */}
                {isEditing && (
                  <ComponentEditor
                    component={component}
                    onUpdate={(data) => updateComponent(component.id, data)}
                  />
                )}

                {/* Component Preview */}
                {!isEditing && (
                  <div className="p-4">
                    <ComponentPreview component={component} />
                  </div>
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}

// Component Editor
function ComponentEditor({
  component,
  onUpdate,
}: {
  component: PageComponent;
  onUpdate: (data: Record<string, any>) => void;
}) {
  const [data, setData] = useState(component.data);

  useEffect(() => {
    setData(component.data);
  }, [component.data]);

  const handleChange = (key: string, value: any) => {
    const newData = { ...data, [key]: value };
    setData(newData);
    onUpdate(newData);
  };

  return (
    <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
      {Object.entries(data).map(([key, value]) => {
        if (Array.isArray(value)) {
          return (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <div className="space-y-2">
                {value.map((item, idx) => (
                  <div key={idx} className="p-2 bg-white dark:bg-gray-800 rounded border">
                    {typeof item === "object" ? (
                      Object.entries(item).map(([k, v]) => (
                        <input
                          key={k}
                          type="text"
                          value={String(v)}
                          onChange={(e) => {
                            const newArray = [...value];
                            newArray[idx] = { ...item, [k]: e.target.value };
                            handleChange(key, newArray);
                          }}
                          className="w-full p-2 border rounded mb-2"
                          placeholder={k}
                        />
                      ))
                    ) : (
                      <input
                        type="text"
                        value={String(item)}
                        onChange={(e) => {
                          const newArray = [...value];
                          newArray[idx] = e.target.value;
                          handleChange(key, newArray);
                        }}
                        className="w-full p-2 border rounded"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              type="text"
              value={String(value || "")}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder={`${key} girin...`}
            />
          </div>
        );
      })}
    </div>
  );
}

// Component Preview
function ComponentPreview({ component }: { component: PageComponent }) {
  const template = componentTemplates[component.type];

  return (
    <div className="text-sm text-gray-600 dark:text-gray-400">
      <p>
        <strong>{template.name}:</strong>{" "}
        {component.data.title || component.data.name || "Başlık Yok"}
      </p>
    </div>
  );
}

