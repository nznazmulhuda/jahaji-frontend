import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import ProductSwiper from '../swiper/product.swiper'

const ProductPreview: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className='w-full h-full'>
        <button className={`w-full bg-black hover:bg-transparent hover:text-black transition-all duration-500 rounded-[4px] h-full text-[16px] leading-[24px] font-medium flex items-center justify-center cursor-pointer text-white relative border border-black hover:border-[#E2E3E6] hover:shadow`}>
          Preview
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle className='hidden'>Preview</DialogTitle>
        {/* left side */}
        <aside>
          <ProductSwiper />
        </aside>

        {/* right side */}
        <aside>

        </aside>
      </DialogContent>
    </Dialog>
  )
}

export default ProductPreview