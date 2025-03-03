"use client"

import Login from "../tabs/login";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button"
import CreateAccount from "../tabs/creataccount";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-white p-8">
        <DialogTitle className="text-center">
          Authentication
        </DialogTitle>

        <Tabs defaultValue="sign-in" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          </TabsList>

          {/* login */}
          <TabsContent value="sign-in" className="mt-4">
            <Login />
          </TabsContent>

          {/* create account */}
          <TabsContent value="sign-up">
            <CreateAccount />
          </TabsContent>
        </Tabs>

        <div className="divide-dashed bg-gray-400 h-[1px]"></div>

        <DialogFooter className="sm:justify-start">
          <button className="button transparent w-full flex items-center justify-center gap-2" type="submit"><FcGoogle className="text-2xl" />Sign In with google</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog