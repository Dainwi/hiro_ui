import Image from 'next/image'
import Link from "next/link"
import React from 'react'

function Features() {
  return (
    <>
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
      <Image src='/about.jpg' alt="About" width={720} height={600}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Experience 24/7 Healthcare Support with Our AI Health Care Companion</h1>
      <p className="mb-8 leading-relaxed">Our AI Health Care Companion provides round-the-clock support, ensuring you have access to healthcare information and assistance whenever you need it. With its advanced features, it&apos;s like having a personal healthcare assistant at your fingertips.</p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          {/* <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label> */}
          <input placeholder='Email' type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <Link href="/register">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Sing Up</button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Features