
import {
    ArrowDown, ArrowRight, ArrowUpRight, Code2, MessageCircle, Terminal, Bot, Braces, PanelsTopLeft,
    Workflow, ShoppingBag, ChartNoAxesCombined, Compass, Lightbulb, Wrench, Rocket,
    CircleCheckBig,
    ArrowDownRight
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
            <section className="relative flex flex-col min-h-screen items-center overflow-hidden pt-32 pb-5 bg-hero" id="inicio">
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

                    <div className="relative flex min-h-97.5 items-center justify-center" aria-label="Ilustración de una solución digital en desarrollo">

                        {/* Ventana de Código 3D */}
                        <div className="code-visual">

                            {/* Cabecera de la ventana */}
                            <div className="flex h-11 items-center justify-between px-4 border-b border-white/[0.07] bg-[#18231c]">
                                <div className="flex gap-2" aria-hidden="true">
                                    <span className="w-2 h-2 rounded-full bg-[#ef7c6a] inline-block"></span>
                                    <span className="w-2 h-2 rounded-full bg-[#e8c15d] inline-block"></span>
                                    <span className="w-2 h-2 rounded-full bg-[#80bb67] inline-block"></span>
                                </div>

                                <div className="flex items-center gap-2 text-[#c7d0c8] font-mono text-[10px]">
                                    <Code2 size={13} className="text-primary" aria-hidden="true" /> solution.py
                                </div>

                                <Terminal size={15} className="text-[#87958a]" aria-hidden="true" />
                            </div>

                            {/* Contenido del editor */}
                            <div className="relative min-h-61 p-[25px_24px_23px] font-mono text-[12px] leading-[2.15]">
                                {codeLines.map((line) => (
                                    <div className="flex gap-5 whitespace-pre" key={line.number}>
                                        <span className="text-[#536258] select-none">{line.number}</span>
                                        <code className="text-[#d5ded6]">{line.content}</code>
                                    </div>
                                ))}
                                <div className="absolute bottom-10 left-10 w-2 h-2 bg-primary opacity-80 animate-pulse" aria-hidden="true" />
                            </div>

                            {/* Pie de la ventana */}
                            <div className="flex h-8 items-center justify-between px-4 border-t border-white/[0.07] text-muted font-mono text-sm">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Compilación correcta
                                </span>
                                <span>UTF-8 &nbsp;·&nbsp; TypeScript</span>
                            </div>
                        </div>

                        {/* Tarjeta flotante superior */}
                        <div className="absolute z-25 top-6 -right-0.75 flex items-center gap-2 p-[12px_14px] border border-white/10 rounded-[10px] bg-[#202b23] shadow-[0_15px_40px_rgb(0_0_0/25%)]">
                            <span className="grid w-8 h-8 place-items-center rounded-lg bg-[rgb(200_250_89/12%)] text-primary">
                                <Code2 size={17} aria-hidden="true" />
                            </span>
                            <div className="grid gap-1">
                                <strong className="text-white text-xs">Hecho a medida</strong>
                                <small className="text-muted text-xs">Para tu forma de trabajar</small>
                            </div>
                        </div>

                        {/* Tarjeta flotante inferior */}
                        <div className="absolute z-20 bottom-5 -left-5 flex items-center gap-[10px] p-[12px_14px] border border-white/10 rounded-[10px] bg-[#202b23] shadow-[0_15px_40px_rgb(0_0_0/25%)]">
                            <span className="text-[var(--color-primary)] text-[25px]" aria-hidden="true">✳</span>
                            <div className="grid gap-1">
                                <strong className="text-white text-xs">Menos fricción.</strong>
                                <small className="text-muted text-xs">Más tiempo para crecer.</small>
                            </div>
                        </div>

                        {/* Órbitas decorativas de fondo */}
                        <div className="absolute w-110 h-110 border border-[rgb(198_232_178/8%)] rounded-full pointer-events-none" aria-hidden="true" />
                        <div className="absolute w-[530px] h-[530px] border border-[rgb(198_232_178/5%)] rounded-full pointer-events-none" aria-hidden="true" />

                    </div>
                </div>
            </section>
            <section className="bg-bg-alt py-16 md:py-20 lg:py-24" id="servicios">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="mb-8 flex flex-col gap-4 lg:mb-11 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                        <div>
                            <p className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted">
                                <span className="inline-flex size-6 items-center justify-center rounded-full border border-[#dfe5dc] text-xs tracking-normal text-[#657463]">01</span>
                                LO QUE HAGO
                            </p>
                            <h2 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-text lg:mt-5 lg:text-5xl">
                                Tecnología útil.<br /><span className="text-[#87938a]">Resultados reales.</span>
                            </h2>
                        </div>
                        <p className="mb-1 max-w-xl text-xs leading-6 text-muted lg:max-w-sm">
                            Cada proyecto empieza entendiendo el reto. Después, construyo la solución adecuada: sin complejidad innecesaria y con espacio para evolucionar.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-4">
                        {services.map(({ number, icon: Icon, title, description, tags }) => (
                            <article className="group relative min-h-0 rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#d3dfc8] hover:shadow-lg sm:min-h-72 sm:px-5 lg:min-h-64 lg:px-6 lg:pt-6 lg:pb-6" key={number}>
                                <div className="mb-4 flex items-center justify-between lg:mb-6">
                                    <span className="grid size-11 place-items-center rounded-lg bg-[#f0f5e9] text-[#5c792f]">
                                        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                                    </span>
                                    <span className="font-mono text-xs tracking-wide text-[#89948c]">{number}</span>
                                </div>
                                <h3 className="mb-2 text-base font-extrabold tracking-tight text-text sm:text-sm lg:text-base">{title}</h3>
                                <p className="m-0 max-w-sm text-xs leading-5 text-muted">{description}</p>
                                <div className="mt-4 flex flex-wrap gap-1 sm:gap-2">
                                    {tags.map((tag) => (
                                        <span className="rounded border border-[#e8ece6] px-2 py-1 font-mono text-xs text-[#707b73]" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a className="absolute right-4 bottom-4 grid size-8 place-items-center rounded-full border border-border text-[#69756c] transition-colors hover:border-primary hover:bg-primary hover:text-text lg:right-6 lg:bottom-6" href="#contacto" aria-label={`Consultar sobre ${title}`}>
                                    <ArrowUpRight size={17} aria-hidden="true" />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-bg-alt py-16 md:py-20 lg:pt-20 lg:pb-24" id="proyectos">
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="mb-8 flex flex-col gap-4 lg:mb-11 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                        <div>
                            <p className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted">
                                <span className="inline-flex size-6 items-center justify-center rounded-full border border-[#dfe5dc] text-xs tracking-normal text-[#657463]">02</span>
                                POSIBILIDADES
                            </p>
                            <h2 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-text lg:mt-5 lg:text-5xl">
                                De un problema diario<br /><span className="text-[#87938a]">a una solución digital.</span>
                            </h2>
                        </div>
                        <p className="mb-1 max-w-xl text-xs leading-6 text-muted lg:max-w-sm">
                            Algunas formas en las que el software y la automatización pueden hacer tu trabajo más sencillo.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {examples.map(({ number, type, title, description, icon: Icon, className, visual }) => (
                            <article className={`overflow-hidden rounded-xl border border-border bg-surface ${className}`} key={number}>
                                <div className="project-art grid min-h-52 place-items-center overflow-hidden bg-bg-alt sm:min-h-60">{visual}</div>
                                <div className="p-5 sm:p-6">
                                    <div className="flex justify-between font-mono text-xs tracking-wider text-[#89948c]"><span>{type}</span><span>{number}</span></div>
                                    <h3 className="mt-3 mb-2 max-w-md text-lg leading-7 font-extrabold tracking-tight text-text">{title}</h3>
                                    <p className="m-0 max-w-lg text-xs leading-5 text-muted">{description}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-[#78856d]">
                                        <Icon size={14} aria-hidden="true" /> Ejemplo de solución
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-bg-alt py-16 md:py-20 lg:py-24" id="proceso">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 md:gap-12 lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-8">
                    <div>
                        <p className="flex items-center gap-2 font-mono text-xs tracking-wider text-muted">
                            <span className="inline-flex size-6 items-center justify-center rounded-full border border-[#dfe5dc] text-xs tracking-normal text-[#657463]">03</span>
                            CÓMO TRABAJO
                        </p>
                        <h2 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-text lg:mt-5 lg:text-5xl">
                            Un buen resultado<br />empieza con <span className="text-[#89958b]">un buen proceso.</span>
                        </h2>
                        <p className="mt-4 mb-6 max-w-sm text-xs leading-6 text-muted">
                            Colaboración cercana, pasos claros y foco en lo que de verdad necesita tu proyecto.
                        </p>
                        <a className="inline-flex items-center gap-2 font-semibold text-text transition-colors hover:text-muted" href="#contacto">
                            Hablemos de tu proyecto <ArrowDownRight size={17} aria-hidden="true" />
                        </a>
                    </div>
                    <div className="border-t border-border">
                        {steps.map(({ number, title, description, icon: Icon }) => (
                            <article className="flex items-start gap-3 border-b border-border py-5 sm:gap-4" key={number}>
                                <span className="pt-1 font-mono text-xs tracking-wide text-[#89948c]">{number}</span>
                                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#e3e8e0] text-[#6c8058] sm:size-10">
                                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="mb-1 text-sm font-extrabold tracking-tight text-text">{title}</h3>
                                    <p className="m-0 max-w-sm text-xs leading-5 text-muted">{description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative isolate overflow-hidden bg-surface-dark py-16 text-light md:py-20 lg:py-24" id="contacto">
                <div className="pointer-events-none absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent" aria-hidden="true" />
                <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-6 lg:px-8">
                    <p className="flex items-center justify-center gap-2 text-xs tracking-wider text-muted-dark">
                        <span className="size-2 rounded-full bg-primary" />
                        ¿TIENES UN PROYECTO EN MENTE?
                    </p>
                    <h2 className="my-4 text-4xl leading-tight font-bold tracking-tight text-light sm:text-5xl lg:text-6xl">
                        Hagamos que la tecnología<br /><span className="text-primary">trabaje para ti.</span>
                    </h2>
                    <p className="m-0 max-w-lg text-xs leading-6 text-muted-dark">
                        Cuéntame qué te gustaría mejorar. Encontramos juntos la solución adecuada para dar el siguiente paso.
                    </p>
                    <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                        <a className="btn btn-primary" href="https://github.com/cdaizdev" target="_blank" rel="noreferrer">
                            <MessageCircle size={17} aria-hidden="true" /> Conectemos <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                        <a className="btn btn-outline-primary" href="https://github.com/cdaizdev" target="_blank" rel="noreferrer">
                            <Code2 size={17} aria-hidden="true" /> Ver perfil de GitHub
                        </a>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs text-subtle-dark">
                        <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                        Respondo personalmente cada consulta.
                    </div>
                </div>
            </section>
        </>
    )
}