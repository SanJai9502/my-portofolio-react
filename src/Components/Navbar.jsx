import React, { useState } from 'react'
import { logo } from '../assets/index';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: "home"
        },
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
        }
    ]
    const [toggle, setToggle] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white'>
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <img src={logo} alt="logo" className="h-7 w-7" />
                    <span className='font-bold '>Jaishankar</span>
                </div>

                <div onClick={() => setToggle(!toggle)} className='w-7 h-7 absolute right-8 cursor-pointer top-6 md:hidden'>
                    {
                        toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                            : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={`md:flex md:items-center  md:pb-0 pb-0   absolute md:static 
                 bg-white md:z-auto z-[-1] left-0 w-full capitalize md:w-auto md:pl-10 transition-all duration-500 ease-in-out
                 ${toggle ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        links.map(link =>
                            <li className='font-semibold transition-all ml-6 ease-linear hover:scale-x-95 my-7 md:my-0 md:ml-8' key={link.id}>
                                <a href='/'>{link.link}</a>
                            </li>
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar