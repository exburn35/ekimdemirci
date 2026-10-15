"use client";

import { useState, useEffect } from "react";
import { 
  Inbox, 
  Mail, 
  Phone, 
  Globe, 
  Trash2, 
  RefreshCw, 
  Calendar, 
  Search,
  ExternalLink,
  CheckCircle2,
  Copy
} from "lucide-react";

interface ContactMessage {
  id: string;
  name: string | null;
  email: string;
  phone: string | null;
  website: string | null;
  message: string | null;
  formType: string;
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const url = filter === "all" ? "/api/admin/messages" : `/api/admin/messages?filter=${filter}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Mesajlar yüklenemedi:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [filter]);

  const handleDelete = async (id: string) => {
    if (!confirm("Bu mesajı silmek istediğinize emin misiniz?")) return;
    try {
      const res = await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error("Mesaj silinemedi:", err);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredMessages = messages.filter((m) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      (m.name && m.name.toLowerCase().includes(q)) ||
      m.email.toLowerCase().includes(q) ||
      (m.phone && m.phone.toLowerCase().includes(q)) ||
      (m.website && m.website.toLowerCase().includes(q)) ||
      (m.message && m.message.toLowerCase().includes(q))
    );
  });

  const getBadge = (type: string) => {
    switch (type) {
      case "lead":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">Analiz Talebi</span>;
      case "newsletter":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Bülten</span>;
      case "audit":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">Audit Talebi</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">İletişim Formu</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Inbox className="w-7 h-7 text-purple-500" />
            Mesajlar & Talepler
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Web sitenizden iletilen tüm iletişim, analiz ve bülten kayıtları.
          </p>
        </div>
        <button
          onClick={fetchMessages}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors shadow-sm disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          Yenile
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
        {/* Type tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "Tümü" },
            { id: "contact", label: "İletişim" },
            { id: "lead", label: "Analiz Talepleri" },
            { id: "audit", label: "Audit Talepleri" },
            { id: "newsletter", label: "Bülten" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === tab.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Mesajlarda ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Messages list */}
      {isLoading ? (
        <div className="py-20 text-center">
          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">Mesajlar yükleniyor...</p>
        </div>
      ) : filteredMessages.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-12 text-center">
          <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Inbox className="w-8 h-8 text-purple-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Kayıt Bulunamadı</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {searchQuery ? "Arama kriterlerinize uygun mesaj bulunamadı." : "Henüz bir form mesajı veya talep kaydedilmemiş."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredMessages.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-700/60 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  {getBadge(item.formType)}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.name || item.email}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(item.createdAt).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700 dark:hover:text-red-400 p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="Mesajı Sil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sender Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href={`mailto:${item.email}`} className="hover:underline truncate">
                    {item.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(item.email, item.id)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
                    title="Kopyala"
                  >
                    {copiedId === item.id ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {item.phone && (
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <a href={`tel:${item.phone}`} className="hover:underline">
                      {item.phone}
                    </a>
                  </div>
                )}

                {item.website && (
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Globe className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <a
                      href={item.website.startsWith("http") ? item.website : `https://${item.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1 text-purple-500 truncate"
                    >
                      {item.website}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* Message Content */}
              {item.message && (
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed border border-gray-100 dark:border-gray-700/50">
                  {item.message}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
