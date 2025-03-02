"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ForgetPassSchema from "@/schemas/forgetpass.schema"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";

function Forgetpass() {
  const form = useForm<z.infer<typeof ForgetPassSchema>>({
    resolver: zodResolver(ForgetPassSchema),

    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof ForgetPassSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-sm text-black hover:text-blue-500 transition-all ease-in cursor-pointer underline">Reset Password</p>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white p-8">
        <DialogHeader className="mb-4">
          <DialogTitle className="lg-title-2">Reset Password</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input placeholder="yourmail@address.com" {...field} className="input" type="email" />
                  </FormControl>

                  <FormMessage style={{ color: "var(--orange)" }} />
                </FormItem>
              )}
            />

            <button className="button w-full" type="submit">Send OTP</button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default Forgetpass