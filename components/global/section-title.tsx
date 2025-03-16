import { Separator } from "../ui/separator"

const SectionTitle = ({text}: {text: string}) => {
  return <div>
    <h2 className="text-3xl font-medium tracking-wide capitalize">{text}</h2>
    <Separator />
  </div>
}
export default SectionTitle