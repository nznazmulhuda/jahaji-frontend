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
import LoginFormSchema from "@/schemas/login.schema"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";
import Forgetpass from "./forgetpass";

function Login() {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white p-8">
        <DialogHeader className="mb-4">
          <DialogTitle className="lg-title-2">Login</DialogTitle>
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

            {/* password field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <input placeholder="enter your password" {...field} className="input" type="password" />
                  </FormControl>

                  <FormMessage style={{ color: "var(--orange)" }} />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </div>

            <button className="button w-full" type="submit">Sign In</button>
          </form>
        </Form>

        <div className="text-end">
          {/* forget password */}
          <Forgetpass />
        </div>


        <div className="divide-dashed bg-gray-400 h-[1px]"></div>

        <DialogFooter className="sm:justify-start">
          <button className="button transparent w-full flex items-center justify-center gap-2" type="submit"><FcGoogle className="text-2xl" /> Sign In with google</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Login