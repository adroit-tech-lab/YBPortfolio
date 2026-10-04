import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import brandLogo from "../../assets/brand_logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const linkClasses =
    "rounded-full px-5 py-3 text-sm font-medium text-slate-800 " +
    "transition-colors duration-300 hover:bg-white hover:text-blue-600 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600";

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/60 bg-white/60 px-4 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.10)] backdrop-blur-2xl backdrop-saturate-150 sm:px-6"
        >
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <img
              src={brandLogo}
              alt=""
              className="h-10 w-auto sm:h-12"
            />

            <span className="hidden text-base font-semibold tracking-tight text-slate-900 sm:block">
              Yusuf Busoyriy
            </span>

            <span className="sr-only sm:hidden">
              Yusuf Busoyriy — Home
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            <div className="flex items-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClasses}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/2348101785839"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Start a Project
              <ArrowRight
                aria-hidden="true"
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </a>
          </div>

          {/* Animated hamburger / X */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/40 text-slate-900 transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 lg:hidden"
          >
            <Menu
              aria-hidden="true"
              size={22}
              className={`absolute transition-all duration-300 motion-reduce:transition-none ${
                isOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              aria-hidden="true"
              size={22}
              className={`absolute transition-all duration-300 motion-reduce:transition-none ${
                isOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Tablet and mobile menu */}
      <div
        inert={!isOpen}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 flex items-center justify-center px-5 transition-[visibility,opacity] duration-300 motion-reduce:transition-none lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        {/* Click outside to close */}
        <button
          type="button"
          onClick={closeMenu}
          tabIndex={-1}
          aria-label="Close navigation menu"
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
        />

        <nav
          id="mobile-navigation"
          aria-label="Tablet and mobile navigation"
          className={`relative flex max-h-[calc(100dvh-12rem)] w-full max-w-sm flex-col items-center gap-2 overflow-y-auto rounded-[2.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ease-out motion-reduce:transition-none sm:p-8 ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-12 scale-95 opacity-0"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="w-full rounded-full px-6 py-3 text-center text-lg font-medium text-slate-800 transition-colors duration-300 hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#start_project"
            onClick={closeMenu}
            className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            Start a Project
            <ArrowRight
              aria-hidden="true"
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;