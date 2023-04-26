import React from 'react'

// Icons
import { RiCloseFill, RiDeleteBin5Line } from "react-icons/ri";

const Cart = (props) => {

    const {showCart, setShowCart} = props;

    return (
        <div>
            {/* Shopping cart */}
            <div className={`lg:col-span-2 fixed top-0 w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showCart ? "right-0" : "-right-full"} bg-[#1F1D2B]`}>

                <div className="relative pt-16 lg:pt-9 text-gray-300 p-8 h-full">
                    <RiCloseFill onClick={() => setShowCart(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
                    <h1 className="text-2xl pt-4">Shopping cart</h1>

                    {/* Card */}
                    <div>
                        <div className="grid grid-cols-6 mb-2 p-4">
                            <h5 className="col-span-4">Product</h5>
                            <h5>Qty</h5>
                            <h5>Price</h5>
                        </div>

                        {/* All products */}
                        <div className="h-[500px] md:h-[800px] lg:h-[600px] overflow-scroll overflow-x-hidden lg:w-[340px] lg:pr-2">

                            {/* Product */}
                            <div className="bg-[#262837] p-4 rounded-xl mb-4">
                                <div className="grid grid-cols-6">
                                    {/* Product description */}
                                    <div className="flex items-center gap-4 col-span-4">
                                        <img src="/src/img/camiseta-1.png" alt="" className="w-16" />
                                        <div>
                                            <h5 className="text-sm w-24">God Loves You Tee</h5>
                                            <p className="text-xm text-gray-500">€30.00</p>

                                        </div>
                                    </div>
                                    {/* Quantity */}
                                    <div>
                                        <span>2</span>
                                    </div>
                                    {/* Price */}
                                    <div>
                                        <span>€60.00</span>
                                        {/* Button delete product */}
                                        <div className="pt-3">
                                            <button className="border border-red-500 p-2 rounded-lg">
                                                <RiDeleteBin5Line className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#262837] p-4 rounded-xl mb-4">
                                <div className="grid grid-cols-6">
                                    {/* Product description */}
                                    <div className="flex items-center gap-3 col-span-4">
                                        <img src="/src/img/camiseta-1.png" alt="" className="w-16" />
                                        <div>
                                            <h5 className="text-sm w-24">God Loves You Tee</h5>
                                            <p className="text-xm text-gray-500">€30.00</p>

                                        </div>
                                    </div>
                                    {/* Quantity */}
                                    <div>
                                        <span>2</span>
                                    </div>
                                    {/* Price */}
                                    <div>
                                        <span>€60.00</span>
                                        {/* Button delete product */}
                                        <div className="pt-3">
                                            <button className="border border-red-500 p-2 rounded-lg">
                                                <RiDeleteBin5Line className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#262837] p-4 rounded-xl mb-4">
                                <div className="grid grid-cols-6">
                                    {/* Product description */}
                                    <div className="flex items-center gap-3 col-span-4">
                                        <img src="/src/img/camiseta-1.png" alt="" className="w-16" />
                                        <div>
                                            <h5 className="text-sm w-24">God Loves You Tee</h5>
                                            <p className="text-xm text-gray-500">€30.00</p>

                                        </div>
                                    </div>
                                    {/* Quantity */}
                                    <div>
                                        <span>2</span>
                                    </div>
                                    {/* Price */}
                                    <div>
                                        <span>€60.00</span>
                                        {/* Button delete product */}
                                        <div className="pt-3">
                                            <button className="border border-red-500 p-2 rounded-lg">
                                                <RiDeleteBin5Line className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#262837] p-4 rounded-xl mb-4">
                                <div className="grid grid-cols-6">
                                    {/* Product description */}
                                    <div className="flex items-center gap-3 col-span-4">
                                        <img src="/src/img/camiseta-1.png" alt="" className="w-16" />
                                        <div>
                                            <h5 className="text-sm w-24">God Loves You Tee</h5>
                                            <p className="text-xm text-gray-500">€30.00</p>

                                        </div>
                                    </div>
                                    {/* Quantity */}
                                    <div>
                                        <span>2</span>
                                    </div>
                                    {/* Price */}
                                    <div>
                                        <span>€60.00</span>
                                        {/* Button delete product */}
                                        <div className="pt-3">
                                            <button className="border border-red-500 p-2 rounded-lg">
                                                <RiDeleteBin5Line className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#262837] p-4 rounded-xl mb-4">
                                <div className="grid grid-cols-6">
                                    {/* Product description */}
                                    <div className="flex items-center gap-3 col-span-4">
                                        <img src="/src/img/camiseta-1.png" alt="" className="w-16" />
                                        <div>
                                            <h5 className="text-sm w-24">God Loves You Tee</h5>
                                            <p className="text-xm text-gray-500">€30.00</p>

                                        </div>
                                    </div>
                                    {/* Quantity */}
                                    <div>
                                        <span>2</span>
                                    </div>
                                    {/* Price */}
                                    <div>
                                        <span>€60.00</span>
                                        {/* Button delete product */}
                                        <div className="pt-3">
                                            <button className="border border-red-500 p-2 rounded-lg">
                                                <RiDeleteBin5Line className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#262837] p-4 rounded-xl mb-4">
                                <div className="grid grid-cols-6">
                                    {/* Product description */}
                                    <div className="flex items-center gap-3 col-span-4">
                                        <img src="/src/img/camiseta-1.png" alt="" className="w-16" />
                                        <div>
                                            <h5 className="text-sm w-24">God Loves You Tee</h5>
                                            <p className="text-xm text-gray-500">€30.00</p>

                                        </div>
                                    </div>
                                    {/* Quantity */}
                                    <div>
                                        <span>2</span>
                                    </div>
                                    {/* Price */}
                                    <div>
                                        <span>€60.00</span>
                                        {/* Button delete product */}
                                        <div className="pt-3">
                                            <button className="border border-red-500 p-2 rounded-lg">
                                                <RiDeleteBin5Line className="text-red-500" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>





                    </div>

                    {/* Submit payment */}
                    <div className="bg-[#262837] absolute bottom-0 w-full left-0 p-4">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400">Discount</span>
                            <span>€0</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400">Subtotal</span>
                            <span>€0</span>
                        </div>
                        <div>
                            <button className="bg-[#37B9F1] text-[#262837] w-full rounded-md p-2">Continue to payment</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart