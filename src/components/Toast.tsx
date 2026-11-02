import { useEffect } from 'react'
import { Check, X } from 'lucide-react'

type ToastMessage = {
    title: string
    description: string
}

type ToastProps = {
    toast: ToastMessage | null
    onDismiss: () => void
}

export default function Toast({ toast, onDismiss }: ToastProps) {
    useEffect(() => {
        if (!toast) return

        const timeout = window.setTimeout(onDismiss, 4000)
        return () => window.clearTimeout(timeout)
    }, [toast, onDismiss])

    if (!toast) return null

    return (
        <div role="status" className="fixed bottom-6 right-6 z-50 bg-white dark:bg-eco-carddark border border-eco-700 dark:border-eco-200 text-eco-900 dark:text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 animate__animated animate__fadeInUp">
            <div className="w-8 h-8 rounded-full bg-eco-200 text-eco-dark flex items-center justify-center font-bold">
                <Check size={14} aria-hidden="true" />
            </div>
            <div>
                <h4 className="font-bold text-sm">{toast.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">{toast.description}</p>
            </div>
            <button type="button" onClick={onDismiss} className="ml-2 text-gray-500 dark:text-gray-400 hover:text-eco-900 dark:hover:text-white" aria-label="Cerrar notificación">
                <X size={18} aria-hidden="true" />
            </button>
        </div>
    )
}
