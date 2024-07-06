import { CartOrderSummary, CartProduct } from '@/components'
import React from 'react'

const CartContainer = () => {
  return (
    <div className='pb-[140px] px-4'>
      <div className='max-w-[1240px] w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-5'>
        <div className='max-w-[715px] w-full grid gap-9'>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <CartOrderSummary />
      </div>
    </div>
  )
}

export default CartContainer