import { Code2, Cpu, Rocket } from 'lucide-react'

export default function AboutSection() {
    return (
        <section id="services" className="py-24 bg-eco-50 dark:bg-[#0a140e] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <span className="text-eco-700 dark:text-eco-200 uppercase tracking-widest text-xs font-bold bg-eco-200/10 px-3 py-1.5 rounded-full border border-eco-700/20 dark:border-eco-200/20">
                        Nuestros Servicios
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-eco-900 dark:text-white">
                        Soluciones tecnológicas diseñadas para escalar tu negocio
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                        Transformamos tus ideas en aplicaciones web de alto rendimiento, software a medida y procesos automatizados que multiplican tu productividad.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-eco-carddark p-8 rounded-3xl border border-eco-900/10 dark:border-eco-200/10 hover:border-eco-600/40 dark:hover:border-eco-200/40 transition-all duration-300 group hover:-translate-y-2">
                        <div className="w-14 h-14 rounded-2xl bg-eco-600/10 text-eco-700 dark:bg-eco-200/10 dark:text-eco-200 flex items-center justify-center text-2xl mb-6 group-hover:bg-eco-200 group-hover:text-eco-dark transition-all">
                            <Code2 size={24} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-eco-900 dark:text-white mb-3">
                            Desarrollo Web & Apps
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Creamos plataformas web modernas, aplicaciones móviles nativas y PWAs rápidas, seguras y adaptadas a cualquier dispositivo.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-eco-carddark p-8 rounded-3xl border border-eco-900/10 dark:border-eco-200/10 hover:border-eco-600/40 dark:hover:border-eco-200/40 transition-all duration-300 group hover:-translate-y-2">
                        <div className="w-14 h-14 rounded-2xl bg-eco-600/10 text-eco-700 dark:bg-eco-200/10 dark:text-eco-200 flex items-center justify-center text-2xl mb-6 group-hover:bg-eco-200 group-hover:text-eco-dark transition-all">
                            <Cpu size={24} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-eco-900 dark:text-white mb-3">
                            Automatización de Procesos
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Conectamos tus herramientas y automatizamos tareas repetitivas mediante flujos inteligentes y APIs para ahorrar tiempo y reducir errores.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-eco-carddark p-8 rounded-3xl border border-eco-900/10 dark:border-eco-200/10 hover:border-eco-600/40 dark:hover:border-eco-200/40 transition-all duration-300 group hover:-translate-y-2">
                        <div className="w-14 h-14 rounded-2xl bg-eco-600/10 text-eco-700 dark:bg-eco-200/10 dark:text-eco-200 flex items-center justify-center text-2xl mb-6 group-hover:bg-eco-200 group-hover:text-eco-dark transition-all">
                            <Rocket size={24} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-eco-900 dark:text-white mb-3">
                            Arquitectura & Escalabilidad
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Diseñamos arquitecturas de software robustas y preparadas para crecer al ritmo de tu empresa sin comprometer el rendimiento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
