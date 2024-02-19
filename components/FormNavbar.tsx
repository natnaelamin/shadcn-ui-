import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

function FormNavbar() {
  return (
    <nav className="flex flex-col gap-3 justify-start focus:font-bold text-black">
        <Link href="/examples/Forms/Profile"  className={buttonVariants({ variant: "ghost" })} >Profile</Link>
        <Link href="/examples/Forms/Account"  className={buttonVariants({ variant: "ghost" })}>Account</Link>
        <Link href="/examples/Forms/Appearance" className={buttonVariants({ variant: "ghost" })}>Appearance</Link>
        <Link href="/examples/Forms/Display" className={buttonVariants({ variant: "ghost" })}>Display</Link>
        <Link href="/examples/Forms/Notifications" className={buttonVariants({ variant: "ghost" })}>Notifications</Link>
        
    </nav>
  )
}

export default FormNavbar
