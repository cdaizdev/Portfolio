import { useState } from 'react'

export default function AgendaSection() {
    const [activeDay, setActiveDay] = useState(1)

    return (
        <section id="agenda" className="py-24 bg-eco-50 dark:bg-[#0a140e] relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                    <span
                        className="text-eco-700 dark:text-eco-200 uppercase tracking-widest text-xs font-bold bg-eco-200/10 px-3 py-1.5 rounded-full border border-eco-700/20 dark:border-eco-200/20">Programa
                        Oficial</span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-eco-900 dark:text-white">Agenda del Evento</h2>
                    <p className="text-gray-600 dark:text-gray-400">Tres días intensivos de conferencias, paneles de debate y demostraciones en
                        vivo.</p>
                </div>
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-eco-carddark p-1.5 rounded-2xl border border-eco-200/20">
                        <button type="button" onClick={() => setActiveDay(1)}
                            className={activeDay === 1 ? "px-6 py-3 rounded-xl font-bold text-sm transition-all bg-eco-200 text-eco-dark shadow-md" : "px-6 py-3 rounded-xl font-bold text-sm transition-all text-gray-300 hover:text-white"}>Día
                            1: 14 Nov</button>
                        <button type="button" onClick={() => setActiveDay(2)}
                            className={activeDay === 2 ? "px-6 py-3 rounded-xl font-bold text-sm transition-all bg-eco-200 text-eco-dark shadow-md" : "px-6 py-3 rounded-xl font-bold text-sm transition-all text-gray-300 hover:text-white"}>Día
                            2: 15 Nov</button>
                        <button type="button" onClick={() => setActiveDay(3)}
                            className={activeDay === 3 ? "px-6 py-3 rounded-xl font-bold text-sm transition-all bg-eco-200 text-eco-dark shadow-md" : "px-6 py-3 rounded-xl font-bold text-sm transition-all text-gray-300 hover:text-white"}>Día
                            3: 16 Nov</button>
                    </div>
                </div>
                <div className={`space-y-4 animate__animated animate__fadeIn ${activeDay === 1 ? "" : "hidden"}`}>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-eco-200/30 transition-all">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                09:00 - 10:00
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Apertura y Bienvenida Institucional</h4>
                                <p className="text-gray-400 text-sm">El futuro de la tecnología verde en Europa</p>
                            </div>
                        </div>
                        <span
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Auditorio
                            Principal</span>
                    </div>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-eco-200/30 transition-all">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                10:15 - 11:30
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Keynote: IA y el desafío energético global</h4>
                                <p className="text-gray-400 text-sm">Dra. Elena Vance</p>
                            </div>
                        </div>
                        <span
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Keynote
                            Stage</span>
                    </div>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-eco-200/30 transition-all">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                12:00 - 13:30
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Panel: Financiación para Startups ClimaTech</h4>
                                <p className="text-gray-400 text-sm">Marcos Almansa y panel de inversores internacionales</p>
                            </div>
                        </div>
                        <span className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Sala
                            de Inversión</span>
                    </div>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-eco-200/30 transition-all">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                15:00 - 17:00
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Workshop Práctico: Medición de Huella de Carbono
                                </h4>
                                <p className="text-gray-400 text-sm">Sofía Larsson</p>
                            </div>
                        </div>
                        <span
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Laboratorio
                            B</span>
                    </div>
                </div>
                <div className={`space-y-4 animate__animated animate__fadeIn ${activeDay === 2 ? "" : "hidden"}`}>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                09:30 - 11:00</div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Nanotecnología aplicada a la captura de carbono
                                </h4>
                                <p className="text-gray-400 text-sm">Dr. Kenji Sato</p>
                            </div>
                        </div>
                        <span
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Keynote
                            Stage</span>
                    </div>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                11:30 - 13:00</div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Mesa Redonda: Ciudades Inteligentes y Resilientes
                                </h4>
                                <p className="text-gray-400 text-sm">Expertos urbanistas y tecnólogos</p>
                            </div>
                        </div>
                        <span
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Auditorio
                            Principal</span>
                    </div>
                </div>
                <div className={`space-y-4 animate__animated animate__fadeIn ${activeDay === 3 ? "" : "hidden"}`}>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                10:00 - 12:00</div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Demo Day: Presentación de 20 Startups Finalistas
                                </h4>
                                <p className="text-gray-400 text-sm">Premios a la innovación sostenible EcoTech 2026</p>
                            </div>
                        </div>
                        <span
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Startup
                            Arena</span>
                    </div>
                    <div
                        className="bg-eco-carddark p-6 rounded-2xl border border-eco-200/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center space-x-4">
                            <div
                                className="bg-eco-200/10 text-eco-200 font-bold px-4 py-2 rounded-xl text-sm border border-eco-200/20">
                                13:30 - 15:00</div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Clausura y Conclusiones del Cónclave</h4>
                                <p className="text-gray-400 text-sm">Manifiesto EcoTech 2026</p>
                            </div>
                        </div>
                        <span
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded-full border border-white/10">Auditorio
                            Principal</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
