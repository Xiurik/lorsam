import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { INavLink } from '../../types';
import { cn } from '../../lib/cn';
import { Logo } from '../ui/Logo';
import { ERoute } from '../../types';

interface IMobileMenuProps {
  links: INavLink[];
  onClose: () => void;
}

/**
 * Full-screen mobile navigation drawer. Locks body scroll while open and
 * closes on Escape. Rendered inside an AnimatePresence by the Navbar.
 * @param links Navigation entries.
 * @param onClose Handler to dismiss the drawer.
 */
export function MobileMenu({ links, onClose }: IMobileMenuProps): React.JSX.Element {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      id="mobile-menu"
      className="fixed inset-0 z-50 bg-white shadow-2xl md:hidden"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-between border-b border-fog px-4 py-4">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-mist"
        >
          <X className="h-6 w-6" aria-hidden focusable={false} />
        </button>
      </div>

      <nav aria-label="Principal (móvil)" className="flex flex-col gap-1 px-4 py-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === ERoute.Home}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'rounded-lg px-4 py-3 text-lg font-semibold transition-colors',
                isActive ? 'bg-brand-blue-50 text-brand-blue-700' : 'text-graphite hover:bg-mist',
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
        {/* <CTAButton to={ERoute.Contacto} variant="primary" size="lg" className="mt-4 w-full">
          Cotizar proyecto
        </CTAButton> */}
      </nav>
    </motion.div>,
    document.body,
  );
}
