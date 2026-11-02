import { ArrowRight, Bot, Code, Gauge, Laptop, Zap } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-eco-50 via-white to-eco-100 pt-24 pb-16 overflow-hidden dark:from-eco-dark dark:via-eco-dark dark:to-eco-carddark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10 w-full py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left animate__animated animate__fadeInLeft">
                        <div className="inline-flex items-center space-x-2 bg-white border border-eco-700/20 px-4 py-2 rounded-full text-eco-800 text-sm font-semibold tracking-wide dark:bg-eco-carddark dark:border-eco-200/30 dark:text-eco-200">
                            <span className="w-2.5 h-2.5 rounded-full bg-eco-600 animate-pulse dark:bg-eco-200"></span>
                            <p>
                                Software a medida & Automatización inteligente
                            </p>
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-eco-900 tracking-tight leading-none dark:text-white">
                            Impulsamos tu negocio con <br />
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-eco-600 to-eco-800 dark:from-eco-200 dark:to-eco-400">
                                software a medida
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-light dark:text-gray-300">
                            Diseñamos y desarrollamos aplicaciones web robustas, software escalable y flujos automatizados para acelerar el crecimiento de tu empresa.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-sm text-eco-800 dark:text-gray-300">
                            <div className="flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-xl border border-eco-900/10 dark:bg-white/5 dark:border-white/10">
                                <Code size={16} aria-hidden="true" className="text-eco-700 dark:text-eco-200" />
                                <span>Desarrollo Web & Apps</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-xl border border-eco-900/10 dark:bg-white/5 dark:border-white/10">
                                <Bot size={16} aria-hidden="true" className="text-eco-700 dark:text-eco-200" />
                                <span>Automatización de Procesos</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-xl border border-eco-900/10 dark:bg-white/5 dark:border-white/10">
                                <Gauge size={16} aria-hidden="true" className="text-eco-700 dark:text-eco-200" />
                                <span>Alto Rendimiento</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <a href="#contacto"
                                className="w-full sm:w-auto text-center bg-eco-700 text-white font-extrabold px-8 py-4 rounded-2xl hover:bg-eco-800 transition-all transform hover:-translate-y-1 glow-btn text-lg dark:bg-eco-200 dark:text-eco-dark dark:hover:bg-eco-300">
                                Iniciar Proyecto
                                <ArrowRight size={16} aria-hidden="true" className="ml-2 inline-block align-middle" />
                            </a>
                            <a href="#servicios"
                                className="w-full sm:w-auto text-center bg-eco-900/5 text-eco-900 font-semibold px-8 py-4 rounded-2xl hover:bg-eco-900/10 transition-all border border-eco-900/10 text-lg dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:border-white/10">
                                Ver Servicios
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative animate__animated animate__fadeInRight">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            <div className="rounded-3xl overflow-hidden border border-eco-600/30 glow-box shadow-2xl relative dark:border-eco-200/30">
                                <img src="img/data-stats.avif"
                                    alt="Desarrollo de software y automatización"
                                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 dark:from-eco-dark dark:opacity-80">
                                </div>

                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-eco-700/20 flex items-center justify-between dark:bg-eco-dark/90 dark:border-eco-200/20">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-eco-700 text-white flex items-center justify-center font-bold text-xl dark:bg-eco-200 dark:text-eco-dark">
                                            <Laptop size={22} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h4 className="text-eco-900 font-bold dark:text-white">Soluciones a Medida</h4>
                                            <p className="text-xs text-eco-700 dark:text-eco-200">Escalables y seguras</p>
                                        </div>
                                    </div>
                                    <span className="text-xs bg-eco-700/10 text-eco-800 px-3 py-1 rounded-full font-medium border border-eco-700/20 dark:bg-eco-200/20 dark:text-eco-200 dark:border-eco-200/30">
                                        Stack Moderno
                                    </span>
                                </div>
                            </div>

                            {/* Tarjeta Flotante Superior */}
                            <div className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-3 bg-white p-4 rounded-2xl border border-eco-700/20 shadow-xl animate-bounce duration-1000 dark:bg-eco-carddark dark:border-eco-200/20">
                                <div className="w-10 h-10 rounded-full bg-eco-700/10 text-eco-700 flex items-center justify-center dark:bg-eco-200/20 dark:text-eco-200">
                                    <Zap size={18} aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Eficiencia Operativa</p>
                                    <p className="text-sm font-bold text-eco-900 dark:text-white">+80% Automatizado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}