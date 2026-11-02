import type { FormEvent, MouseEvent } from 'react'
import { Ticket, X } from 'lucide-react'

type TicketModalProps = {
    ticketName: string | null
    onClose: () => void
    onCheckout: () => void
}

export default function TicketModal({ ticketName, onClose, onCheckout }: TicketModalProps) {
    if (!ticketName) return null

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.currentTarget.reset()
        onCheckout()
    }

    const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) onClose()
    }

    return (
        <div
            role="presentation"
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="bg-white dark:bg-eco-carddark max-w-md w-full p-8 rounded-3xl border border-eco-700/30 dark:border-eco-200/30 relative animate__animated animate__zoomIn animate__faster"
            >
                <button type="button" onClick={onClose} aria-label="Cerrar" className="absolute top-6 right-6 text-gray-500 dark:text-gray-400 hover:text-eco-900 dark:hover:text-white text-xl">
                    <X size={20} aria-hidden="true" />
                </button>
                <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-eco-200 text-eco-dark flex items-center justify-center font-bold text-xl mx-auto mb-3">
                        <Ticket size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-eco-900 dark:text-white" id="modal-title">Adquirir {ticketName}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Completa tus datos para procesar tu registro al EcoTech Summit 2026
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="ticket-name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Nombre Completo</label>
                        <input id="ticket-name" type="text" required className="w-full bg-eco-50 dark:bg-white/5 border border-eco-700/20 dark:border-eco-200/30 rounded-xl px-4 py-3 text-eco-900 dark:text-white text-sm focus:outline-none focus:border-eco-600 dark:focus:border-eco-200" placeholder="Ej. Ana García" />
                    </div>
                    <div>
                        <label htmlFor="ticket-email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                        <input id="ticket-email" type="email" required className="w-full bg-eco-50 dark:bg-white/5 border border-eco-700/20 dark:border-eco-200/30 rounded-xl px-4 py-3 text-eco-900 dark:text-white text-sm focus:outline-none focus:border-eco-600 dark:focus:border-eco-200" placeholder="ana@empresa.com" />
                    </div>
                    <div>
                        <label htmlFor="ticket-company" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Empresa u Organización (Opcional)</label>
                        <input id="ticket-company" type="text" className="w-full bg-eco-50 dark:bg-white/5 border border-eco-700/20 dark:border-eco-200/30 rounded-xl px-4 py-3 text-eco-900 dark:text-white text-sm focus:outline-none focus:border-eco-600 dark:focus:border-eco-200" placeholder="EcoInnovación S.L." />
                    </div>
                    <button type="submit" className="w-full bg-eco-200 text-eco-dark font-extrabold py-3.5 rounded-xl hover:bg-eco-300 transition-all text-sm glow-btn mt-2">
                        Confirmar Registro
                    </button>
                </form>
            </div>
        </div>
    )
}
