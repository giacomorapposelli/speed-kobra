import harvester from '../public/images/harvester.jpg'
import excoriated from '../public/images/excoriated.jpg'
import vinylRed from '../public/images/vinyl-red.jpg'
import vinylBlue from '../public/images/vinyl-blue.jpg'
import vinylGreen from '../public/images/vinyl-green.jpg'
import tape1 from '../public/images/tape1.jpg'
import tape2 from '../public/images/tape2.jpg'
import tape3 from '../public/images/tape3.jpg'
import tape4 from '../public/images/tape4.jpg'

const items = [
  {
    id: 1,
    name: 'White Skull  ',
    type: 'T-Shirt',
    price: 10,
    preview: harvester,
    sizes: ['S', 'M', 'L'],
    inStock: true,
    images: [harvester],
  },
  {
    id: 2,
    name: 'Excoriated',
    type: 'T-Shirt',
    price: 15,
    preview: excoriated,
    sizes: ['M', 'L'],
    inStock: true,
    images: [excoriated],
  },
  {
    id: 3,
    name: 'Days Of Madness',
    type: 'LP',
    price: 12,
    preview: vinylRed,
    sizes: ['Red', 'Blue', 'Green'],
    inStock: true,
    images: [vinylRed, vinylBlue, vinylGreen],
  },
  {
    id: 4,
    name: 'Nightrider',
    type: 'Tape',
    price: 7,
    sizes: ['Gold'],
    preview: tape1,
    inStock: true,
    images: [tape1, tape2, tape3, tape4],
  },
]

export default items
