import { Button } from "../ui/button"
import Link from "next/link"
import {LuShoppingCart} from 'react-icons/lu'


const CartButton = async () => {
  const cartItems = 9
  return <Button 
    asChild 
    variant='outline' 
    size='icon'
    className="flex justify-center itemc-center relative"
  >
    <Link href='/cart'>
      <LuShoppingCart />
      <span className=" flex absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 items-center justify-center text-xs">
        {cartItems}
      </span>
    </Link>
  </Button>
}
export default CartButton