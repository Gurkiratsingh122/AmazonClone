import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import a from '../assets/sideslide/a.jpg'
import b from '../assets/sideslide/b.jpg'
import c from '../assets/sideslide/c.jpg'
import d from '../assets/sideslide/d.jpg'
import e from '../assets/sideslide/e.jpg'
import f from '../assets/sideslide/f.jpg'
import g from '../assets/sideslide/g.jpg'
import h from '../assets/sideslide/h.jpg'
import i from '../assets/sideslide/i.jpg'
import j from '../assets/sideslide/j.jpg'
import k from '../assets/sideslide/k.jpg'
import l from '../assets/sideslide/l.jpg'
import m from '../assets/sideslide/m.jpg'

function SideScrollImages() {
    const sideScrollImages = [
        // Add your image imports or URLs here
        `${a}`, `${b}`, `${c}`, `${d}`, `${e}`, `${f}`, `${g}`, `${h}`, `${i}`, `${j}`, `${k}`, `${l}`, `${m}`,
    ];

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    return (
        <div className="overflow-hidden h-72 relative">
            <div className="text-[20px] mb-4"><b>Best sellers in Home & Kitchen</b></div>

            {/* Scrollable Container */}
            <div
                className="flex overflow-x-auto scrollbar-hidden "
                ref={scrollContainerRef}
            >
                {sideScrollImages.map((item, index) => (
                    <Link key={index} className="flex-shrink-0">
                        <img className="mx-2 w-auto h-auto object-contain" src={item} alt={`Best seller ${index + 1}`} />
                    </Link>
                ))}
            </div>

            {/* Left Scroll Button */}
            <button

                onClick={scrollLeft}
                className="absolute h-[210px] hover:bg-slate-300 hover:bg-opacity-60 left-0 top-1/2 transform -translate-y-1/2 text-[50px]  py-2 px-4 text-yellow-600 font-extrabold rounded-r-lg"
            >
                &#8592;
            </button>

            {/* Right Scroll Button */}
            <button
                onClick={scrollRight}
                className="absolute h-[210px] hover:bg-slate-300 hover:bg-opacity-60  right-0 top-1/2 transform -translate-y-1/2 text-[50px]  py-2 px-4 text-yellow-600 font-extrabold rounded-l-lg"
            >
                &#8594;
            </button>
        </div>
    );
}

export default SideScrollImages;
