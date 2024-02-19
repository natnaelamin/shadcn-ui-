import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaRegStar } from "react-icons/fa";
import { GiCircle } from "react-icons/gi";
import { Switch } from "@/components/ui/switch"


function Right() {
  return (
    <section>
      <div>
        <Card className="border-2">
            <CardHeader>
                <CardTitle className="text-xl">Report an issue</CardTitle>
                <CardDescription>What area are you having problems with?</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between">
                <div>
                    <Select>
                        <label className="font-semibold text-sm mb-2" htmlFor="">Area</label>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="Team" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Team">Team</SelectItem>
                            <SelectItem value="Billing">Billing</SelectItem>
                            <SelectItem value="Account">Account</SelectItem>
                            <SelectItem value="Deployments">Deployments</SelectItem>
                            <SelectItem value="Support">Support</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Select>
                        <label className="font-semibold text-sm mb-2" htmlFor="">Security Level</label>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="Sevirity 1(Highest)" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Sevirity 1(Highest)">Sevirity 1(Highest)</SelectItem>
                            <SelectItem value="Sevirity 2">Sevirity 2</SelectItem>
                            <SelectItem value="Sevirity 3">Sevirity 3</SelectItem>
                            <SelectItem value="Sevirity 4(Highest)">Sevirity 4(Lowest)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className="grid gap-5">
                <div className="w-full">
                    <label htmlFor="">Subject</label>
                    <Input className="" placeholder="I need help with..."/>
                </div>
                <div>
                    <label className="mb-2" htmlFor="">Description</label>
                    <Textarea className="border-2" placeholder="Please include all information relevant to your issue."/>
                </div>

                <div className="flex justify-between">
                    <Button className="rounded text-black font-semibold" variant="outline">Cancel</Button>
                    <Button className="rounded" variant="default">Select</Button>
                </div>
            </CardFooter>
        </Card>
      </div>

      <div>
        <Card className="mt-5 border-2">
            <div className="flex justify-between">
                <CardHeader>
                    <CardTitle className="mb-3 text-xl">shadcn/ui</CardTitle>
                    <CardDescription>Beautifully designed components that you can copy and paste into your apps.
                        Accessible. Customizable. Open Source.</CardDescription>
                </CardHeader>
                <Select >
                    <SelectTrigger className="w-[100px] mt-5 mr-5">
                        <div className="flex gap-1">
                            <FaRegStar className="mt-1" />
                            <SelectValue placeholder="Star" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <CardFooter className="flex gap-5 text-slate-500 text-sm">
                <div className="flex gap-1">
                    <GiCircle className="mt-1 text-sky-500"/>
                    <p>Typescript</p>
                </div>
                <div className="flex gap-1">
                    <FaRegStar className="mt-1" />
                    <p>20K</p>   
                </div>
                <div>
                    <p>Updated april 2023</p>
                </div>

            </CardFooter>
        </Card>

      </div>
      <div>
        <Card className="mt-5 border-2">
            <CardHeader>
                <CardTitle className="text-xl">Cookie Settings</CardTitle>
                <CardDescription>Manage your cookie settings here.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex justify-between">
                    <div className="grid gap-2">
                        <h1>Strictly Necessary</h1>
                        <p className="text-sm text-slate-500">This cookies are essential to use the website and other features.</p>
                    </div>
                    <Switch className="mt-5"/>
                </div>
                <div className="flex justify-between ">
                    <div className="grid gap-2">
                        <h1>Functional cookies</h1>
                        <p className="text-sm text-slate-500">This cookies allow the website to provide personalized functionality.</p>
                    </div>
                    <Switch className="mt-5"/>
                </div>
                <div className="flex justify-between">
                    <div className="grid gap-2">
                        <h1>Performance cookies</h1>
                        <p className="text-sm text-slate-500">This cookies help to improve the performance of the website.</p>
                    </div>
                    <Switch  className="mt-5"/>
                </div>
                
            </CardContent>
            <CardFooter>
                <Button className="w-full rounded border text-black" variant="outline">Save preferences</Button>
            </CardFooter>
        </Card>

      </div>
    </section>
)
}

export default Right
