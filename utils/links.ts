import { LayoutDashboard, ListOrdered, HandCoins, SearchSlash, ShoppingBasket, Star, Home, ShoppingCart, CirclePlus, LucideIcon } from "lucide-react"




type NavLink = {
    href: string,
    label: string,
    icon: LucideIcon
}

export const links:NavLink[]  = [
    {href: '/', label: 'home', icon: Home},
    {href: '/about', label: 'about', icon: SearchSlash },
    {href: '/products', label: 'products', icon: ShoppingBasket},
    {href: '/favorites', label: 'favorites', icon: Star },
    {href: '/cart', label: 'cart', icon: ShoppingCart},
    {href: '/orders', label: 'orders', icon: ListOrdered },
    {href: '/admin/sales', label: 'admin', icon: LayoutDashboard },
]


export const adminLinks:NavLink[] = [
    {href: '/', label: 'home', icon: Home},
    {href: '/admin/sales', label: 'sales', icon: HandCoins},
    {href: '/admin/products', label: 'products', icon: ShoppingBasket},
    {href: '/admin/products/create', label: 'create product', icon: CirclePlus},
]