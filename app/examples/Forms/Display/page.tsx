import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"


function DisplayPage() {
    return (
      <Card>
        <CardHeader>
            <CardTitle>Display</CardTitle>
            <CardDescription >Turn items on or off to control what's displayed in the app.</CardDescription>
            <Separator className="w-full mt-4"/>
        </CardHeader>
        <CardContent>
          <div className="mb-5">
            <h1 className="font-semibold">Sidbar</h1>
            <p className="text-sm text-slate-500">Select the items you want to display in the sidebar.</p>
          </div>
          <div className="grid gap-2">
            <div className="flex gap-3 text-sm ">
              <Checkbox />
              <p className="font-normal text-slate-950">Recents</p>
            </div>
            <div className="flex gap-3 text-sm ">
              <Checkbox />
              <p className="font-normal text-slate-950">Home</p>
            </div>
            <div className="flex gap-3 text-sm ">
              <Checkbox />
              <p className="font-normal text-slate-950">Applications</p>
            </div>
            <div className="flex gap-3 text-sm ">
              <Checkbox />
              <p className="font-normal text-slate-950">Desktop</p>
            </div>
            <div className="flex gap-3 text-sm ">
              <Checkbox />
              <p className="font-normal text-slate-950">Downloads</p>
            </div>
            <div className="flex gap-3 text-sm ">
              <Checkbox />
              <p className="font-normal text-slate-950">Documents</p>
            </div>
          </div>

        </CardContent>
        <CardFooter>
        <Button className="w-36  rounded" type="submit">Update display</Button>
        </CardFooter>
      </Card>

    )
  }
  
  export default DisplayPage