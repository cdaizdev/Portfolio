import { ArrowUpRight, Code2 } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <a className="brand footer-brand" href="#inicio">
                    <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
                    <span>cdaizdev<span className="brand-dot">.</span></span>
                </a>
                <p>Desarrollo de software con propósito.</p>
                <div className="footer-links">
                    <a href="https://github.com/cdaizdev" target="_blank" rel="noreferrer">
                        <Code2 size={14} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                    <a href="#inicio">Volver arriba <ArrowUpRight size={14} aria-hidden="true" /></a>
                </div>
                <span className="footer-copy">© 2026 cdaizdev</span>
            </div>
        </footer>
    )
}
