"use client"

import React from 'react'
import ProductCardSmall from "@/components/cards/product/small"
import getData from "@/hooks/getData"
import { TProduct } from "@/schemas/product.interface"

function Products() {

  const datas: {
    loading: boolean
    error: boolean
    data: TProduct[] | null
  } = getData({ endpoint: "/products?limit=8" })

  console.log({ datas })
  return (
    <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {datas.loading && <p>Loading...</p>}
      {datas.error && <p>Error...</p>}

      {
        datas.data && datas.data.map((product) => <ProductCardSmall key={product._id} product={product} />)
      }
    </main>
  )
}

export default Products