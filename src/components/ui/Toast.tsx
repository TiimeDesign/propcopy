'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface ToastContextValue {
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

interface ToastItem {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (message: string, type: 'success' | 'error' | 'info' = 'success') => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={() =>
            setToasts((prev) => prev.filter((t) => t.id !== toast.id))
          } />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const icons: Record<string, string> = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  const colors: Record<string, { bg: string; border: string; icon: string }> = {
    success: { bg: '#0B1437', border: 'rgba(201,168,76,0.35)', icon: '#C9A84C' },
    error: { bg: '#1a0808', border: 'rgba(239,68,68,0.35)', icon: '#ef4444' },
    info: { bg: '#0B1437', border: 'rgba(59,130,246,0.35)', icon: '#3b82f6' },
  };

  const c = colors[toast.type];

  return (
    <div
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: '12px',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        maxWidth: '320px',
      }}
      onClick={onDismiss}
    >
      <span
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: c.icon,
          color: '#0B1437',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          fontWeight: 800,
          flexShrink: 0,
        }}
      >
        {icons[toast.type]}
      </span>
      <span style={{ color: 'white', fontWeight: 600, fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
        {toast.message}
      </span>
    </div>
  );
}
