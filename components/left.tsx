import { Button } from "@/components/ui/button";
import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { FaPaypal, FaApple } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { Separator } from "@/components/ui/separator"

function Left() {
  return (
    <section className="flex flex-col gap-5">
        <div>
            <Card className="border-2">
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>Enter your email below to create your account</CardDescription>
                </CardHeader>
                <CardContent className=" grid gap-5">
                    <div className="flex justify-between">
                        <Button className="border px-12 rounded-md font-bold  text-black" variant="outline">Github</Button>
                        <Button className="border px-12 rounded-md font-bold text-black" variant="outline">Google</Button> 
                    </div>
                    <div className="flex justify-between ">
                        <Separator />
                        <p>Or continue with</p>
                        <Separator />
                    </div>
                    <div className="">
                        <label htmlFor="">Email</label>
                        <Input className="" placeholder="m@example.com" />
                    </div>
                    <div className="">
                        <label>Password</label>
                        <Input  />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="border rounded-md w-full" variant="default">Create account</Button>
                </CardFooter>
            </Card>
        </div>

        <div>
            <Card className="border-2">
                <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Add a new payment method to your account.</CardDescription>
                </CardHeader>
                <CardContent className=" grid gap-5">
                    <div className="flex justify-between">
                        <Button className="border-2 px-8 h-20 focus:border-black focus:border-2 rounded-md font-bold  text-black" variant="outline">
                        <div className="grid gap-2">
                            <FiCreditCard className="text-center text-3xl"/>
                            <p>card</p>
                        </div>
                        </Button>
                        <Button className="border-2 px-8 h-20 focus:border-black focus:border-2 rounded-md font-bold  text-black" variant="outline">
                        <div className="grid gap-2">
                            <FaPaypal className="text-center text-3xl"/>
                            <p>paypal</p>
                        </div>
                        </Button>
                        <Button className="border-2 px-8 h-20 focus:border-black focus:border-2 rounded-md font-bold  text-black" variant="outline">
                        <div className="grid gap-2 py-4 ">
                            <FaApple className="text-center text-3xl"/>
                            <p>apple</p>
                        </div>
                        </Button>
                    </div>
                    <div className="">
                        <label htmlFor="">Name</label>
                        <Input className="" placeholder="First Last" />
                    </div>
                    <div className="">
                        <label>Card number</label>
                        <Input  />
                    </div>
                </CardContent>
                <CardFooter  className="grid gap-5">
                    <div className="flex gap-2">
                        <div>
                        <label htmlFor="">Expires</label>
                        <Select>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2026">2026</SelectItem>
                                <SelectItem value="2027">2027</SelectItem>
                                <SelectItem value="2028">2028</SelectItem>
                                <SelectItem value="2029">2029</SelectItem>
                                <SelectItem value="2030<">2030</SelectItem>
                                
                            </SelectContent>
                        </Select>
                        </div>
                        <div >
                        <label htmlFor="">Year</label>
                        <Select>
                            <SelectTrigger className="w-[100px] ">
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Jan">Jan</SelectItem>
                                <SelectItem value="Feb">Feb</SelectItem>
                                <SelectItem value="Mar">Mar</SelectItem>
                                <SelectItem value="Apr">Apr</SelectItem>
                                <SelectItem value="May">May</SelectItem>
                                <SelectItem value="Jun">Jun</SelectItem>
                                <SelectItem value="Jul">Jul</SelectItem>
                                <SelectItem value="Aug">Aug</SelectItem>
                                <SelectItem value="Sep">Sep</SelectItem>
                                <SelectItem value="Oct">Oct</SelectItem>
                                <SelectItem value="Nov">Nov</SelectItem>
                                <SelectItem value="Oct">Oct</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                        <div>
                            <label htmlFor="">CVC</label>
                            <Input className="" placeholder="CVC"/>
                        </div>
                    </div>

                    <Button className="border rounded-md w-full" variant="default">Continue</Button>
                </CardFooter>
            </Card>
        </div>
      </section>
  )
}

export default Left
