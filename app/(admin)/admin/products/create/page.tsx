import {faker} from '@faker-js/faker'
import FormInput from "@/components/form/form-input"
import { createProductAction } from "@/utils/actions"
import FormContainer from "@/components/form/form-container"
import PriceInput from "@/components/form/price-input"
import ImageInput from "@/components/form/image-input"
import TextAreaInput from "@/components/form/text-area-input"
import CheckboxInput from "@/components/form/checkbox"
import { SubmitButton } from "@/components/form/buttons"

const AdminProductCreatePage = () => {
  const name = faker.commerce.productName()
  const company = faker.company.name()
  const description = faker.lorem.paragraph({min: 10, max: 12})
  
  
  return <section className='mt-8 pl-4'>
    <h1 className="text-xl font-semi-bold mb-8 capitalize">create product</h1>
    <div className="border p-8 rounded-md w-full">
      <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput 
              type="text" 
              name="name" 
              label="product name" 
              defaultValue={name} 
            />
            <FormInput 
              type="text" 
              name="company" 
              label="comapany" 
              defaultValue={company} 
            />
            <PriceInput />
            <ImageInput></ImageInput>
          </div>
          <TextAreaInput 
            name="description" 
            labelText="product description" 
            defaultValue={description} 
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>
        <SubmitButton text="create product" className="mt-8" />
      </FormContainer>
    </div>
  </section>
}
export default AdminProductCreatePage