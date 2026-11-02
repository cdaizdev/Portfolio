type CookieModalProps = {
    onClose: () => void
    onAccept: () => void
}

export default function CookieModal({ onClose, onAccept }: CookieModalProps) {
    return (
        <div
            role="presentation"
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose()
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
            <div role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title" className="bg-white dark:bg-[#16291E] border border-eco-700/30 dark:border-[#ACEB98]/30 rounded-3xl max-w-lg w-full p-6 md:p-8 text-eco-900 dark:text-white shadow-2xl relative">
                <button type="button" onClick={onClose} aria-label="Cerrar" className="absolute top-5 right-5 text-gray-400 hover:text-[#ACEB98] transition-colors p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#ACEB98]/10 text-[#ACEB98] rounded-2xl">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div>
                        <h3 id="cookie-modal-title" className="text-xl font-bold text-eco-900 dark:text-white">Política de Privacidad y Cookies</h3>
                        <p className="text-xs text-eco-700 dark:text-[#ACEB98]">Transparencia absoluta en EcoTech Summit</p>
                    </div>
                </div>
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 max-h-[60vh] overflow-y-auto pr-2">
                    <p>
                        En                         <strong className="text-eco-900 dark:text-white">EcoTech Summit</strong> nos tomamos muy en serio tu privacidad. Queremos que disfrutes de la experiencia de este evento sin preocuparte por el rastreo de tus datos personales.
                    </p>
                    <div className="bg-eco-50 dark:bg-[#0D1B12] p-4 rounded-xl border border-eco-900/10 dark:border-white/5 space-y-2">
                        <h4 className="font-semibold text-eco-700 dark:text-[#ACEB98]">Cero Cookies de Rastreo o Publicidad</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Esta web <span className="text-eco-900 dark:text-white font-medium">no instala ninguna cookie</span> de terceros, de redes sociales, ni herramientas de marketing publicitario. No creamos perfiles de usuario ni vendemos datos.
                        </p>
                    </div>
                    <div className="bg-eco-50 dark:bg-[#0D1B12] p-4 rounded-xl border border-eco-900/10 dark:border-white/5 space-y-2">
                        <h4 className="font-semibold text-eco-700 dark:text-[#ACEB98]">¿Qué pasa con el almacenamiento local?</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Utilizamos el almacenamiento local del navegador (como <code className="text-eco-700 dark:text-[#ACEB98]">localStorage</code>) para recordar si cerraste este aviso y tu preferencia de tema. Esta información permanece en tu dispositivo.
                        </p>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-end gap-3">
                    <button type="button" onClick={onAccept} className="px-5 py-2.5 bg-[#ACEB98] text-[#0D1B12] font-bold text-sm rounded-xl hover:bg-[#92df7c] transition-colors shadow-md">
                        Entendido y de acuerdo
                    </button>
                </div>
            </div>
        </div>
    )
}
