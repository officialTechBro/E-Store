import { cn } from "@/lib/utils"

type EmptyListProps = {
  heading?: string
  className?: string
}

const EmptyList = ({heading = "No items found!.", className}: EmptyListProps) => {
  return <div className="flex items-center justify-center">
    <h2 className={cn('text-xl mt-40', className)}>
      {heading}
    </h2>
  </div>
}
export default EmptyList