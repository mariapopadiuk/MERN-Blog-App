import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function PageNotFound() {


  return (
    <>
      <Header />
        <div className="elative overflow-hidden h-screen">  
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full font-mono flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-black leading-tight mt-4">
                You are all alone here
              </h1>
            <p className="font-extrabold text-8xl my-44 text-black animate-bounce">
                404
              </p>
            </div>
          </div>
        </div> 
      <Footer />
    </>
  );
}
