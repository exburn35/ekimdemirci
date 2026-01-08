"use client";

import { useState, useRef } from "react";
import { Bold, Italic, Underline, Link as LinkIcon, Image as ImageIcon, List, AlignLeft, Save } from "lucide-react";
import { motion } from "framer-motion";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  onSave?: () => void;
  placeholder?: string;
}

export default function RichTextEditor({
  content,
  onChange,
  onSave,
  placeholder = "Start typing...",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateContent();
  };

  const updateContent = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleLink = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const selectedText = selection.toString();
      setLinkText(selectedText || "");
      setShowLinkDialog(true);
    }
  };

  const insertLink = () => {
    if (linkUrl) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const link = document.createElement("a");
        link.href = linkUrl;
        link.textContent = linkText || linkUrl;
        link.target = "_blank";
        range.deleteContents();
        range.insertNode(link);
        updateContent();
      }
    }
    setShowLinkDialog(false);
    setLinkUrl("");
    setLinkText("");
  };

  const insertImage = () => {
    if (imageUrl) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "";
        img.className = "max-w-full h-auto rounded-lg my-4";
        range.insertNode(img);
        updateContent();
      }
    }
    setShowImageDialog(false);
    setImageUrl("");
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex-wrap">
        <button
          onClick={() => execCommand("bold")}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => execCommand("italic")}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={() => execCommand("underline")}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          title="Underline"
        >
          <Underline className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
        <button
          onClick={() => execCommand("insertUnorderedList")}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => execCommand("justifyLeft")}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          title="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
        <button
          onClick={handleLink}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          title="Insert Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => setShowImageDialog(true)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          title="Insert Image"
        >
          <ImageIcon className="w-4 h-4" />
        </button>
        {onSave && (
          <>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <button
              onClick={onSave}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
              title="Save"
            >
              <Save className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={updateContent}
        dangerouslySetInnerHTML={{ __html: content }}
        className="min-h-[300px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 prose prose-sm max-w-none dark:prose-invert"
        style={{
          wordBreak: "break-word",
        }}
        data-placeholder={placeholder}
      />

      {/* Link Dialog */}
      {showLinkDialog && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLinkDialog(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Insert Link
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Link Text
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Link text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  URL
                </label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="https://example.com"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={insertLink}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Insert
                </button>
                <button
                  onClick={() => setShowLinkDialog(false)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Dialog */}
      {showImageDialog && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageDialog(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Insert Image
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {imageUrl && (
                <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-2">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="max-w-full h-auto rounded"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="flex gap-2">
                <button
                  onClick={insertImage}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Insert
                </button>
                <button
                  onClick={() => setShowImageDialog(false)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

