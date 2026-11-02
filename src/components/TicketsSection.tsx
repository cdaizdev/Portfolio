import { Check } from 'lucide-react'

type TicketsSectionProps = {
    onSelectTicket: (ticketName: string) => void
}

export default function TicketsSection({ onSelectTicket }: TicketsSectionProps) {
    return (
<section id="tickets" className="py-24 bg-eco-50 dark:bg-eco-dark relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span
                            className="text-eco-700 dark:text-eco-200 uppercase tracking-widest text-xs font-bold bg-eco-200/10 px-3 py-1.5 rounded-full border border-eco-700/20 dark:border-eco-200/20">Inscripción</span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-eco-900 dark:text-white">Selecciona tu Entrada</h2>
                        <p className="text-gray-600 dark:text-gray-400">Asegura tu lugar en el evento tecnológico más transformador del año. Plazas
                            limitadas.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        <div className="bg-eco-carddark rounded-3xl p-8 border border-eco-200/10 flex flex-col justify-between hover:border-eco-200/30 transition-all">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Virtual
                                        Pass</span>
                                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Online</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl font-black text-white">99€</span>
                                    <span className="text-gray-400 text-sm"> + IVA</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">Acceso completo vía streaming en alta definición a todas
                                    las conferencias y paneles principales.</p>

                                <ul className="space-y-4 text-sm text-gray-300 mb-8">
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Streaming en directo de todos los
                                            Keynotes</span></li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Acceso a grabaciones por 1
                                            año</span></li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Networking virtual app</span></li>
                                </ul>
                            </div>
                            <button onClick={() => onSelectTicket('Virtual Pass')}
                                className="w-full bg-white/10 text-white font-bold py-3.5 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                                Comprar Virtual
                            </button>
                        </div>
                        <div className="bg-eco-carddark rounded-3xl p-8 border-2 border-eco-200 relative flex flex-col justify-between glow-box transform lg:-translate-y-4">
                            <div
                                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-eco-200 text-eco-dark font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                                Más Popular
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm font-semibold text-eco-200 uppercase tracking-wider">General
                                        Pass</span>
                                    <span
                                        className="text-xs bg-eco-200/20 text-eco-200 px-3 py-1 rounded-full border border-eco-200/30">Presencial</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-white">349€</span>
                                    <span className="text-gray-400 text-sm"> + IVA</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">Experiencia presencial completa de 3 días en el Palacio de
                                    Congresos de Madrid.</p>

                                <ul className="space-y-4 text-sm text-gray-300 mb-8">
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Acceso a los 3 días del evento
                                            presencial</span></li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Café, almuerzos eco-sostenibles
                                            incluidos</span></li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Acceso a zona de exposición y
                                            workshops</span></li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Kit de bienvenida sostenible</span>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={() => onSelectTicket('General Pass')}
                                className="w-full bg-eco-200 text-eco-dark font-extrabold py-4 rounded-2xl hover:bg-eco-300 transition-all glow-btn text-base">
                                Reservar General
                            </button>
                        </div>
                        <div className="lg:col-span-1 md:col-span-2 col-span-1 bg-eco-carddark rounded-3xl p-8 border border-eco-200/10 flex flex-col justify-between hover:border-eco-200/30 transition-all">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">VIP All
                                        Access</span>
                                    <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">Exclusivo</span>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl font-black text-white">799€</span>
                                    <span className="text-gray-400 text-sm"> + IVA</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-6">Para directivos y ponentes. Acceso VIP con cenas de gala y
                                    encuentros privados con inversores.</p>
                                <ul className="space-y-4 text-sm text-gray-300 mb-8">
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Todo lo incluido en General
                                            Pass</span></li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Cena de Gala VIP con
                                            ponentes</span></li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Lounge privado de networking</span>
                                    </li>
                                    <li className="flex items-center space-x-3"><Check size={16} aria-hidden="true" className="shrink-0 text-eco-200" /><span>Asiento reservado en primera
                                            fila</span></li>
                                </ul>
                            </div>
                            <button onClick={() => onSelectTicket('VIP All Access')}
                                className="w-full bg-white/10 text-white font-bold py-3.5 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                                Comprar VIP
                            </button>
                        </div>
                    </div>
                </div>
            </section>
    )
}
