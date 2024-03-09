import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [Istoggle, setToggle] = useState(true);
    const links = [
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "skills"
        },
        {
            id: 4,
            link: "portfolio"
        },
        {
            id: 5,
            link: "companies"
        },
        {
            id: 6,
            link: "contact me"
        }
    ]

    return (
        <div>
            <div className='px-4 w-full h-20 flex fixed justify-between items-center bg-black'>
                <h1 className='hidden md:flex font-nameFont text-4xl ml-2 text-white'>It's Me Jaishankar</h1>
                <h1 className='sm:visible md:hidden font-nameFont text-4xl ml-2 text-white'>Jaishankar</h1>
                <div className='hidden md:flex'>    
                    <ul className='flex flex-row'>
                        {/* {
                            links?.map((data) => {
                                return (
                                    <li key={data.id} className='mr-4 px-3 font-medium cursor-pointer capitalize transition-all ease-in-out
                                hover:text-white hover:scale-110 text-gray-500 text-2xl'>
                                        {data.link}
                                    </li>
                                )
                            })
                        } */}
                    </ul>
                </div>
                <div className='md:hidden lg:hidden'>
                    {!Istoggle ?
                        <svg onClick={() => setToggle(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="cursor-pointer w-6 h-6 bg-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                        : <svg onClick={() => setToggle(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="cursor-pointer w-6 h-6 float-right  bg-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    }
                    <ul>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>
                        <li>item1</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar