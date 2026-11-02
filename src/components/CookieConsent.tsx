import { useState } from 'react'
import CookieBanner from './CookieBanner'
import CookieModal from './CookieModal'

const STORAGE_KEY = 'ecotech_cookies_accepted'

export default function CookieConsent() {
    const [accepted, setAccepted] = useState(() => localStorage.getItem(STORAGE_KEY) === 'true')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const acceptCookies = () => {
        localStorage.setItem(STORAGE_KEY, 'true')
        setAccepted(true)
        setIsModalOpen(false)
    }

    if (accepted) return null

    return (
        <>
            <CookieBanner onAccept={acceptCookies} onShowDetails={() => setIsModalOpen(true)} />
            {isModalOpen && <CookieModal onClose={() => setIsModalOpen(false)} onAccept={acceptCookies} />}
        </>
    )
}
