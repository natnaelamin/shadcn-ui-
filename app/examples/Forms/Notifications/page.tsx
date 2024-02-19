import { CheckboxReactHookFormSingle } from "@/components/notifcationscheckbox"
import { RadioGroupForm } from "@/components/notificationsRadio"
import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"



function NotificationsPage() {
    return (
        <Card>
          <CardHeader className="mb-5">
            <CardTitle>Notifications</CardTitle>
            <CardDescription >Configure how you receive notifications.</CardDescription>
            <Separator className="w-full mt-4"/>
          </CardHeader >
          <CardContent>
            <RadioGroupForm />
            <div className="mt-5">
              <h1 className="text-2xl">Email Notifications</h1>
            </div>

            <div className="grid gap-5 mr-64 mt-5">
                <div className="flex justify-between w-full border-2  py-3 px-5">
                    <div className="grid gap-2 ">
                        <h1 className="font-bold">Communication emails</h1>
                        <p className="text-sm text-slate-500">Receive emails about your account activity</p>
                    </div>
                    <Switch  className="mt-5 "/>
                </div>

                <div className="flex justify-between w-full border-2  py-3 px-5">
                    <div className="grid gap-2 ">
                        <h1 className="font-bold">Marketing emails</h1>
                        <p className="text-sm text-slate-500">Receive emails about new products, features, and more.</p>
                    </div>
                    <Switch  className="mt-5 "/>
                </div>

                <div className="flex justify-between w-full border-2 py-3 px-5">
                    <div className="grid gap-2 ">
                        <h1 className="font-bold">Social emails</h1>
                        <p className="text-sm text-slate-500">Receive emails for friend requests, follows, and more.</p>
                    </div>
                    <Switch  className="mt-5 "/>
                </div>

                <div className="flex justify-between w-full border-2 py-3 px-5">
                    <div className="grid gap-2 ">
                        <h1 className="font-bold">Security emails</h1>
                        <p className="text-sm text-slate-500">Receive emails about your account activity and security.</p>
                    </div>
                    <Switch  className="mt-5 "/>
                </div>
              </div>
          </CardContent>
          <CardFooter>
             <CheckboxReactHookFormSingle /> 
          </CardFooter>
        </Card>
    )
  }
  
  export default NotificationsPage