import { cn } from "@/lib/utils"

const ProductPrice = ({value, className}: {value: number, className?: string}) => {
    const stringValue = value.toFixed(2)
    const [intValue, floatValue] = stringValue.split('.')
  return (
    <p className={cn('mt-2', className)}>
        <span className="text-sm align-super">$</span>
        {intValue}
        <span className="text-sm align-super">.{floatValue}</span>
    </p>
  )
}
export default ProductPrice