import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {/* Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten */}
              Transforming Healthcare with AI Technology
            </h1>
            <p className="mb-8 leading-relaxed">
            Explore the cutting-edge advancements in personalized healthcare solutions, driven by our state-of-the-art AI technology. Experience a new era of innovation and precision in healthcare, tailored to meet your unique needs and preferences.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Learn more
              </button>
              <Link href="/register">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Sing Up
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
            <Image src="/hero.jpg" width={920} height={800} alt="hero" priority={true} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
