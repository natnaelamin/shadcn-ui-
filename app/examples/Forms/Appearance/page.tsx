import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"




function AppearancePage() {
    return (
      <Card className="border-none">
        <CardHeader className="mb-3">
            <div className="mb-5 grid gap-2">
              <CardTitle>Appearance</CardTitle>
              <CardDescription >Customize the appearance of the app. Automatically switch between day and night themes.</CardDescription>
            </div>
            <Separator className="w-full"/>
        </CardHeader >
        <CardContent>
        <Select >
          <label htmlFor="">Font</label>
          <SelectTrigger className="w-[180px] rounded">
            <SelectValue placeholder="Inter" />
          </SelectTrigger>
          
          <SelectContent>
            <SelectItem value="light">Inter</SelectItem>
            <SelectItem value="dark">Manroap</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-slate-500">Set the font you want to use in the dashboard.</p>

        <div className="mt-5">
          <h1>Theme</h1>
          <p className="text-sm text-slate-500">Select the theme for the dashboard.</p>

          <div className="flex gap-5 mt-5">
            <div className="grid gap-2">
              <Button className="border-2 px-3 py-4 h-24 focus:border-black focus:border-2 rounded-md font-bold  text-black" variant="themepic">
                <div className="grid gap-2">
                  <Skeleton className="w-[140px] h-[20px] font-bold rounded-full" />
                  <Skeleton className="w-[140px] h-[20px] rounded-full" />
                  <Skeleton className="w-[140px] h-[20px] rounded-full" />
                </div>
              </Button>
              <p className="text-center">Light</p>
            </div>
            <div className="grid gap-2">
              <Button className="border-2 px-3 py-4 h-24 bg-black focus:border-black focus:border-2 rounded-md font-bold  text-black" variant="themepic">
                <div className="grid gap-2">
                  <Skeleton className="w-[140px] h-[20px]  rounded-full" />
                  <Skeleton className="w-[140px] h-[20px] rounded-full" />
                  <Skeleton className="w-[140px] h-[20px] rounded-full" />
                </div>
              </Button>
              <p className="text-center">Dark</p>
            </div>
          </div>
        </div>

        </CardContent>
        <CardFooter>
          <Button className="w-48  rounded" type="submit">Update preferences</Button>
        </CardFooter>
      </Card>

    )
  }
  
  export default AppearancePage