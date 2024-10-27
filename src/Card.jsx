import React, { useState } from 'react';
import { HiArrowRight } from "react-icons/hi";

function Card() {
    const [val, setVal] = useState(0);

    return (
        <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
            <div className='relative w-60 h-32 rounded-md flex overflow-hidden'>
                <img
                    className={`shrink-0 transition-transform duration-700 ease-in-out ${val === 0 ? "-translate-x-[100%]" : "-translate-x-0"} w-full h-full object-cover`}
                    src="https://t4.ftcdn.net/jpg/05/26/92/37/360_F_526923714_gyHev7uIEAoIcSkql9bgaVNDO5cx3Ggn.jpg"
                    alt=""
                />
                <img
                    className={`shrink-0 transition-transform duration-700 ease-in-out ${val === 1 ? "-translate-x-[100%]" : "-translate-x-0"} w-full h-full object-cover`}
                    src="https://www.shutterstock.com/image-vector/indian-festival-lights-happy-diwali-600nw-2523024051.jpg"
                    alt="" />
                <img
                    className={`shrink-0 transition-transform duration-700 ease-in-out ${val === 2 ? "-translate-x-[100%]" : "-translate-x-0"} w-full h-full object-cover`}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5zqguezUgTcjmLVTkKSBdhxR8pLKHgm8PQ&s"
                    alt="" />
                <span
                    onClick={() => setVal((val + 1) % 3)}
                    className='w-8 h-8 flex items-center justify-center bg-[#dadada8b] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                >
                    <HiArrowRight size={20} />
                </span>
            </div>
        </div>
    );
}

export default Card;
