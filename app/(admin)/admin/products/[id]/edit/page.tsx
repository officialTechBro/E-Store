import { fetchAdminProductDetails, updateProductAction, updateProductImageAction } from '@/utils/actions';
import FormContainer from '@/components/form/form-container';
import FormInput from '@/components/form/form-input';
import PriceInput from '@/components/form/price-input';
import TextAreaInput from '@/components/form/text-area-input';
import { SubmitButton } from '@/components/form/buttons';
import CheckboxInput from '@/components/form/checkbox';
import ImageContainer from '@/components/form/image-container';
import { Separator } from '@/components/ui/separator';

const AdminEditProductPage = async (props: {params: Promise<{id: string}>}) => {
  const {id} = await props.params
  const product = await fetchAdminProductDetails(id)
  const {name, company, description, price, featured} = product

  return <section className='mt-8 pl-4 '>
    <h1 className="text-xl font-semi-bold mb-8 capitalize">update product</h1>
    <div className="border p-8 rounded grid lg:grid-cols-3">
      {/* image container */}
      <div className='lg:pr-6 lg:mt-4'>
        <ImageContainer action={updateProductImageAction} name={name} image={product.image} text='update image'>
          <input type="hidden" name='id' value={id} />
          <input type="hidden" name='url' value={product.image} />
        </ImageContainer>
      </div>
      
      <div className='lg:col-span-2'>
        <FormContainer action={updateProductAction} >
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput name='name' type='text' label='product name' defaultValue={name} />
            <FormInput name='company' type='text' label='company' defaultValue={company} />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput name='description' labelText='product descriptio' defaultValue={description} />
          <div className='mt-6'>
            <CheckboxInput name='featured' defaultChecked={featured} label='featured' />
          </div>
          <SubmitButton text='update product' className='mt-8' />
        </FormContainer>
      </div>
    </div>
  </section>
}
export default AdminEditProductPage