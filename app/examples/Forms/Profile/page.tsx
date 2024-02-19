"use client"
import { Separator } from "@/components/ui/separator" 
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "required",
  }),
  email: z.string({required_error: "Please select an email to display.",}).email(),
  bio: z.string(),
  url: z.string()
})


function ProfilePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      url: ""

    },
  })

  function onSubmit(data: z.infer<typeof formSchema>){
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

    return (
      <section className="pr-80">
        <div>
          <h1 className="text-lg">Profile</h1>
          <p className="mb-5 text-slate-500">This is how others will see you on the site.</p>
          <Separator className="border w-full"/>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid gap-5 ">
            
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>username</FormLabel>
                  <FormControl>
                    <Input className="h-10" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">m@example.com</SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">m@support.com</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can @mention other users and organizations to link to them.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Input className="h-24 pt-2" placeholder="I own a computer" {...field} />
                  </FormControl>
                  <FormDescription>
                    You can @mention other users and organizations to link to them.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormDescription>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <div className=" grid gap-2">
                        <Input  value="https://shadcn.com" className="  text-black  border" />
                        <Input  value="http://twitter.com/shadcn" className="  text-black  border" />
                        <Button className=" px-5 w-24 rounded-md font-normal bg-slate-100  text-black" variant="outline">Add URL</Button>
                    </div> 
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-48 " type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    )
  }
  
  export default ProfilePage