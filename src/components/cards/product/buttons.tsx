"use client"

import { useState } from "react"
export const WishlistButton = ({ productId }: { productId: string }) => {
  const [isHover, setIsHover] = useState(false)
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    return wishlist.includes(productId)
  })

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    if (wishlist.includes(productId)) {
      const updatedWishlist = wishlist.filter((id: string) => id !== productId)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
    } else {
      wishlist.push(productId)
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }
    setIsAddedToWishlist(!isAddedToWishlist)
  }

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={toggleWishlist}
      className="border border-[#E2E3E6] rounded-[10px] p-4 flex items-center justify-center cursor-pointer relative shadow hover:shadow-none"
    >
      <svg
        className={`absolute transition-opacity duration-300 ${(isHover || isAddedToWishlist) ? "opacity-0" : "opacity-100"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.00067 3.01934C9.56667 1.61334 11.9867 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09134 13.6527 8.662L7.99933 14.3233L2.34733 8.662C0.944666 7.09134 0.997332 4.67934 2.50467 3.17134C4.01467 1.662 6.43 1.61134 8.00067 3.01934V3.01934ZM12.5513 4.11334C11.5513 3.112 9.938 3.07134 8.89133 4.01134L8.00133 4.81L7.11067 4.012C6.06067 3.07067 4.45067 3.112 3.448 4.11467C2.45467 5.108 2.40467 6.698 3.32 7.74867L8 12.436L12.68 7.74934C13.596 6.698 13.546 5.11 12.5513 4.11334V4.11334Z"
          fill="black"
        />
      </svg>

      <svg
        className={`absolute transition-opacity duration-300 ${(isHover || isAddedToWishlist) ? "opacity-100" : "opacity-0"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.00071 3.01932C9.56671 1.61332 11.9867 1.65999 13.4954 3.17132C15.0034 4.68332 15.0554 7.09132 13.6527 8.66199L7.99938 14.3233L2.34738 8.66199C0.944711 7.09132 0.997378 4.67932 2.50471 3.17132C4.01471 1.66199 6.43004 1.61132 8.00071 3.01932V3.01932Z"
          fill="black"
        />
      </svg>
    </button>
  )
}

export const AddToCartButton = ({ productId }: { productId: string }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`w-full bg-black hover:bg-transparent hover:text-black transition-all duration-500  rounded-[4px] h-full text-[16px] leading-[24px] font-medium flex items-center justify-center cursor-pointer text-white relative border border-black hover:border-[#E2E3E6] hover:shadow`}
    >
      <svg
        className={`absolute left-12 transition-opacity duration-500 ${isHover ? "opacity-0" : "opacity-100"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M2.66671 10.6666V2.66659H1.33337V1.33325H3.33337C3.51019 1.33325 3.67975 1.40349 3.80478 1.52851C3.9298 1.65354 4.00004 1.82311 4.00004 1.99992V9.99992H12.292L13.6254 4.66659H5.33337V3.33325H14.48C14.5814 3.33325 14.6814 3.35636 14.7724 3.40081C14.8635 3.44526 14.9433 3.50989 15.0056 3.58978C15.0679 3.66967 15.1113 3.76272 15.1322 3.86186C15.1532 3.961 15.1513 4.06362 15.1267 4.16192L13.46 10.8286C13.4239 10.9727 13.3407 11.1007 13.2235 11.1921C13.1063 11.2836 12.962 11.3332 12.8134 11.3333H3.33337C3.15656 11.3333 2.98699 11.263 2.86197 11.138C2.73695 11.013 2.66671 10.8434 2.66671 10.6666V10.6666ZM4.00004 15.3333C3.64642 15.3333 3.30728 15.1928 3.05723 14.9427C2.80718 14.6927 2.66671 14.3535 2.66671 13.9999C2.66671 13.6463 2.80718 13.3072 3.05723 13.0571C3.30728 12.8071 3.64642 12.6666 4.00004 12.6666C4.35366 12.6666 4.6928 12.8071 4.94285 13.0571C5.1929 13.3072 5.33337 13.6463 5.33337 13.9999C5.33337 14.3535 5.1929 14.6927 4.94285 14.9427C4.6928 15.1928 4.35366 15.3333 4.00004 15.3333ZM12 15.3333C11.6464 15.3333 11.3073 15.1928 11.0572 14.9427C10.8072 14.6927 10.6667 14.3535 10.6667 13.9999C10.6667 13.6463 10.8072 13.3072 11.0572 13.0571C11.3073 12.8071 11.6464 12.6666 12 12.6666C12.3537 12.6666 12.6928 12.8071 12.9428 13.0571C13.1929 13.3072 13.3334 13.6463 13.3334 13.9999C13.3334 14.3535 13.1929 14.6927 12.9428 14.9427C12.6928 15.1928 12.3537 15.3333 12 15.3333Z" fill="white" />
      </svg>

      <svg
        className={`absolute left-12 transition-opacity duration-500 ${isHover ? "opacity-100" : "opacity-0"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M4.00004 5.99992H13.292L13.6254 4.66659H5.33337V3.33325H14.48C14.5814 3.33325 14.6814 3.35636 14.7724 3.40081C14.8635 3.44526 14.9433 3.50989 15.0056 3.58978C15.0679 3.66967 15.1113 3.76272 15.1322 3.86186C15.1532 3.961 15.1513 4.06362 15.1267 4.16192L13.46 10.8286C13.4239 10.9727 13.3407 11.1007 13.2235 11.1921C13.1063 11.2836 12.962 11.3332 12.8134 11.3333H3.33337C3.15656 11.3333 2.98699 11.263 2.86197 11.138C2.73695 11.013 2.66671 10.8434 2.66671 10.6666V2.66659H1.33337V1.33325H3.33337C3.51019 1.33325 3.67975 1.40349 3.80478 1.52851C3.9298 1.65354 4.00004 1.82311 4.00004 1.99992V5.99992ZM4.00004 15.3333C3.64642 15.3333 3.30728 15.1928 3.05723 14.9427C2.80718 14.6927 2.66671 14.3535 2.66671 13.9999C2.66671 13.6463 2.80718 13.3072 3.05723 13.0571C3.30728 12.8071 3.64642 12.6666 4.00004 12.6666C4.35366 12.6666 4.6928 12.8071 4.94285 13.0571C5.1929 13.3072 5.33337 13.6463 5.33337 13.9999C5.33337 14.3535 5.1929 14.6927 4.94285 14.9427C4.6928 15.1928 4.35366 15.3333 4.00004 15.3333ZM12 15.3333C11.6464 15.3333 11.3073 15.1928 11.0572 14.9427C10.8072 14.6927 10.6667 14.3535 10.6667 13.9999C10.6667 13.6463 10.8072 13.3072 11.0572 13.0571C11.3073 12.8071 11.6464 12.6666 12 12.6666C12.3537 12.6666 12.6928 12.8071 12.9428 13.0571C13.1929 13.3072 13.3334 13.6463 13.3334 13.9999C13.3334 14.3535 13.1929 14.6927 12.9428 14.9427C12.6928 15.1928 12.3537 15.3333 12 15.3333Z" fill="black" />
      </svg>

      Add to cart
    </button>
  )
}