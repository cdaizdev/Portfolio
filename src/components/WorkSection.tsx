import { ArrowUpRight, ChartNoAxesCombined, ShoppingBag, Workflow } from "lucide-react";

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

export default function WorkSection() {
    return (
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
    )
}