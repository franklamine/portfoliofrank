import React from 'react'
import {NavLink} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";

function Project() {
    return (
        <main className="md:ml-[16.6667%] p-1 md:pr-0">
            <div className=" md:py-14 mx-5 ">
                <h1 className="text-4xl md:text-5xl font-bold text-left mb-14 mt-20 md:mt-0">My remarkable projects  </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 mx-5">
                {[...Array(12)].map((_, index) => (
                    <div
                        className="group rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform duration-500">
                        <img src="logo3.png" alt="project" className="w-full h-96 object-cover"/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2"> Project #{index}</h3>
                            <p className="text-sm  mb-4">
                                Another quick summary or highlight of the project’s goals or technologies.
                            </p>
                            <NavLink to="#"
                                     className="text-blue-500 hover:underline flex items-center gap-2 font-medium">
                                View project <FaArrowRight className="group-hover:animate-flecheGaucheDroite"/>
                            </NavLink>
                        </div>
                    </div>

                ))}
            </div>

        </main>)
}

export default Project
