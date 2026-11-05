import { ArrowDownRight, Compass, Lightbulb, Rocket, Wrench } from 'lucide-react'

const steps = [
    { number: '01', title: 'Conversamos', description: 'Entiendo tu negocio, tus usuarios y el problema que quieres resolver.', icon: Compass },
    { number: '02', title: 'Definimos', description: 'Aterrizamos el alcance y priorizamos lo que más valor aporta.', icon: Lightbulb },
    { number: '03', title: 'Construimos', description: 'Desarrollo de forma iterativa, con comunicación clara en cada etapa.', icon: Wrench },
    { number: '04', title: 'Lanzamos', description: 'Publicamos, medimos y dejamos todo preparado para seguir creciendo.', icon: Rocket },
]

export default function ProcessSection() {
    return (
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
    )
}
