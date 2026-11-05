import Header from './components/header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <WorkSection />
                <ProcessSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
