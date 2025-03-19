import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft, LuLogIn, LuUserPlus } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import UserIcon from './user-icon';
import { SignedOut, SignedIn, SignInButton, SignUpButton } from '@clerk/nextjs';
import SignOutLink from './signout-link';
import {  } from 'react-icons/lu';
import { auth } from '@clerk/nextjs/server';



const LinksDropdown = () => {
  const {userId} = auth()
  const isAdmin = userId === process.env.ADMIN_USER_ID
  
  return <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='outline' className='flex gap-4 max-w-[100px]'>
        <LuAlignLeft className='w-6 h-6' />
        <UserIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='w-40' align='start' sideOffset={10}>
      
      <SignedOut>
        <DropdownMenuItem>
          <SignInButton mode='modal'>
            <button className='w-full text-left flex items-center gap-2'>
              <LuLogIn className='h-4 w-4' />
              <span>Login</span>
            </button>
          </SignInButton>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignUpButton>
            <button className='w-full text-left flex items-center gap-2'>
              <LuUserPlus className='h-4 w-4' />
              <span>Sign Up</span>
            </button>
          </SignUpButton>
        </DropdownMenuItem>
      </SignedOut>
      
      <SignedIn>
        {links.map((link) => {
          if (link.label === 'dashboard' && !isAdmin) return null
          return <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='capitalize w-full flex items-center gap-2'>
              <link.icon className='w-4 h-4' />
              <span>{link.label}</span>
            </Link>
          </DropdownMenuItem>
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutLink />
        </DropdownMenuItem>
      </SignedIn>
    </DropdownMenuContent>
  </DropdownMenu>
}
export default LinksDropdown