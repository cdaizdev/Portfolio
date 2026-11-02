type CookieBannerProps = {
    onAccept: () => void
    onShowDetails: () => void
}

export default function CookieBanner({ onAccept, onShowDetails }: CookieBannerProps) {
    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 bg-white/95 dark:bg-[#16291E]/95 backdrop-blur-md border border-eco-700/30 dark:border-[#ACEB98]/30 rounded-2xl p-5 shadow-2xl text-eco-900 dark:text-white transition-all duration-500">
            <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#ACEB98]/10 text-[#ACEB98] rounded-xl shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-eco-700 dark:text-[#ACEB98] text-base">Aviso sobre Cookies</h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                        ¡Buenas noticias! Este sitio web <span className="font-semibold text-eco-900 dark:text-white">no utiliza cookies</span> de seguimiento, publicidad ni análisis. Navega con total tranquilidad.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                        <button type="button" onClick={onAccept} className="px-4 py-1.5 bg-[#ACEB98] text-[#0D1B12] text-xs font-bold rounded-lg hover:bg-[#92df7c] transition-colors shadow-sm">
                            Entendido
                        </button>
                        <button type="button" onClick={onShowDetails} className="text-xs text-eco-700 dark:text-[#ACEB98] underline hover:text-eco-900 dark:hover:text-white transition-colors">
                            Saber más
                        </button>
                    </div>
                </div>
                <button type="button" onClick={onAccept} aria-label="Cerrar aviso de cookies" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
