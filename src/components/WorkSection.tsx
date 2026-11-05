import { ArrowUpRight, Workflow, ShoppingBag, ChartNoAxesCombined } from 'lucide-react'

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
]

export default function WorkSection() {
    return (
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
    )
}
