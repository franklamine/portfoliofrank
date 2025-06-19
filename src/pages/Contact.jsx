import React, {useEffect, useRef, useState} from 'react'
import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {useForm, ValidationError} from "@formspree/react";

function Contact() {
    const [state, handleSubmit] = useForm("xwpbnkkp")
    const formRef = useRef(null);
    const [showSuccess, setShowSuccess] = useState(false);

    // Reset les champs + afficher message de succès temporairement
    useEffect(() => {
        if (state.succeeded) {
            // Efface les champs
            if (formRef.current) {
                formRef.current.reset();
            }

            // Affiche le message
            setShowSuccess(true);

            // Le cache après 5 secondes
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);

            // Nettoyage du timer au cas où
            return () => clearTimeout(timer);
        }
    }, [state.succeeded])

    return (
        <main className="md:ml-[16.6667%] p-1 md:pr-0">
            <div className=" md:py-14 mx-5 ">
                <h1 className="text-4xl md:text-5xl font-bold  mb-14 mt-20 md:mt-0 ">Let's connect </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mx-8">
                <div className="order-2 md:order-1">
                    <p className="text-center text-2xl md:text-3xl mb-5">Send me a message</p>
                    {showSuccess && (
                        <div className="text-center text-green-500 md:text-3xl mb-5">
                            <p className=""> ✅ Your message has been sent!</p>
                            <span className="text-lg ">We appreciate your contact and will <br/> get back to you as soon as possible.</span>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col w-full gap-4">

                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <input type="text" placeholder="Name" name="name" className="md:w-1/2 rounded-xl bg-slate-800 p-4 border-2 border-transparent focus:border-blue-500 focus:outline-none"/>
                            <ValidationError prefix="Name" field="name" errors={state.errors} />

                            <input type="email" placeholder="Email" name="email" className="md:w-1/2 rounded-xl bg-slate-800 p-4 border-2 border-transparent focus:border-blue-500 focus:outline-none"/>
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <textarea placeholder="Write a message..." name="message" className="rounded-xl bg-slate-800 p-4 border-2 border-transparent focus:border-blue-500 focus:outline-none resize-none" rows="5"/>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                        <button type="submit" disabled={state.submitting} className="rounded-xl bg-blue-500 p-2 text-2xl">Send</button>

                    </form>
                </div>
                <div className="order-1 md:order-2 md:ml-14 ">
                    <p className="text-2xl md:text-3xl mb-4 md:mt-4">Contact</p>
                    <div className="flex flex-col gap-2">
                        <NavLink to="mailto:fokamfranklamine@gmail.com"  target="_blank" className="flex items-center gap-4 hover:text-blue-500 transition duration-500">
                            <FaEnvelope className=""/>
                            <p>fokamfranklamine@gmail.com</p>
                        </NavLink>
                        <NavLink to="tel:+14388330331" target="_blank" aria-label="Appeler le +1 438 833 0331" className="flex items-center gap-4 hover:text-blue-500 transition duration-500">
                            <FaPhone className=""/>
                            <p>Contact</p>
                        </NavLink>
                    </div>
                    <p className="text-2xl md:text-3xl mb-4 mt-4">Social Networks</p>
                    <div className="flex flex-col gap-2">
                        <NavLink to="https://github.com/franklamine/"  target="_blank" className="flex items-center gap-4 hover:text-blue-500 transition duration-500">
                            <FaGithub/>
                            <p>Github</p>
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/frank-lamine-202b72286/" target="_blank" className="flex items-center gap-4 hover:text-blue-500 transition duration-500">
                            <FaLinkedin className=""/>
                            <p>LinkedLn</p>
                        </NavLink>
                        <NavLink to="https://x.com/franklaminedev" target="_blank" className="flex items-center gap-4 hover:text-blue-500 transition duration-500">
                            <FaTwitter/>
                            <p>X (Twitter)</p>
                        </NavLink>
                        <NavLink to="" target="_blank" className="flex items-center gap-4 hover:text-blue-500 transition duration-500">
                            <FaInstagram className=""/>
                            <p>Instagram</p>
                        </NavLink>
                        <NavLink to="https://www.facebook.com/dieny.romeo" target="_blank" className="flex items-center gap-4 hover:text-blue-500 transition duration-500">
                            <FaFacebook className=""/>
                            <p>Facebook</p>
                        </NavLink>
                    </div>

                </div>
            </div>

        </main>
    )
}

export default Contact
