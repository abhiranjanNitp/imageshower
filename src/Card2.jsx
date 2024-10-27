import React, { useState } from 'react';
import { HiArrowRight } from "react-icons/hi";

function Card() {
    const [val, setVal] = useState(0);

    // Array of image URLs for easy addition of more images
    const images = [
        // "https://t4.ftcdn.net/jpg/05/26/92/37/360_F_526923714_gyHev7uIEAoIcSkql9bgaVNDO5cx3Ggn.jpg",/

        "https://www.shutterstock.com/image-vector/indian-festival-lights-happy-diwali-600nw-2523024051.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5zqguezUgTcjmLVTkKSBdhxR8pLKHgm8PQ&s",
        "https://example.com/your-new-image-url.jpg",
        ""
    ];

    return (
        <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
            <div className='relative w-60 h-32 rounded-md overflow-hidden'>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt=""
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${val === index ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
                <span
                    onClick={() => setVal((val + 1) % images.length)}
                    className='w-8 h-8 flex items-center justify-center bg-[#dadada8b] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                >
                    <HiArrowRight size={20} />
                </span>
            </div>
        </div>
    );
}

export default Card;
