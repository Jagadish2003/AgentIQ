import { useEffect, useState } from 'react';
import { CheckIcon } from './icons';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); setTimeout(onClose, 300); }, 2800);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className={`
      fixed bottom-6 right-6 z-50 flex items-center gap-2
      px-4 py-2.5 rounded-xl
      bg-panel2 border border-accent/40 text-accent
      text-sm font-semibold font-sans
      shadow-[0_4px_24px_rgba(51,209,198,0.15)]
      transition-all duration-300
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
    `}>
      <CheckIcon /> {message}
    </div>
  );
}
