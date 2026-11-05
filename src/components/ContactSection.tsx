import { ArrowUpRight, Code2, MessageCircle } from 'lucide-react'

export default function ContactSection() {
    return (
        <section className="contact-section" id="contacto">
            <div className="contact-grid" aria-hidden="true" />
            <div className="container contact-inner">
                <p className="eyebrow contact-eyebrow"><span className="status-dot" /> ¿TIENES UN PROYECTO EN MENTE?</p>
                <h2>Hagamos que la tecnología<br /><span>trabaje para ti.</span></h2>
                <p className="contact-description">
                    Cuéntame qué te gustaría mejorar. Encontramos juntos la solución adecuada para dar el siguiente paso.
                </p>
                <div className="contact-actions">
                    <a className="button button-primary" href="https://github.com/cdaizdev" target="_blank" rel="noreferrer">
                        <MessageCircle size={17} aria-hidden="true" /> Conectemos <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <a className="contact-github" href="https://github.com/cdaizdev" target="_blank" rel="noreferrer">
                        <Code2 size={17} aria-hidden="true" /> Ver perfil de GitHub
                    </a>
                </div>
                <div className="contact-note"><span /> Respondo personalmente cada consulta.</div>
            </div>
        </section>
    )
}
