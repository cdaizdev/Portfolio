import { ArrowUpRight, Code2, MessageCircle } from 'lucide-react'

export default function ContactSection() {
    return (
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
                    <a className="inline-flex items-center gap-2 text-sm font-bold text-text-dark transition-colors hover:text-primary" href="https://github.com/cdaizdev" target="_blank" rel="noreferrer">
                        <Code2 size={17} aria-hidden="true" /> Ver perfil de GitHub
                    </a>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-subtle-dark">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    Respondo personalmente cada consulta.
                </div>
            </div>
        </section>
    )
}
