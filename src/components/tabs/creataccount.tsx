"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import SignupSchema from "@/schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

function CreateAccount() {

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // handle create account
  function onSubmit(values: z.infer<typeof SignupSchema>) {
    console.log(values) // send data on provider
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input placeholder="enter you full name" {...field} className="input" type="text" />
              </FormControl>

              <FormMessage style={{ color: "var(--orange)" }} />
            </FormItem>
          )}
        />

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

        <button className="button w-full" type="submit">Sign Up</button>
      </form>
    </Form>
  )
}

export default CreateAccount