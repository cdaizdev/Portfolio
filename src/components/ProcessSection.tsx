import { ArrowDownRight, Compass, Lightbulb, Rocket, Wrench } from 'lucide-react'

const steps = [
    { number: '01', title: 'Conversamos', description: 'Entiendo tu negocio, tus usuarios y el problema que quieres resolver.', icon: Compass },
    { number: '02', title: 'Definimos', description: 'Aterrizamos el alcance y priorizamos lo que más valor aporta.', icon: Lightbulb },
    { number: '03', title: 'Construimos', description: 'Desarrollo de forma iterativa, con comunicación clara en cada etapa.', icon: Wrench },
    { number: '04', title: 'Lanzamos', description: 'Publicamos, medimos y dejamos todo preparado para seguir creciendo.', icon: Rocket },
]

export default function ProcessSection() {
    return (
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
    )
}
