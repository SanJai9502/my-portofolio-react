import React from 'react'
import { myImage } from '../assets/index';
import { ReactComponent as Logo } from './cloud.svg';
const Home = () => {
  return (
    <div className='m-14 flex px-4  items-center md:px-20 flex-col md:flex-row'>
      <div>
        <h1 className='text-[40px] font-bold'>Hello</h1>
        <h1 className='text-[40px] font-bold'>I am
          <span className='text-purple-800'> Jaishankar K V</span>
        </h1>
        <h1 className='text-gray-600 mt-4'>I am Jaishankar K V, A Full-Stack Web Developer with 7+ years of experience <br/>& Currently working in Siemens Healthineers</h1>
        <button className='transition-all ease-in-out hover:scale-110 text-white rounded-md mt-4 bg-blue-600 p-2 px-3 '>Resume</button>
      </div>
      <Logo/>
    </div>
  )
}

export default Home