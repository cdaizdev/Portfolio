
import {
    ArrowDown, ArrowRight, ArrowUpRight, Code2, MessageCircle, Terminal, Bot, Braces, PanelsTopLeft,
    Workflow, ShoppingBag, ChartNoAxesCombined, Compass, Lightbulb, Wrench, Rocket, ArrowDownRight,
    CircleCheckBig
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
            <section className="relative flex flex-col min-h-40 items-center overflow-hidden pt-32 pb-5 bg-hero" id="inicio">
                <div className="hero-grid" aria-hidden="true" />
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto">
                    <div className="">
                        <div className="flex gap-4 justify-center items-center">
                            <div className='flex gap-4 justify-center items-center bg-primary/20 py-1 px-4 rounded-full border border-primary'>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <p className='text-primary text-sm'>
                                    DESARROLLO DE SOFTWARE · WEB · AUTOMATIZACIÓN
                                </p>
                            </div>
                        </div>
                        <h1 className='text-white'>Convierto ideas en <span className='text-primary'>soluciones digitales</span> que hacen avanzar tu negocio.</h1>
                        <p className="text-muted">
                            Diseño y desarrollo productos web y automatizaciones a medida.
                            Tecnología bien pensada, hecha para resolver problemas reales.
                        </p>
                        <div className="flex items-center gap-6 mt-6">
                            <a className="btn btn-primary py-4" href="#contacto">
                                Cuéntame tu idea <ArrowRight size={17} aria-hidden="true" />
                            </a>
                            <a className="btn btn-outline-primary py-4" href="#servicios">
                                Explorar servicios <ArrowDown size={16} aria-hidden="true" />
                            </a>
                        </div>
                        <div className="flex items-center gap-4 mt-6 text-muted text-sm">
                            <span><CircleCheckBig className="h-4 w-4" aria-hidden="true" /></span>
                            <span>Soluciones claras, escalables y pensadas para personas.</span>
                        </div>
                    </div>

                    <div className="relative flex min-h-[390px] items-center justify-center" aria-label="Ilustración de una solución digital en desarrollo">

                        {/* Ventana de Código 3D */}
                        <div className="relative z-10 w-full max-w-[430px] overflow-hidden rounded-[13px] border border-[rgb(225_237_225/14%)] bg-[#151f19] shadow-[0_28px_90px_rgb(0_0_0/35%),0_0_80px_rgb(166_211_125/5%)] [transform:perspective(1000px)_rotateY(-5deg)_rotateX(2deg)]">

                            {/* Cabecera de la ventana */}
                            <div className="flex h-[47px] items-center justify-between px-[15px] border-b border-white/[0.07] bg-[#18231c]">
                                <div className="flex gap-[5px]" aria-hidden="true">
                                    <span className="w-[7px] h-[7px] rounded-full bg-[#ef7c6a] inline-block"></span>
                                    <span className="w-[7px] h-[7px] rounded-full bg-[#e8c15d] inline-block"></span>
                                    <span className="w-[7px] h-[7px] rounded-full bg-[#80bb67] inline-block"></span>
                                </div>

                                <div className="flex items-center gap-[7px] text-[#c7d0c8] font-mono text-[10px]">
                                    <Code2 size={13} className="text-[var(--color-primary)]" aria-hidden="true" /> solution.py
                                </div>

                                <Terminal size={15} className="text-[#87958a]" aria-hidden="true" />
                            </div>

                            {/* Contenido del editor */}
                            <div className="relative min-h-[246px] p-[25px_24px_23px] font-mono text-[12px] leading-[2.15]">
                                {codeLines.map((line) => (
                                    <div className="flex gap-5 whitespace-pre" key={line.number}>
                                        <span className="text-[#536258] select-none">{line.number}</span>
                                        <code className="text-[#d5ded6]">{line.content}</code>
                                    </div>
                                ))}
                                <div className="absolute bottom-[42px] left-[39px] w-[7px] h-[15px] bg-[var(--color-primary)] opacity-80 animate-pulse" aria-hidden="true" />
                            </div>

                            {/* Pie de la ventana */}
                            <div className="flex h-[34px] items-center justify-between px-[14px] border-t border-white/[0.07] text-[#819087] font-mono text-[8px]">
                                <span className="flex items-center gap-[6px]">
                                    <span className="w-[5px] h-[5px] rounded-full bg-[var(--color-primary)] inline-block"></span> Compilación correcta
                                </span>
                                <span>UTF-8 &nbsp;·&nbsp; TypeScript</span>
                            </div>
                        </div>

                        {/* Tarjeta flotante superior */}
                        <div className="absolute z-25 top-6 -right-[3px] flex items-center gap-[10px] p-[12px_14px] border border-white/10 rounded-[10px] bg-[#202b23] shadow-[0_15px_40px_rgb(0_0_0/25%)]">
                            <span className="grid w-8 h-8 place-items-center rounded-lg bg-[rgb(200_250_89/12%)] text-[var(--color-primary)]">
                                <Code2 size={17} aria-hidden="true" />
                            </span>
                            <div className="grid gap-[3px]">
                                <strong className="text-[#f2f5ef] text-[10px]">Hecho a medida</strong>
                                <small className="text-[#97a49a] text-[8px]">Para tu forma de trabajar</small>
                            </div>
                        </div>

                        {/* Tarjeta flotante inferior */}
                        <div className="absolute z-20 bottom-5 -left-5 flex items-center gap-[10px] p-[12px_14px] border border-white/10 rounded-[10px] bg-[#202b23] shadow-[0_15px_40px_rgb(0_0_0/25%)]">
                            <span className="text-[var(--color-primary)] text-[25px]" aria-hidden="true">✳</span>
                            <div className="grid gap-[3px]">
                                <strong className="text-[#f2f5ef] text-[10px]">Menos fricción.</strong>
                                <small className="text-[#97a49a] text-[8px]">Más tiempo para crecer.</small>
                            </div>
                        </div>

                        {/* Órbitas decorativas de fondo */}
                        <div className="absolute w-[440px] h-[440px] border border-[rgb(198_232_178/8%)] rounded-full pointer-events-none" aria-hidden="true" />
                        <div className="absolute w-[530px] h-[530px] border border-[rgb(198_232_178/5%)] rounded-full pointer-events-none" aria-hidden="true" />

                    </div>
                </div>
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