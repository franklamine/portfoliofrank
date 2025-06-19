import React from 'react'
import {NavLink} from "react-router-dom";

function Stack() {
    return (
        <main className="md:ml-[16.6667%] p-1 md:pr-0">
            <div className=" py-20 mx-5 ">
                <h1 className="text-4xl md:text-5xl font-bold text-left mb-14 ">My technological toolbox</h1>
                <NavLink to="/contact" className="text-3xl md:text-8xl">Do you have a project?</NavLink>
            </div>

            <div className="flex flex-col gap-6 ">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className=" mx-5 bg-slate-800 rounded-xl shadow-md p-20"
                    >
                        <h3 className="text-lg font-semibold mb-2">Client #{index + 1}</h3>
                        <p className="text-sm ">
                            "Super expérience, travail très professionnel. Je recommande à 100% !"
                        </p>
                    </div>
                ))}
            </div>
            <p className="mb-14"></p>
        </main>
    )
}

export default Stack
