import { BriefcaseBusiness, Camera, Leaf, Mail, Play } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-eco-50 dark:bg-eco-dark border-t border-eco-900/10 dark:border-eco-200/10 pt-16 pb-12 text-gray-600 dark:text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4 md:col-span-1">
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-8 h-8 rounded-lg bg-eco-700 dark:bg-eco-200 flex items-center justify-center text-white dark:text-eco-dark font-black text-lg">
                                <Leaf size={18} aria-hidden="true" />
                            </div>
                            <span className="text-lg font-extrabold text-eco-900 dark:text-white">EcoTech<span
                                className="text-eco-700 dark:text-eco-200">2026</span></span>
                        </div>
                        <p className="text-xs text-gray-400">El foro internacional líder en convergencia tecnológica y
                            sostenibilidad ambiental.</p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" aria-label="LinkedIn"
                                className="w-9 h-9 rounded-full bg-eco-900/5 dark:bg-white/5 hover:bg-eco-200 hover:text-eco-dark text-eco-900 dark:text-white flex items-center justify-center transition-colors">
                                <BriefcaseBusiness size={18} aria-hidden="true" /></a>
                            <a href="#" aria-label="Instagram"
                                className="w-9 h-9 rounded-full bg-eco-900/5 dark:bg-white/5 hover:bg-eco-200 hover:text-eco-dark text-eco-900 dark:text-white flex items-center justify-center transition-colors">
                                <Camera size={18} aria-hidden="true" /></a>
                            <a href="#" aria-label="YouTube"
                                className="w-9 h-9 rounded-full bg-eco-900/5 dark:bg-white/5 hover:bg-eco-200 hover:text-eco-dark text-eco-900 dark:text-white flex items-center justify-center transition-colors">
                                <Play size={18} aria-hidden="true" /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-eco-900 dark:text-white font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#about" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Acerca del Evento</a></li>
                            <li><a href="#speakers" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Oradores</a></li>
                            <li><a href="#agenda" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Agenda Oficial</a></li>
                            <li><a href="#tickets" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Comprar Entradas</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-eco-900 dark:text-white font-bold mb-4">Legal & Privacidad</h4>
                        <ul className="space-y-2 text-xs">
                            <li><a href="#" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Aviso Legal</a></li>
                            <li><a href="#" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-eco-700 dark:hover:text-eco-200 transition-colors">Política de Cookies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-eco-900 dark:text-white font-bold mb-4">Ubicación</h4>
                        <p className="text-xs text-gray-400 mb-2">Palacio de Congresos de Madrid</p>
                        <p className="text-xs text-gray-400 mb-4">Paseo de la Castellana, 99, 28046 Madrid, España</p>
                        <p className="text-xs text-eco-700 dark:text-eco-200 font-medium">
                            <Mail size={14} aria-hidden="true" className="mr-1.5 inline-block align-middle" />
                            <a href="mailto:contacto@ecotechsummit2026.com">Email</a>
                        </p>
                    </div>
                </div>
                <div
                    className="border-t border-eco-200/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2026 EcoTech Summit. Todos los derechos reservados.</p>
                    <p className="mt-2 sm:mt-0">Diseñado con energía 100% renovable 🌿</p>
                </div>
            </div>
        </footer>
    )
}
