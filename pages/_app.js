import { useRouter } from "next/router"
import "./app.css"
import AuthProvider from "../context/AuthProvider"

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp