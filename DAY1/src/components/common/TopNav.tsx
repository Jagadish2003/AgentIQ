import { NavItem } from '../../types/connector';
import { LogoMark, UserIcon } from './icons';
import { useNavigate } from 'react-router-dom';

interface TopNavProps { navItems: NavItem[] }

export default function TopNav({ navItems }: TopNavProps) {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-14 bg-panel border-b border-border shadow-[0_1px_0_#1D2B45]">
      {/* Logo */}
      <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/integration-hub')}>
        <div className="w-8 h-8 rounded-lg bg-panel2 border border-border flex items-center justify-center">
          <LogoMark />
        </div>
        <span className="text-base font-extrabold text-text tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          AgentIQ
        </span>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`
              text-[13.5px] font-medium font-sans pb-1 border-b-2 transition-colors
              ${item.active
                ? 'text-text border-accent'
                : 'text-muted border-transparent hover:text-text'}
            `}
          >
            {item.label}
          </button>
        ))}

        {/* Admin */}
        <div className="flex items-center gap-2 pl-6 border-l border-border">
          <span className="text-[13px] font-semibold text-text">Administrator</span>
          <div className="w-8 h-8 rounded-full bg-panel2 border border-border flex items-center justify-center">
            <UserIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
