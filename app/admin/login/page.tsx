"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@ekimdemirci.com";
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        sessionStorage.setItem("admin_authenticated", "true");
        sessionStorage.setItem("admin_role", "ADMIN");
        router.push("/admin");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ 
        background: '#ffffff',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Purple Header Section */}
      <div 
        className="flex items-center justify-center py-20 px-4"
        style={{
          background: 'linear-gradient(to bottom right, #9333ea, #7c3aed)',
          minHeight: '40vh'
        }}
      >
        <div className="text-center">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ color: '#ffffff', fontFamily: 'sans-serif' }}
          >
            ADMIN LOGIN
          </h1>
          <p 
            className="text-lg"
            style={{ color: '#ffffff', fontFamily: 'sans-serif' }}
          >
            Hello there, Sign in and start managing your website
          </p>
        </div>
      </div>

      {/* White Form Section */}
      <div 
        className="flex-1 flex items-center justify-center px-4 py-12"
        style={{ 
          background: '#f9fafb',
          minHeight: '60vh'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div 
            className="rounded-lg shadow-lg p-8"
            style={{ 
              background: '#ffffff',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div 
                  className="p-3 border rounded-lg"
                  style={{ background: '#fef2f2', borderColor: '#fecaca' }}
                >
                  <p className="text-sm" style={{ color: '#991b1b' }}>{error}</p>
                </div>
              )}

              <div className="mb-6">
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#4b5563', fontFamily: 'sans-serif' }}
                >
                  Username
                </label>
                <div className="relative">
                  <Mail 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: '#9ca3af' }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none transition-colors"
                    style={{ 
                      borderColor: '#d1d5db',
                      color: '#111827',
                      borderBottomColor: email ? '#9333ea' : '#d1d5db',
                      fontFamily: 'sans-serif'
                    }}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#4b5563', fontFamily: 'sans-serif' }}
                >
                  Password
                </label>
                <div className="relative">
                  <Lock 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: '#9ca3af' }}
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none transition-colors"
                    style={{ 
                      borderColor: '#d1d5db',
                      color: '#111827',
                      borderBottomColor: password ? '#9333ea' : '#d1d5db',
                      fontFamily: 'sans-serif'
                    }}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded"
                    style={{ 
                      borderColor: '#d1d5db',
                      accentColor: '#9333ea'
                    }}
                  />
                  <span 
                    className="ml-2 text-sm"
                    style={{ color: '#4b5563', fontFamily: 'sans-serif' }}
                  >
                    Remember Me
                  </span>
                </label>
                <a 
                  href="#" 
                  className="text-sm hover:underline"
                  style={{ color: '#2563eb', fontFamily: 'sans-serif' }}
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background: '#ffffff',
                  borderColor: '#d1d5db',
                  color: '#374151',
                  fontFamily: 'sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.borderColor = '#9333ea';
                    e.currentTarget.style.color = '#9333ea';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.borderColor = '#d1d5db';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
              >
                {isLoading ? (
                  <>
                    <div 
                      className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
                      style={{ borderColor: '#9ca3af' }}
                    />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>LOGIN</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
