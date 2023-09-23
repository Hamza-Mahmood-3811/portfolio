import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';

import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

// source https://www.pexels.com/search/portfolio/
// react-type-animation https://www.npmjs.com/package/react-type-animation
// 1st option https://images.pexels.com/photos/15309646/pexels-photo-15309646/free-photo-of-wooden-portfolio-text.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// 2nd option https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
const Main = () => {
  const option1 = 'https://images.pexels.com/photos/15309646/pexels-photo-15309646/free-photo-of-wooden-portfolio-text.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const option2 = 'https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  return (
    <div id='main'>
        <img src={option2} alt='' className='w-full h-screen object-cover object-left scale-x-[-1]'/>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
          <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Hamza Mahmood</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
              I'm a
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Coder',
                  1000,
                  'Tech Enthusiast',
                  1000,
                  'Traditional Artist',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' ,display: 'inline-block' }}
                repeat={Infinity}
              />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <FaTwitter className='cursor-pointer' size={20} />
              <FaFacebookF className='cursor-pointer' size={20}/>
              <FaInstagram className='cursor-pointer' size={20}/>
              <FaLinkedinIn className='cursor-pointer' size={20}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main