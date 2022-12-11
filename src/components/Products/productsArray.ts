export type Product = {
  id: number
  name: string
  description:string
  type: string
  capacity: number
  price:number
  image:string
}

const productsArray:Product[] = [{  
  id:1,
  name:"iPhone X",
  description:'This is iPhone X',
  type:'phone',
  capacity:64,
  price:500,
  image: './images/iPhone-grey.jpg'
},
{
  id:2,
  name:"iPhone XS",
  description:'This is iPhone XS',
  type:'phone',
  capacity:64,
  price:400,
  image: './images/iPhone-lavenda.jpg'
},
{
  id:3,
  name:"iPhone 13 Pro",
  description:'This is iPhone 13 Pro',
  type:'phone', 
  capacity:128,
  price:1000,
  image: './images/iPhone-pink.jpg'
},
{
  id:4,
  name:"iPhone X",
  description:'This is iPhone X',
  type:'phone',
  capacity:64,
  price:500,
  image: './images/iPhone-purple.jpg'
},
{
  id:5,
  name:"iPhone XS",
  description:'This is iPhone XS',
  type:'phone',
  capacity:64,
  price:400,
  image: './images/iPhone-red.jpg'
},
{
  id:6,
  name:"iPhone 13 Pro",
  description:'This is iPhone 13 Pro',
  type:'phone', 
  capacity:128,
  price:1000,
  image: './images/iPhone-white.jpg'
}
]

export default productsArray

export const getProductsObject = (array:Product[]) => {
  return array.reduce((object, product) => ({
    ...object,
    [product.id]:product
  }),{})
}