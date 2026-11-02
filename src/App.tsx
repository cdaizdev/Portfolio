import { useEffect, useState } from 'react'
import Header from './components/header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import AgendaSection from './components/AgendaSection'
import TicketsSection from './components/TicketsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import TicketModal from './components/TicketModal'
import Toast from './components/Toast'
import CookieConsent from './components/CookieConsent'
import EcoSavingSection from './components/EcoSavingSection'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'ecotech-theme'

function getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)
    const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
    const [toast, setToast] = useState<{ title: string; description: string } | null>(null)

    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', theme === 'dark')
        root.style.colorScheme = theme
        localStorage.setItem(THEME_STORAGE_KEY, theme)
    }, [theme])

    useEffect(() => {
        const handleThemeShortcut = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() !== 'd' || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return

            const target = event.target
            if (target instanceof Element && target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"]')) return

            setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
        }

        window.addEventListener('keydown', handleThemeShortcut)
        return () => window.removeEventListener('keydown', handleThemeShortcut)
    }, [])

    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <EcoSavingSection />
                <TicketsSection onSelectTicket={setSelectedTicket} />
                <NewsletterSection onSubscribe={() => setToast({ title: 'Suscripción Exitosa', description: 'Ya formas parte de nuestra comunidad verde.' })} />
            </main>
            <Footer />
            <TicketModal
                ticketName={selectedTicket}
                onClose={() => setSelectedTicket(null)}
                onCheckout={() => {
                    setSelectedTicket(null)
                    setToast({ title: '¡Plaza Reservada!', description: 'Revisa tu bandeja de entrada para completar el pago.' })
                }}
            />
            <Toast toast={toast} onDismiss={() => setToast(null)} />
            <CookieConsent />
        </>
    )
}
