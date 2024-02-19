import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DatePickerWithRange } from "@/components/datepickerwithrange"
import { Button } from "@/components/ui/button"
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdShowChart } from "react-icons/md";

function Dashtop() {
  return (
    <>
        <section className='px-5 pb-2 border-b-2'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Alicia Koch" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                    </Select>
                    <nav className='flex gap-1 mt-1'>
                        <Link href="" className={buttonVariants({ variant: "outline" }) } >Overview</Link>
                        <Link href="" className={buttonVariants({ variant: "outline" })}>Customers</Link>
                        <Link href="" className={buttonVariants({ variant: "outline" })}>Products</Link>
                        <Link href="" className={buttonVariants({ variant: "outline" })}>Settings</Link>
                    </nav>
                </div>
                <div className='flex gap-2'>
                    <Input className='border-2 w-full ' placeholder='Search...'/>
                    <Avatar>
                        <AvatarImage src="/avatars/01.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </section>

        <section className="px-5 mt-5">
            <div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">Dashboard</h1>
                    <div className="flex gap-1">
                    <div >
                        <DatePickerWithRange className="mt-2 border-2 text-black" />
                    </div>
                    <Button className="rounded mt-2 " variant="default">Download</Button>
                    </div>
                </div>
                <div className="flex gap-1 bg-slate-100  py-1 pl-1 w-[430px]">
                    <Button className="rounded h-7  text-black hover:bg-white " variant="outline">Download</Button>
                    <Button className="rounded h-7 bg-slate-100 pointer-events-none font-medium text-slate-400 " variant="outline">Analytics</Button>
                    <Button className="rounded h-7 bg-slate-100  pointer-events-none font-medium  text-slate-400 " variant="outline">Reports</Button>
                    <Button className="rounded h-7 bg-slate-100 pointer-events-none font-medium text-slate-400 " variant="outline">Notifications</Button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                <Card className="h-36 border-2">
                    <CardHeader className=" flex flex-row justify-between ">
                        <CardTitle className="text-sm">Total Revenue</CardTitle>
                        <BsCurrencyDollar className="text-slate-500"/>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl">$45,231.89</h1>
                        <p className="text-slate-500 text-xs">+20.1% from last month</p>
                    </CardContent>
                </Card>

                <Card className="h-36 border-2">
                    <CardHeader className=" flex flex-row justify-between ">
                        <CardTitle className="text-sm">Subscriptions</CardTitle>
                        <GoPeople  className="text-slate-500"/>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl">+2350</h1>
                        <p className="text-slate-500 text-xs">+180.1% from last month</p>
                    </CardContent>
                </Card>

                <Card className="h-36 border-2">
                    <CardHeader className=" flex flex-row justify-between ">
                        <CardTitle className="text-sm">Sales</CardTitle>
                        <IoCalendarClearOutline  className="text-slate-500"/>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl">+12,234</h1>
                        <p className="text-slate-500 text-xs">+19% from last month</p>
                    </CardContent>
                </Card>

                <Card className="h-36 border-2">
                    <CardHeader className=" flex flex-row justify-between ">
                        <CardTitle className="text-sm">Active Now</CardTitle>
                        <MdShowChart className="text-slate-500"/>
                    </CardHeader>
                    <CardContent>
                        <h1 className="text-2xl">+573</h1>
                        <p className="text-slate-500 text-xs">+201 since last hour</p>
                    </CardContent>
                </Card>
            </div>
        </section>
      </>
  )
}

export default Dashtop
