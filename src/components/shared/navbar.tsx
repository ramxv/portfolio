"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

function NavLink({ href, children, isActive }: NavLinkProps) {
  const baseClasses =
    "hover:text-foreground/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground rounded-sm transition-colors";
  const activeClasses = isActive
    ? "font-semibold underline underline-offset-4"
    : "";

  // Si es anchor link (#), usar <a>
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${activeClasses}`}
        aria-current={isActive ? "true" : undefined}
      >
        {children}
      </a>
    );
  }

  // Si es ruta de página, usar Next Link
  return (
    <Link
      href={href}
      className={`${baseClasses} ${activeClasses}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-col sm:flex-row gap-6 sm:gap-40 items-center justify-between py-6"
      aria-label="Navegación principal"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/next.svg"
          alt="Ram Singh Logo"
          width={100}
          height={24}
          className="dark:invert transition-opacity group-hover:opacity-80"
          priority
        />
        <span className="text-lg font-semibold group-hover:text-foreground/80 transition-colors">
          Ram Singh
        </span>
      </Link>
      <ul className="flex flex-row gap-4 sm:gap-6">
        <li>
          <NavLink href="/#aboutMe" isActive={pathname === "/" && false}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink href="/#projects" isActive={pathname === "/" && false}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink href="/#contactMe" isActive={pathname === "/" && false}>
            Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink href="/blog" isActive={pathname?.startsWith("/blog") ?? false}>
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
