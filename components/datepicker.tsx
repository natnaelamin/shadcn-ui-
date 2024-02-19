"use client"

import * as React from "react"
import { CiCalendar } from "react-icons/ci";
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover >
      <PopoverTrigger asChild >
        <Button
          variant={"new"}
          className={cn(
            "w-[240px] justify-between rounded  text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <CiCalendar className="mr-2  w-4 h-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
