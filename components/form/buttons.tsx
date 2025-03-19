'use client'
import { Loader2 } from "lucide-react"
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SignInButton } from '@clerk/nextjs';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { LuTrash2, LuSquarePen  } from 'react-icons/lu';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export const SubmitButton = ({className='', text = 'submit', size = 'lg'}: SubmitButtonProps) => {
    const {pending} = useFormStatus()
    return <Button
        type="submit"
        disabled={pending}
        className={cn('capitalize', className)}
        size={size}
    >
        {pending ? <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
        </> : text}
    </Button>
}

type actionType = 'edit' | 'delete'
export const IconButton = ({actionType}: {actionType: actionType}) => {
    const {pending} = useFormStatus()
    const renderIcon = () => {
        switch (actionType) {
            case 'edit':
                return <LuSquarePen />;
            case 'delete':
                return <LuTrash2 />;
            default:
                const never: never = actionType;
                throw new Error(`Invalid action type: ${never}`)
        }
    }

    return <Button type="submit" size='icon' variant='link' className="cursor-pointer">
        {pending ? <Loader2 className="animate-spin" /> : renderIcon()}
    </Button>
}