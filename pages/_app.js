import { useRouter } from "next/router"
import "./app.css"

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <Component {...pageProps} />
    )
}

export default MyApp