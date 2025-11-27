import React from 'react'

const Contact = () => {
  return (
    <section className="">
        <div className="lg:p-8 p-4 my-20  mx-auto lg:max-w-[75%]">
             <h1 className="text-4xl md:text-5xl md:text-left text-center lg:text-8xl font-bold text-white mb-8">
            Let's <br /> Get <br />
Started?
        </h1>
    
        <div className="flex md:flex-row flex-col md:text-left text-justify items-center w-[100%] justify-between ml-auto">
             <p className="text-gray-400/50 text-xl max-w-2xl mb-10">
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </p>
            <button className='  text-lg  text-white border border-white px-5 py-2 rounded-md  hover:bg-white/10 hover:text-black  hover:transition-all   '>
                Contact Us
            </button>
          </div>
        
          </div>
         
    
      
    </section>
  )
}

export default Contact