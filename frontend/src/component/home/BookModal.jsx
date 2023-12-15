import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";



function BookModal({ books ,onClose}) {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 flex justify-center' onClick={onClose}>
        <div onClick={(event)=> event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative top-5'>
         <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600' onClick={onClose}/>
         <h2 className='w-fit  px-4 py-1 bg-red-300 rounded-lg text-black'>
               {books.publishYear}
              </h2>
              <h4 className='my-2 text-gray-500'>
                {books._id}
              </h4>
              <div className='flex justify-start items-center gap-x-2'>
                  <PiBookOpenTextLight className='text-red-800 text-2xl'/>
                  <h2 className='my-1'>{books.title}</h2>
              </div>
              <div className='flex justify-start'>
                   <BiUserCircle className="text-red-300 text-2xl"/>
                   <h2 className='my-1'>{books.author}</h2>
              </div>
              <p className='mt-2 overflow-hidden'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor debitis praesentium vero sunt minima reprehenderit harum dolorem, dicta nobis, id similique natus suscipit dignissimos quos reiciendis et officia ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium praesentium fugit illum libero aperiam, quibusdam sit odit corrupti placeat pariatur molestiae doloribus tempora dignissimos ullam, nemo sapiente voluptatibus. Delectus, eius?
                Modi molestias optio enim, reiciendis et id maxime ipsam neque consequatur esse possimus iste maiores. Saepe iste beatae, quisquam veritatis totam cum, quam est neque at a aut recusandae expedita?
                Numquam tempore dignissimos at, illum amet perferendis molestias praesentium autem suscipit ex asperiores? Non magni quibusdam reiciendis autem fuga adipisci voluptates, voluptas minima incidunt dolorem aut accusamus perferendis suscipit consequuntur?
                Tempora autem vero repudiandae ipsa ea voluptatibus similique excepturi hic error, doloremque ipsum dolore dolorum veniam ex eius nulla ad natus, magni nam modi! Aut dolorem commodi optio ducimus quasi!
              </p>
        </div>

      
    </div>
  )
}
export default BookModal;