'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'TOP' },
  { href: '/profile', label: 'PROFILE' },
  { href: '/music', label: 'MUSIC' },
] as const;

const ACCENT = '#C9A961';

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-amber-900/30 bg-[#0a0a0a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5 sm:px-8">
        <Link href="/" className="group block">
          <p className="text-[10px] uppercase tracking-[0.42em] text-gray-500">
            echoes of emotion
          </p>
          <p
            className="mt-1 text-xl font-light tracking-[0.3em] transition-colors group-hover:text-white"
            style={{ color: ACCENT }}
          >
            HATO RENOIR
          </p>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className="border-b py-1 text-xs tracking-[0.32em] text-gray-400 transition-colors hover:text-gray-100"
                    style={{
                      borderColor: isActive ? ACCENT : 'transparent',
                      color: isActive ? ACCENT : undefined,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
