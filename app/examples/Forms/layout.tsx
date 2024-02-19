import { Separator } from "@/components/ui/separator"
import FormNavbar from "@/components/FormNavbar";

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <section className="py-10 px-10 border-2 rounded mt-5">
          <div className="mb-5">
            <h1 className="text-lg">Settings</h1>
            <p className="text-slate-500 mb-5">Manage your account settings and set e-mail preferences.</p>
            <Separator className="border w-full"/>
          </div>
          <div className="flex gap-5">
            <div className="w-48 flex-grow flex justify-start">
              <FormNavbar />
            </div>
            <div className="w-full flex-grow">
              {children}
            </div>
          </div>
          
        </section> 
  );
}
