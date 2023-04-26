import React from 'react'

const Accessories = (props) => {

    const { img, clothes_name, price } = props;

    return (
        <div>
            {/* Title content home */}
            <div className="text-center nb-6 mb-8">
                <h2 className="text-2xl text-gray-300 uppercase">Accessories</h2>
            </div>
            <hr />

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Card */}
                <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center shadow-md text-xl text-gray-300 text-center gap-4 cursor-pointer">
                    <img src="/src/img/accessories-1.png" className="w-80 object-cover" />
                    <p>asdfasd</p>
                    <span>€32</span>
                </div>
            </div>
        </div>
    )
}

export default Accessories