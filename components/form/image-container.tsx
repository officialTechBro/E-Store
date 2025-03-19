'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import FormContainer from './form-container';
import ImageInput from './image-input';
import { SubmitButton } from './buttons';
import { type actionFunction } from '@/utils/types';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageContainer = (props: ImageInputContainerProps) => {
  const {image, name, action, text} = props
  const [isUpdateFormVisible, setIsUpdateFormVisble] = useState(false)
  
  return <div className='mb-8'>
    <Image 
      src={image} 
      alt={name}
      width={300}
      height={300}
      className='rounded object-cover mb-4 w-[300px] h-[300px]'
      priority  
    />
    <Button variant='outline' size='sm' onClick={() => setIsUpdateFormVisble((prev) => !prev)}>
      {text}
    </Button>

    {isUpdateFormVisible && <div className='max-w-md mt-4'>
      <FormContainer action={action}>
        {props.children}
        <ImageInput />
        <SubmitButton size='sm' text={text} />
      </FormContainer>
    </div>
    }
  </div>
}
export default ImageContainer