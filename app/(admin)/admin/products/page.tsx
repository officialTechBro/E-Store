import EmptyList from '@/components/global/empty-list';
import { deleteProductAction, fetchAdminProduct } from '@/utils/actions';
import Link from 'next/link';


// import { formatCurrency } from '@/utils/format';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IconButton } from '@/components/form/buttons';
import FormContainer from '@/components/form/form-container';

const AdminProductsPage = async () => {
  const items = await fetchAdminProduct()
  if (items.length === 0) return <EmptyList />
  
  return <section className='mt-8 pl-4'>
    <h1 className="text-xl font-semi-bold mb-8 capitalize">products</h1>
    <Table>
      <TableCaption className='capitlize'>
        total products: {items.length}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          const {id:productId, name, price, company} = item
          return <TableRow key={productId}>
            <TableCell>
              <Link href={`products/${productId}`} className='underline text-muted-foreground capitalize'>{name}</Link>
            </TableCell>
            <TableCell>{company}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell className='flex items-center gap-x-1'>
              <Link href={`/admin/products/${productId}/edit`}>
                <IconButton actionType='edit'></IconButton>
              </Link>
              <DeleteProduct productId={productId} />
            </TableCell>
            
          </TableRow>
        })}
      </TableBody>
    </Table>
  </section>
}


function DeleteProduct({productId}: {productId:string}) {
  const deleteProduct = deleteProductAction.bind(null, {productId})
  return <FormContainer action={deleteProduct}>
    <IconButton actionType='delete' />
  </FormContainer>

}
export default AdminProductsPage