"use client"
import { Separator } from "@/components/ui/separator" 
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { DatePickerDemo } from "@/components/datepicker"
import { ComboboxDemoLang } from "@/components/comboLanguage"


const formSchema = z.object({
  name: z.string().min(4),
  date: z.string(),
  language: z.string()
})

function AccountPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      date: "",
      language: ""

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
          <h1 className="text-lg">Account</h1>
          <p className="mb-5 text-slate-500">Update your account settings. Set your preferred language and timezone.</p>
          <Separator className="border w-full"/>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid gap-5 ">
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="h-10" placeholder="your name" {...field} />
                  </FormControl>
                  <FormDescription>
                  This is the name that will be displayed on your profile and in emails.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of birth</FormLabel>
                    <FormControl>
                    <div className="">
                        <DatePickerDemo />
                    </div>
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
              name="language"
              render={({ field }) => (
                <FormItem className="grid ">
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <ComboboxDemoLang />
                  </FormControl>
                  <FormDescription>
                    You can @mention other users and organizations to link to them.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-48  rounded" type="submit">Update account</Button>
          </form>
        </Form>
      </section>
    )
  }
  
  export default AccountPage