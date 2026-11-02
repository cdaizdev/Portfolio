import type { FormEvent } from 'react'

type NewsLetterProps = {
    onSubscribe: () => void
}

export default function NewsLetter({ onSubscribe }: NewsLetterProps) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.currentTarget.reset()
        onSubscribe()
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <label htmlFor="newsletter-email" className="sr-only">Tu correo electrónico</label>
            <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Tu correo electrónico"
                className="flex-grow bg-white dark:bg-white/5 border border-eco-700/20 dark:border-eco-200/30 rounded-2xl px-5 py-4 text-eco-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-eco-600 dark:focus:border-eco-200 text-sm"
            />
            <button type="submit" className="bg-eco-200 text-eco-dark font-extrabold px-8 py-4 rounded-2xl hover:bg-eco-300 transition-all text-sm glow-btn">
                Suscribirse
            </button>
        </form>
    )
}
