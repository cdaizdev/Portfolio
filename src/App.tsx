import Header from './components/header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer />
        </>
    )
}
