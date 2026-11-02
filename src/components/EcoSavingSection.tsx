import { useEffect, useRef, useState } from 'react'
import { Building2, Cloud, Droplet, Leaf, Sprout } from 'lucide-react'

const mockStatistics = [
    {
        label: 'Emisiones de CO₂',
        value: 128.4,
        decimals: 1,
        suffix: ' t',
        detail: 'Huella anual de nuestras operaciones',
        icon: Cloud,
    },
    {
        label: 'Consumo de agua',
        value: 84600,
        decimals: 0,
        suffix: ' L',
        detail: 'Agua utilizada en el último año',
        icon: Droplet,
    },
    {
        label: 'Clientes',
        value: 248,
        decimals: 0,
        suffix: '+',
        detail: 'Empresas que confían en nosotros',
        icon: Building2,
    },
    {
        label: 'CO₂ ahorrado por cliente',
        value: 3.7,
        decimals: 1,
        suffix: ' t',
        detail: 'Reducción media estimada al año',
        icon: Leaf,
    },
] as const

function AnimatedNumber({ value, decimals, suffix, isVisible }: {
    value: number
    decimals: number
    suffix: string
    isVisible: boolean
}) {
    const [currentValue, setCurrentValue] = useState(0)
    const [prefersReducedMotion] = useState(() =>
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )

    useEffect(() => {
        if (!isVisible || prefersReducedMotion) return

        const duration = 1600
        let frameId = 0
        let startTime: number | undefined

        const animate = (timestamp: number) => {
            startTime ??= timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const easedProgress = 1 - (1 - progress) ** 4
            setCurrentValue(value * easedProgress)

            if (progress < 1) frameId = window.requestAnimationFrame(animate)
        }

        frameId = window.requestAnimationFrame(animate)
        return () => window.cancelAnimationFrame(frameId)
    }, [isVisible, prefersReducedMotion, value])

    const formattedValue = new Intl.NumberFormat('es-ES', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(isVisible && prefersReducedMotion ? value : currentValue)

    return <>{formattedValue}{suffix}</>
}

export default function EcoSavingSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
            }
        }, { threshold: 0.2 })

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="ecosavings" ref={sectionRef} className="relative overflow-hidden bg-eco-50 py-24 dark:bg-eco-dark">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-eco-700/20 bg-eco-200/20 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-eco-800 dark:border-eco-200/20 dark:text-eco-200">
                        <Sprout size={16} aria-hidden="true" />
                        Nuestro impacto
                    </span>
                    <h2 className="text-3xl font-extrabold text-eco-900 dark:text-white sm:text-5xl">
                        Tecnología con una huella más sostenible
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Medimos nuestro impacto para avanzar hacia operaciones más responsables y ayudar a nuestros clientes a reducir el suyo.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {mockStatistics.map((statistic, index) => (
                        <article
                            key={statistic.label}
                            className="rounded-3xl border border-eco-900/10 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-eco-200/10 dark:bg-eco-carddark"
                            style={{ transitionDelay: `${index * 60}ms` }}
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-eco-700/10 text-eco-700 dark:bg-eco-200/10 dark:text-eco-200">
                                <statistic.icon size={22} aria-hidden="true" />
                            </div>
                            <p className="text-3xl font-extrabold tracking-tight text-eco-900 dark:text-white sm:text-4xl">
                                <AnimatedNumber
                                    value={statistic.value}
                                    decimals={statistic.decimals}
                                    suffix={statistic.suffix}
                                    isVisible={isVisible}
                                />
                            </p>
                            <h3 className="mt-3 font-bold text-eco-800 dark:text-eco-200">{statistic.label}</h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{statistic.detail}</p>
                        </article>
                    ))}
                </div>

                <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-500">
                    Cifras de ejemplo para demostración; deben sustituirse por datos verificados.
                </p>
            </div>
        </section>
    )
}
