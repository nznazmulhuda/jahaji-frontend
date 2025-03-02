"use client"

import { z } from "zod"

const LoginFormSchema = z.object({
  email: z.string().email({ message: "Email address must be valid." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }).max(50, { message: "Password must be at most 50 characters long." }),
})

export default LoginFormSchema