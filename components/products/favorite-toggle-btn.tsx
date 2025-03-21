import {FaHeart} from 'react-icons/fa'
import { Button } from '../ui/button'


const FavoriteToggleBtn = ({productId}: {productId: string}) => {
  return <Button size='icon' variant="outline" className='p-2 cursor-pointer'>
    <FaHeart />
  </Button>
}
export default FavoriteToggleBtn