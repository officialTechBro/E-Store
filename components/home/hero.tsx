import Link from "next/link"
import { Button } from "../ui/button"
import HeroCarousel from "./hero-carousel"

const Hero = () => {
  return  <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 itemc-cener">
    <div>
      <h1 className="max-w-2xl font-bold tracking-tight text-4xl sm:text-6xl">
        We are changng the way people shop
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foregrond">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat consequatur ut pariatur molestias nulla optio repellat distinctio repudiandae voluptatum?
      </p>
      <Button asChild size='lg' className="mt-10">
        <Link href='/products'>Our Products</Link>
      </Button>
    </div>
    <HeroCarousel />
  </section>
  
}
export default Hero