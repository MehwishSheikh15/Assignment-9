import React from "react";
import Image from "next/image";

const CardLayout = () => {
    return (
        <div className="container mx-auto py-10">
       
            <div className="flex flex-wrap justify-center md:justify-between gap-6 mb-10">
              
                <div className="w-full md:w-[48%] p-6 bg-gray-100 rounded-lg shadow-lg">
                    <Image
                        src="/image/card1.jpg" 
                        alt="Card 1"
                        width={500}
                        height={300}
                        className="rounded-md"
                    />
                    <h3 className="text-xl font-bold text-gray-700 mt-4">Programming 2 Fundamental</h3>
                    <p className="mt-2 text-gray-600">
                        This is the description for Card 1.
                    </p>
                </div>

               
                <div className="w-full md:w-[48%] p-6 bg-gray-100 rounded-lg shadow-lg">
                    <Image
                        src="/image/card2.jpg" 
                        alt="Card 2"
                        width={500}
                        height={300}
                        className="rounded-md"
                    />
                    <h3 className="text-xl font-bold text-gray-700 mt-4">Web2 Using NextJs</h3>
                    <p className="mt-2 text-gray-600">
                        This is the description for Card 2. 
                    </p>
                </div>
            </div>

        
            <div className="flex flex-wrap justify-center md:justify-between gap-6">
              
                <div className="w-full md:w-[30%] p-6 bg-gray-100 rounded-lg shadow-lg">
                    <Image
                        src="/image/card3.jpg" 
                        alt="Card 3"
                        width={500}
                        height={300}
                        className="rounded-md"
                    />
                    <h3 className="text-xl font-bold text-gray-700 mt-4">Earn as You Learn</h3>
                    <p className="mt-2 text-gray-600">
                        This is the description for Card 3.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="w-full md:w-[30%] p-6 bg-gray-100 rounded-lg shadow-lg">
                    <Image
                        src="/image/card4.jpg" 
                        alt="Card 4"
                        width={500}
                        height={300}
                        className="rounded-md"
                    />
                    <h3 className="text-xl font-bold text-gray-700 mt-4">Web 3 And Metaverse</h3>
                    <p className="mt-2 text-gray-600">
                        This is the description for Card 4. 
                    </p>
                </div>

                {/* Card 5 */}
                <div className="w-full md:w-[30%] p-6 bg-gray-100 rounded-lg shadow-lg">
                    <Image
                        src="/image/card5.jpg" 
                        alt="Card 5"
                        width={500}
                        height={300}
                        className="rounded-md"
                    />
                    <h3 className="text-xl font-bold text-gray-700 mt-4">Artificial Intelligence</h3>
                    <p className="mt-2 text-gray-600">
                        This is the description for Card 5. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardLayout;
