
import {
    ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, MessageCircle, Terminal, Bot, Braces, PanelsTopLeft,
    Workflow, ShoppingBag, ChartNoAxesCombined, Compass, Lightbulb, Wrench, Rocket, ArrowDownRight
} from 'lucide-react';

const codeLines = [
    { number: '01', content: <><span className="text-[#c29bff]">const</span> <span className="text-[#7bc8ed]">idea</span> = {'{'}</> },
    { number: '02', content: <>  problema: <span className="text-[#b7de77]">'procesos manuales'</span>,</> },
    { number: '03', content: <>  objetivo: <span className="text-[#b7de77]">'hacerlo simple'</span>,</> },
    { number: '04', content: <>  solucion: <span className="text-[#b7de77]">'software a medida'</span>,</> },
    { number: '05', content: <>  impacto: <span className="text-[#e9c779]">true</span></> },
    { number: '06', content: <>{'}'}</> },
];

const services = [
    {
        number: '01',
        icon: PanelsTopLeft,
        title: 'Desarrollo web',
        description: 'Sitios y aplicaciones web rápidos, accesibles y listos para crecer con tu proyecto.',
        tags: ['Web apps', 'E-commerce', 'Responsive'],
    },
    {
        number: '02',
        icon: Braces,
        title: 'Software a medida',
        description: 'Herramientas y plataformas diseñadas alrededor de tus procesos, no al revés.',
        tags: ['Integraciones', 'APIs', 'Paneles'],
    },
    {
        number: '03',
        icon: Bot,
        title: 'Automatización',
        description: 'Conecto tus herramientas y elimino tareas repetitivas para que tu equipo se enfoque en lo importante.',
        tags: ['Flujos', 'Procesos', 'Productividad'],
    },
];

const examples = [
    {
        number: '01',
        type: 'PLATAFORMA WEB',
        title: 'Un panel para tenerlo todo bajo control.',
        description: 'Una vista clara de las métricas, tareas y actividad que ayudan a tomar mejores decisiones.',
        icon: ChartNoAxesCombined,
        className: 'project-dashboard',
        visual: (
            <div className="dashboard-preview" aria-hidden="true">
                <div className="preview-sidebar"><b /><i /><i /><i /><i /></div>
                <div className="preview-main">
                    <div className="preview-header"><span /><i /></div>
                    <div className="preview-kpis"><i /><i /><i /></div>
                    <div className="preview-chart">
                        <div className="chart-labels"><i /><i /><i /><i /></div>
                        <div className="chart-bars">{[38, 57, 46, 72, 53, 87, 67, 94, 61, 78, 100, 76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        number: '02',
        type: 'AUTOMATIZACIÓN',
        title: 'Menos tareas manuales. Más flujo.',
        description: 'Un proceso que conecta herramientas, organiza cada paso y mantiene al equipo al tanto.',
        icon: Workflow,
        className: 'project-automation',
        visual: (
            <div className="workflow-preview" aria-hidden="true">
                <div className="workflow-node"><span className="workflow-node-icon node-purple"><ShoppingBag size={17} /></span><small>Nueva solicitud</small></div>
                <div className="workflow-connector"><i /><i /><i /></div>
                <div className="workflow-node"><span className="workflow-node-icon node-lime"><Workflow size={17} /></span><small>Procesar datos</small></div>
                <div className="workflow-connector"><i /><i /><i /></div>
                <div className="workflow-node"><span className="workflow-node-icon node-blue"><ArrowUpRight size={17} /></span><small>Notificar equipo</small></div>
            </div>
        ),
    },
];

const steps = [
    { number: '01', title: 'Conversamos', description: 'Entiendo tu negocio, tus usuarios y el problema que quieres resolver.', icon: Compass },
    { number: '02', title: 'Definimos', description: 'Aterrizamos el alcance y priorizamos lo que más valor aporta.', icon: Lightbulb },
    { number: '03', title: 'Construimos', description: 'Desarrollo de forma iterativa, con comunicación clara en cada etapa.', icon: Wrench },
    { number: '04', title: 'Lanzamos', description: 'Publicamos, medimos y dejamos todo preparado para seguir creciendo.', icon: Rocket },
];


export default function HomePage() {
    return (
        <>
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
            <section className="section services-section" id="servicios">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow"><span className="eyebrow-mark">01</span> LO QUE HAGO</p>
                            <h2>Tecnología útil.<br /><span>Resultados reales.</span></h2>
                        </div>
                        <p className="section-intro">
                            Cada proyecto empieza entendiendo el reto. Después, construyo la solución adecuada: sin complejidad innecesaria y con espacio para evolucionar.
                        </p>
                    </div>
                    <div className="service-grid">
                        {services.map(({ number, icon: Icon, title, description, tags }) => (
                            <article className="service-card" key={number}>
                                <div className="service-card-top">
                                    <span className="service-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                                    <span className="card-number">{number}</span>
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="service-tags">
                                    {tags.map((tag) => <span key={tag}>{tag}</span>)}
                                </div>
                                <a className="card-arrow" href="#contacto" aria-label={`Consultar sobre ${title}`}>
                                    <ArrowUpRight size={17} aria-hidden="true" />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section work-section" id="proyectos">
                <div className="container">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow"><span className="eyebrow-mark">02</span> POSIBILIDADES</p>
                            <h2>De un problema diario<br /><span>a una solución digital.</span></h2>
                        </div>
                        <p className="section-intro">
                            Algunas formas en las que el software y la automatización pueden hacer tu trabajo más sencillo.
                        </p>
                    </div>
                    <div className="project-grid">
                        {examples.map(({ number, type, title, description, icon: Icon, className, visual }) => (
                            <article className={`project-card ${className}`} key={number}>
                                <div className="project-art">{visual}</div>
                                <div className="project-content">
                                    <div className="project-meta"><span>{type}</span><span>{number}</span></div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <span className="project-example"><Icon size={14} aria-hidden="true" /> Ejemplo de solución</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section process-section" id="proceso">
                <div className="container process-layout">
                    <div className="process-heading">
                        <p className="eyebrow"><span className="eyebrow-mark">03</span> CÓMO TRABAJO</p>
                        <h2>Un buen resultado<br />empieza con <span>un buen proceso.</span></h2>
                        <p>Colaboración cercana, pasos claros y foco en lo que de verdad necesita tu proyecto.</p>
                        <a className="text-link" href="#contacto">Hablemos de tu proyecto <ArrowDownRight size={17} aria-hidden="true" /></a>
                    </div>
                    <div className="process-list">
                        {steps.map(({ number, title, description, icon: Icon }) => (
                            <article className="process-step" key={number}>
                                <span className="step-number">{number}</span>
                                <span className="step-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                                <div><h3>{title}</h3><p>{description}</p></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
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
        </>
    )
}