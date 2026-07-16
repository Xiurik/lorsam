import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants';
import { ERoute } from '../../types';
import { cn } from '../../lib/cn';
import { Logo } from '../ui/Logo';
import { MobileMenu } from './MobileMenu';

/**
 * Sticky top navigation. Gains a shadow once the page is scrolled, exposes the
 * primary routes with active states, and toggles a mobile drawer below `md`.
 */
export function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b bg-white/90 backdrop-blur transition-shadow',
        scrolled ? 'border-fog shadow-sm' : 'border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={ERoute.Home} aria-label="LORSAM — Inicio" className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ERoute.Home}
              className={({ isActive }) =>
                cn(
                  'relative rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                  isActive ? 'text-brand-blue-700' : 'text-graphite hover:text-brand-blue-700',
                  'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-red-500 after:transition-transform after:duration-200',
                  isActive ? 'after:scale-x-100' : 'after:scale-x-0',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* <div className="hidden md:block">
          <CTAButton to={ERoute.Contacto} variant="primary" size="md">
            Cotizar
          </CTAButton>
        </div> */}

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-mist md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden focusable={false} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu links={NAV_LINKS} onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
