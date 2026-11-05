import { ArrowUpRight, Bot, Braces, PanelsTopLeft } from 'lucide-react'

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
]

export default function AboutSection() {
    return (
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
    )
}
