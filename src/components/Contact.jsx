import React from 'react'
const endPoint = 'https://getform.io/f/e86c0f5d-63b4-49ef-94f0-b507b88dd41c'
const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form action={endPoint} method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>First Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="firstName" id="" />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Last Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='lastName' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Phone</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea className='border-2 rounded-lg p-3 flex border-gray-300' name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact