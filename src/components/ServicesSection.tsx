import { ArrowUpRight, Bot, Braces, PanelsTopLeft } from "lucide-react";

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

export default function ServicesSection() {
    return (
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
    )
}