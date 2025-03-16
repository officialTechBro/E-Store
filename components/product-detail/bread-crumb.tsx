import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const BreadCrumb = ({name}: {name: string}) => {
  return <Breadcrumb>
    <BreadcrumbList>
        <BreadcrumbItem>
            <BreadcrumbLink href='/' className='capitalize text-md'>
                home
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbLink href='/products' className='capitalize text-sm'>
                products
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
            <BreadcrumbPage className='capitalize text-xs font-light'>
                {name}
            </BreadcrumbPage>
        </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
}
export default BreadCrumb