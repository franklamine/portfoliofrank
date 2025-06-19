import React from 'react'
import {FaArrowRight, FaMapMarkerAlt} from "react-icons/fa";
import {NavLink} from "react-router-dom";

function About() {
    return (
        <main className="md:ml-[16.6667%] p-1 md:pr-0">

            {/*session about me*/}
            <section className=" py-5 mx-5">
                <h1 className="text-4xl md:text-5xl font-bold text-left mt-8 md:mt-0">Find out who i'm</h1>
                <p className="mt-4 text-left text-xl">
                    I'm a passionate full-stack developer dedicated to building high-performance
                    digital solutions. I design and develop modern, robust web applications using
                    technologies like React, Spring Boot, and Laravel.
                    With full control over the entire development lifecycle, I’m involved in every
                    phase of a project from crafting intuitive user interfaces to managing complex
                    database systems and designing solid back-end architectures. My goal is to deliver
                    reliable, scalable, and user-focused products.
                    Curious, detail-oriented, and constantly keeping up with new technologies, I enjoy
                    taking on new challenges and turning ideas into functional, real-world solutions.
                </p>

                <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                    {/* Localisation + séparateur */}
                    <div className="flex items-center w-full md:w-auto flex-1">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <FaMapMarkerAlt className="text-blue-500 text-lg"/>
                            <span className="font-medium">Québec, Canada</span>
                        </div>
                        <div className="flex-grow border-t-2 border-dashed border-slate-400 ml-4"></div>
                    </div>
                </div>
            </section>

            {/*session education*/}
            <section className=" py-5 mx-5">
                <h2 className="text-3xl font-bold text-left ">Education</h2>

                <div className=" mt-5 flex flex-col  gap-5">
                    <div>
                        <p className="text-2xl font-bold">Baccalauréat C en Mathématiques et Sciences Phisiques</p>
                        <p>Lycée Bilingue de Yaoundé, 2015</p>
                    </div>
                   <div>
                       <p className="text-2xl font-bold">Brevet de Technicien Supérieur en Réseau et Sécurité</p>
                       <p>ISTAG (Institut Supérieur de Technologie Appliquée et de Gestion, 2020</p>
                   </div>
                  <div>
                      <p className="text-2xl font-bold">Licence Professionnelle en Administration et Sécurité Réseau</p>
                      <p>ISTAG (Institut Supérieur de Technologie Appliquée et de Gestion, 2021</p>
                  </div>
                </div>
                <div className="flex-grow border-t-2 border-dashed border-slate-400 ml-4 mt-8 "></div>

            </section>

            {/*session stack*/}
            <section className=" py-5 mx-5">
                <h2 className="text-3xl font-bold text-left">My Tech Toolbox</h2>
                <p className="mt-5">
                    I bring a versatile set of technical skills that allows me to build complete, high-performing,
                    and modern web solutions. I’m proficient in development tools such as WordPress, Framer, HTML,
                    CSS, JavaScript, PHP, and React.js, as well as back-end frameworks like Spring Boot and Laravel.
                    On the design side, I work with professional tools like Adobe XD, Photoshop, and Illustrator to
                    create user-centered, visually appealing, and functional interfaces.
                    I also have solid experience in responsive web design, ensuring that the websites I build look
                    and perform flawlessly across all devices — from smartphones to desktop screens.
                </p>
                <div className="mt-8 flex flex-col md:flex-row  items-center justify-center gap-4    ">
                    <div className="hidden md:flex flex-grow  border-t-2 border-dashed border-slate-400"></div>
                    <button
                        className="w-full md:w-auto mt-8 md:mt-0 flex items-center justify-center gap-2 border rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-blue-500 hover:border-transparent transition duration-200">
                        <NavLink to="/projects" className="font-medium">See all projects</NavLink>
                        <FaArrowRight/>
                    </button>
                </div>
            </section>

            {/*session Experience*/}
            <section className="py-2 mx-5">
                <h2 className="text-3xl font-bold text-left ">Experience</h2>
                <div className=" mt-5 flex flex-col  gap-5">
                   <div>
                       <p className="text-2xl font-bold">Freelance Web Designer</p>
                       <p>Tourak corporation., 2018 - 2023</p>
                       <div className=" border-l-2 border-dashed border-slate-400 m-2 h-10 "></div>
                   </div>
                    <div>
                       <p className="text-2xl font-bold">Chargé de Projet</p>
                       <p>Chargé de Projet</p>
                       <div className=" border-l-2 border-dashed border-slate-400 m-2  h-10"></div>
                   </div>
                    <div>
                       <p className="text-2xl font-bold">Technicien en Informatique</p>
                       <p>Univers binaire, 2017 - 2018</p>
                       <div className=" border-r-2 border-dashed border-slate-400 "></div>
                   </div>
                </div>
                <div className="flex-grow border-t-2 border-dashed border-slate-400 ml-2 mt-8 "></div>

            </section>


            <section className="mb-10 mt-16 mx-5">
                <NavLink to="/contact" className="text-3xl md:text-8xl">Do you have a project?</NavLink>
            </section>

        </main>
    )
}

export default About
