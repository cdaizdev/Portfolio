import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Soluciones' },
    { href: '#proceso', label: 'Proceso' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="absolute z-20 p-4 inset-x-0 top-0 border-b border-white/9">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <a className="inline-flex items-center gap-2 font-bold text-[var(--color-bg-alt)]" href="#inicio" aria-label="cdaizdev, inicio">
                    <span className="grid w-10 h-10 place-items-center border border-primary rounded-xl text-primary text-base font-medium tracking-[-3px]" aria-hidden="true">&lt;/&gt;</span>
                    <span>cdaizdev<span className="text-primary">.</span></span>
                </a>

                <nav className="hidden md:flex items-center gap-12 font-semibold" aria-label="Navegación principal escritorio">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="text-sm text-muted hover:text-primary transition-colors duration-200">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a className="btn btn-primary" href="#contacto">
                    Hablemos <ArrowUpRight size={16} aria-hidden="true" />
                </a>

                {isMenuOpen && (
                    <nav className="absolute top-full left-0 w-full bg-[var(--color-bg)] text-[var(--color-text)] p-6 flex flex-col gap-4 shadow-xl border-b border-white/10 md:hidden z-30" aria-label="Navegación móvil">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-semibold transition-colors duration-200 hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            className="flex items-center justify-center gap-1 mt-2 w-full py-3 bg-primary text-[#101914] font-medium rounded-xl transition-opacity hover:opacity-90"
                            href="#contacto"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hablemos <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                    </nav>
                )}

                <button
                    className="md:hidden p-2 rounded-lg text-[var(--color-bg-alt)] hover:bg-white/5 transition-colors"
                    type="button"
                    aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
        </header>
    )
}
