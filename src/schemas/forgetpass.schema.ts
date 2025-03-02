"use client"

import { z } from "zod"

const ForgetPassSchema = z.object({
  email: z.string().email({ message: "Email address must be valid." }),
})

export default ForgetPassSchema