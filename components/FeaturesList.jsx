import Image from "next/image";
import React from "react";

const FeaturesList = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            Discover the power of our AI-driven <br /> Health Care Companion
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-evenly -m-4">
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image
                                    src="/featurelist1.jpg"
                                    width={550}
                                    height={550}
                                    alt="image"
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        Efficiently manage your health with our advanced features
                                    </h2>
                                    <h3 className="text-gray-500 mb-3"></h3>
                                    <p className="mb-4">
                                        Our symptom analysis helps you identify potential health
                                        issues
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image
                                    src="/featurelist2.jpg"
                                    width={450}
                                    height={450}
                                    alt="image"
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        Stay informed with personalized health recommendations
                                    </h2>
                                    <h3 className="text-gray-500 mb-3"></h3>
                                    <p className="mb-4">
                                        Access our comprehensive health database for valuable
                                        insights
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesList;
