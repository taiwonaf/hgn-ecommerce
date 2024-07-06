import { HomeLayout, Categories, StoreHeader } from '@/components'
import ProductDetailsContainer from '@/containers/ProductDetailsContainer'
import { productsData } from '@/data/products'
import { IProduct } from '@/types/product.model'
import React from 'react'

const page = ({ params}: {params: { id: string}}) => {
    const product = productsData.find(item => item.id === params?.id)
  return (
    <HomeLayout>
    <Categories />
    <StoreHeader />
    <ProductDetailsContainer product={product as IProduct} />
  </HomeLayout>
  )
}

export default page