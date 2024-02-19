import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

function Navbar() {
  return (
    <nav className="flex gap-5 focus:font-bold">
        <Link href="/" className={buttonVariants({ variant: "outline" }) } >Cards</Link>
        <Link href="/examples/dashboard" className={buttonVariants({ variant: "outline" })}>Dashboard</Link>
        <Link href="/examples/Forms/Profile" className={buttonVariants({ variant: "outline" })}>Forms</Link>
    </nav>
  )
}

export default Navbar
