import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/" style={{ color: router.pathname === "/" ? "red" : "blue"}}>Home</Link>
      <> </>
      <Link href="/about-next" style={{ color: router.pathname === "/about-next" ? "red" : "blue" }}>About</Link>
    </nav>
  )
}