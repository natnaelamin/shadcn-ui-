import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ComboboxDemo } from "./combobox"
import { Separator } from "@/components/ui/separator"
import { DatePickerWithRange } from "./datepicker"
import { FaRegBell } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { RxEyeNone } from "react-icons/rx";


function Middle() {
  return (
    <section className="flex flex-col gap-5  ">
        <div>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Team Members</CardTitle>
              <CardDescription>Invite your team members to collaborate.</CardDescription>
            </CardHeader>
            <CardContent className=" grid gap-5">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <Avatar>
                            <AvatarImage src="/avatars/01.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="grid">
                            <h1>Sofia Davis</h1>
                            <p>m@example.com</p>
                        </div>
                    </div>
                    <ComboboxDemo />
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <Avatar>
                        <AvatarImage src="/avatars/02.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="grid">
                            <h1>Jackson Lee</h1>
                            <p>p@example.com</p>
                        </div>
                    </div>
                    <ComboboxDemo />
                </div>
            </CardContent>
          </Card>

        </div>

        <div>
            <Card className="border-2">
                <CardHeader>
                    <CardTitle className="text-xl">Share this document</CardTitle>
                    <CardDescription>Anyone with the link can view this document.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between gap-2">
                        <Input  value="http://example.com/link/to/document" className="  text-black " />
                        <Button className=" px-5 rounded-md font-normal bg-slate-100  text-black" variant="outline">Copy link</Button>
                    </div>
                    <Separator className="w-full mt-5"/>
                    <h1 className="font-bold">People with access</h1>
                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3 ">
                            <Avatar>
                                <AvatarImage src="/avatars/03.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="grid">
                                <h1 className="font-semibold">Jackson Lee</h1>
                                <p className="text-slate-700">p@example.com</p>
                            </div>
                        </div>
                        <Select>
                            <SelectTrigger className="w-[110px]">
                                <SelectValue placeholder="Can edit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="can edit">Can edit</SelectItem>
                                <SelectItem value="can view">Can view</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3 ">
                            <Avatar>
                            <AvatarImage src="/avatars/05.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="grid">
                                <h1 className="font-semibold">Jackson Lee</h1>
                                <p className="text-slate-700">p@example.com</p>
                            </div>
                        </div>
                        <Select>
                            <SelectTrigger className="w-[110px]">
                                <SelectValue placeholder="Can edit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="can edit">Can edit</SelectItem>
                                <SelectItem value="can view">Can view</SelectItem>
                            </SelectContent>
                        </Select>  
                    </div>

                    <div className="flex justify-between mt-5">
                        <div className="flex gap-3 ">
                            <Avatar>
                            <AvatarImage src="/avatars/01.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="grid">
                                <h1 className="font-semibold">Jackson Lee</h1>
                                <p className="text-slate-700">p@example.com</p>
                            </div>
                        </div>
                        <Select>
                            <SelectTrigger className="w-[110px]">
                                <SelectValue placeholder="Can edit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="can edit">Can edit</SelectItem>
                                <SelectItem value="can view">Can view</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                      
                </CardContent>
            </Card>

        </div>

        <div className="mt-5 grid gap-2 py-3 rounded-lg px-4 border-2">
            <h2>Pick a date </h2>
            <DatePickerWithRange />
        </div>

        <Card className="border-2">
            <CardHeader>
                <CardTitle className="text-xl">Notifications</CardTitle>
                <CardDescription>Choose what you want to be notified about.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5">
                <div className="flex gap-5">
                    <FaRegBell className="mt-2"/>
                    <div className="grid ">
                        <h1>Everything</h1>
                        <p className="text-slate-500 text-sm">Email digest, mentions & all activity.</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <RxPerson className="mt-2"/>
                    <div className="grid ">
                        <h1>Available</h1>
                        <p className="text-slate-500 text-sm">Only mentions and comments</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <RxEyeNone className="mt-3"/>
                    <div className="grid ">
                        <h1>Ignoring</h1>
                        <p className="text-slate-500 text-sm">Turn off all notifications.</p>
                    </div>
                </div>
                
            </CardContent>
            
        </Card>

    </section>
)
}

export default Middle
