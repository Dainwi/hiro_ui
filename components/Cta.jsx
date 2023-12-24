import React from "react";

const Cta = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto border-black border-2">
          {/* <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"> */}
          <div class="flex flex-col sm:flex-row sm:items-center items-start justify-evenly mx-auto">
            <div>
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
            Get Personalized Health Care Assistance
            </h1>
            <p>Sign up or login to access your AI Health Care Companion</p>
            </div>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Learn more
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Sing Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
