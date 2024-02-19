"use client";
import React from "react";
import {Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart, ResponsiveContainer, XAxis, YAxis, Bar} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    revenue: 2000
  },
  {
    name: "Feb",
    revenue: 3000
  },
  {
    name: "Mar",
    revenue: 5000
  },
  {
    name: "Apr",
    revenue: 2000
  },
  {
    name: "May",
    revenue: 5000
  },
  {
    name: "Jun",
    revenue: 1000
  },
  {
    name: "Jul",
    revenue: 2000
  },
  {
    name: "Aug",
    revenue: 4500
  },
  {
    name: "Sep",
    revenue: 2000
  },
  {
    name: "Oct",
    revenue: 3000
  },
  {
    name: "Nov",
    revenue: 4000
  },
  {
    name: "Dec",
    revenue: 3000
  }
];

 function DashBottom() {
  return (
    <section className="flex gap-5 p-5 w-full">
      <Card className="py-5 border-2 flex-grow w-64">
        <CardContent>
          <CardTitle className="mb-3">Overview</CardTitle>
          <ResponsiveContainer width={"100%"} height={350}>
            <BarChart data={data}>
              <XAxis  dataKey={"name"}/>
              <YAxis/>
              <Bar dataKey={"revenue"} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="rounded-2 w-36 flex-grow">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>
        <CardContent className="mt-3 grid gap-5">
          <div className="flex justify-between">
              <div className="flex gap-3">
                  <Avatar>
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                      <h1 className="text-md">Olivia Martin</h1>
                      <p className="text-xs text-slate-500">olivia.martin@email.com</p>
                  </div>
              </div>
              <h1 className="font-semibold text-lg">+$1,999.00</h1>
          </div>

          <div className="flex justify-between">
              <div className="flex gap-3">
                  <Avatar>
                      <AvatarImage src="/avatars/02.png" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                      <h1 className="text-md">Jackson Lee</h1>
                      <p className="text-xs text-slate-500">jackson.lee@email.com</p>
                  </div>
              </div>
              <h1 className="font-semibold text-lg">+$39.00</h1>
          </div>

          <div className="flex justify-between">
              <div className="flex gap-3">
                  <Avatar>
                      <AvatarImage src="/avatars/03.png" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                      <h1 className="text-md">Isabella Nguyen</h1>
                      <p className="text-xs text-slate-500">isabella.nguyen@email.com</p>
                  </div>
              </div>
              <h1 className="font-semibold text-lg">+$299.00</h1>
          </div>

          <div className="flex justify-between">
              <div className="flex gap-3">
                  <Avatar>
                      <AvatarImage src="/avatars/04.png" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                      <h1 className="text-md">William Kim</h1>
                      <p className="text-xs text-slate-500">will@email.com</p>
                  </div>
              </div>
              <h1 className="font-semibold text-lg">+$99.00</h1>
          </div>
        </CardContent>
      </Card>

    </section>
  );
}
export default DashBottom