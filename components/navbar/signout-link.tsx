'use client'
import { SignOutButton } from "@clerk/nextjs"
import { useToast } from "../ui/use-toast"
import { LogOut } from 'lucide-react';

const SignOutLink = () => {
  const {toast} = useToast()
  const handleLogout = () => {
    toast({
      description: "Logout Successfully"
    })
  }
  return <SignOutButton redirectUrl="/">
    <button className="w-full text-left flex items-center gap-2" onClick={handleLogout}>
      <LogOut className="w-4 h-4" />
      <span>Logout</span>
    </button>
  </SignOutButton>
}
export default SignOutLink