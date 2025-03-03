"use client"

import { z } from "zod"

const SignupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }).max(20, { message: "Name must be at most 20 characters long." }),
  email: z.string().email({ message: "Email address must be valid." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }).max(50, { message: "Password must be at most 50 characters long." }),
})

export default SignupSchema