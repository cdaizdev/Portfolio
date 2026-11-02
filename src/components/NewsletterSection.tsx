import { Send } from 'lucide-react'
import NewsLetter from './NewsLetter'

type NewsletterSectionProps = {
    onSubscribe: () => void
}

export default function NewsletterSection({ onSubscribe }: NewsletterSectionProps) {
    return (
        <section id="contacto" className="py-24 bg-eco-50 dark:bg-[#0a140e] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-gradient-to-br from-white to-eco-100 dark:from-eco-carddark dark:to-eco-dark p-8 sm:p-12 rounded-3xl border border-eco-700/20 dark:border-eco-200/20 glow-box text-center space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-eco-600/10 text-eco-700 dark:bg-eco-200/10 dark:text-eco-200 flex items-center justify-center text-3xl mx-auto border border-eco-700/30 dark:border-eco-200/30">
                        <Send size={28} aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-eco-900 dark:text-white">Mantente informado sobre EcoTech 2026</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                        Suscríbete a nuestra newsletter para recibir actualizaciones sobre ponentes confirmados, aperturas de talleres y descuentos exclusivos.
                    </p>
                    <NewsLetter onSubscribe={onSubscribe} />
                </div>
            </div>
        </section>
    )
}
