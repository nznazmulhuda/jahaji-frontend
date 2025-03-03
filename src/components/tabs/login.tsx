import { z } from "zod"
import { useForm } from "react-hook-form"
import Forgetpass from "../dialogs/forgetpass";
import LoginFormSchema from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

function Login() {

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // handle login
  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values) // send data on provider
  }

  return (
    <>
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

      <div className="flex items-center justify-between mt-4">
        {/* forget password */}
        <Forgetpass />
      </div>
    </>
  )
}

export default Login