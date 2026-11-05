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
        <header className="site-header">
            <div className="container header-inner">
                <a className="brand" href="#inicio" aria-label="cdaizdev, inicio">
                    <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
                    <span>cdaizdev<span className="brand-dot">.</span></span>
                </a>

                <nav className={`navigation${isMenuOpen ? ' navigation-open' : ''}`} aria-label="Navegación principal">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                    <a className="nav-mobile-cta" href="#contacto" onClick={() => setIsMenuOpen(false)}>
                        Hablemos <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                </nav>

                <a className="button button-small header-cta" href="#contacto">
                    Hablemos <ArrowUpRight size={16} aria-hidden="true" />
                </a>

                <button
                    className="menu-toggle"
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
