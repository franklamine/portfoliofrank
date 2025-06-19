import React from 'react'

function Contact() {
    return (
        <main className="md:ml-[16.6667%] p-1 md:pr-0">
        <div className=" md:py-14 mx-5 ">
            <h1 className="text-4xl md:text-5xl font-bold  mb-14 ">Let's connect </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mx-8">
            <div>
                <p className="text-center text-3xl mb-5">Send me a message</p>
                <form className="flex flex-col w-full gap-4">
                    <div className="flex flex-row w-full gap-4">
                        <input type="text" placeholder="Nom" className="w-1/2 rounded-xl bg-slate-800 p-4 border-2 border-transparent focus:border-blue-500 focus:outline-none " />
                        <input type="email" placeholder="Email" className="w-1/2 rounded-xl bg-slate-800 p-4 border-2 border-transparent focus:border-blue-500 focus:outline-none"/>
                    </div>
                    <textarea placeholder="Write a message..." className="rounded-xl bg-slate-800 p-4 border-2 border-transparent focus:border-blue-500 focus:outline-none" rows="5"/>
                    <button type="submit" className="rounded-xl bg-blue-500 p-2 text-2xl">Send</button>
                </form>
            </div>
            <div>
                <p>Contact</p>
                <div>
                    <p>fokamfranklamine@gmail.com</p>
                </div>
                <div>
                    <p>Contact</p>
                </div>
                <p>Social Network</p>
                <div>
                    <p>X (Twitter)</p>
                </div>
                <div>
                    <p>LinkedLn</p>
                </div>
                <div>
                    <p>Instagram</p>
                </div>
                <div>
                    <p>Facebook</p>
                </div>

            </div>
        </div>

    </main>
    )
}

export default Contact
