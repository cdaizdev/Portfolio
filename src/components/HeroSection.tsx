import { ArrowDown, ArrowRight, Check, Code2, Terminal } from 'lucide-react'

const codeLines = [
    { number: '01', content: <><span className="code-purple">const</span> <span className="code-blue">idea</span> = {'{'}</> },
    { number: '02', content: <>  problema: <span className="code-green">'procesos manuales'</span>,</> },
    { number: '03', content: <>  objetivo: <span className="code-green">'hacerlo simple'</span>,</> },
    { number: '04', content: <>  solucion: <span className="code-green">'software a medida'</span>,</> },
    { number: '05', content: <>  impacto: <span className="code-yellow">true</span></> },
    { number: '06', content: <>{'}'}</> },
]

export default function HeroSection() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-grid" aria-hidden="true" />
            <div className="container hero-layout">
                <div className="hero-copy">
                    <p className="eyebrow hero-eyebrow"><span className="status-dot" /> DESARROLLO DE SOFTWARE · WEB · AUTOMATIZACIÓN</p>
                    <h1>Convierto ideas en <span>soluciones digitales</span> que hacen avanzar tu negocio.</h1>
                    <p className="hero-description">
                        Diseño y desarrollo productos web y automatizaciones a medida. Tecnología bien pensada, hecha para resolver problemas reales.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#contacto">
                            Cuéntame tu idea <ArrowRight size={17} aria-hidden="true" />
                        </a>
                        <a className="text-link hero-secondary" href="#servicios">
                            Explorar servicios <ArrowDown size={16} aria-hidden="true" />
                        </a>
                    </div>
                    <div className="hero-proof">
                        <span className="proof-icon"><Check size={15} aria-hidden="true" /></span>
                        <span>Soluciones claras, escalables y pensadas para personas.</span>
                    </div>
                </div>

                <div className="code-visual" aria-label="Ilustración de una solución digital en desarrollo">
                    <div className="code-window">
                        <div className="window-top">
                            <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
                            <div className="window-tab"><Code2 size={13} aria-hidden="true" /> solution.ts</div>
                            <Terminal size={15} className="window-terminal" aria-hidden="true" />
                        </div>
                        <div className="code-content">
                            {codeLines.map((line) => (
                                <div className="code-line" key={line.number}>
                                    <span className="line-number">{line.number}</span>
                                    <code>{line.content}</code>
                                </div>
                            ))}
                            <div className="code-cursor" aria-hidden="true" />
                        </div>
                        <div className="code-footer">
                            <span><i className="footer-status" /> Compilación correcta</span>
                            <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
                        </div>
                    </div>
                    <div className="floating-card floating-card-top">
                        <span className="floating-card-icon"><Code2 size={17} aria-hidden="true" /></span>
                        <span><strong>Hecho a medida</strong><small>Para tu forma de trabajar</small></span>
                    </div>
                    <div className="floating-card floating-card-bottom">
                        <span className="floating-spark" aria-hidden="true">✳</span>
                        <span><strong>Menos fricción.</strong><small>Más tiempo para crecer.</small></span>
                    </div>
                    <div className="visual-orbit orbit-one" aria-hidden="true" />
                    <div className="visual-orbit orbit-two" aria-hidden="true" />
                </div>
            </div>
            <a className="hero-scroll" href="#servicios"><span /> Desliza para descubrir</a>
        </section>
    )
}
