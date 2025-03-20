import React from 'react'
import FirstRow from './ui/firstRow'
import SecondRow from './ui/secondRow'
import ThirdRow from './ui/thirdRow'

function Footer() {
  return (
    <footer>
      {/* first row */}
      <FirstRow />

      {/* second row */}
      <SecondRow />

      {/* third row */}
      <ThirdRow />
    </footer>
  )
}

export default Footer