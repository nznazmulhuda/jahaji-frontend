import React from 'react'
import FirstRow from './ui/firstRow'
import SecondRow from './ui/secondRow'
import ThirdRow from './ui/thirdRow'

function Footer() {
  return (
    <footer className='py-16 mt-20 border-t-2 border-[#E2E3E6] rounded-t-2xl'>
      <div className='container mx-auto w-full flex flex-col gap-8'>
        {/* first row */}
        <FirstRow />

        <hr className='text-[#E2E3E6]' />

        {/* second row */}
        <SecondRow />

        <hr className='text-[#E2E3E6]' />

        {/* third row */}
        <ThirdRow />
      </div>
    </footer>
  )
}

export default Footer