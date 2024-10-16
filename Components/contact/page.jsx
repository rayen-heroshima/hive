import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-[#E9E6E6] h-screen flex flex-row p-11 justify-around items-center">
            <div className="flex flex-col max-w-md">
                <h4 className="text-lg font-semibold text-[#FBA705]">Get in Touch</h4>
                <h1 className="text-3xl font-bold mb-4">
                    <strong>Contact us for a quote, help to join the team</strong>
                </h1>
                <h3 className="text-lg font-semibold mt-4">E-mail</h3>
                <h5 className="text-gray-600">rayen.hammami@esen.tn</h5>
                <h3 className="text-lg font-semibold mt-4">Address</h3>
                <h5 className="text-gray-600">Techno Pole, Esen</h5>
                <h3 className="text-lg font-semibold mt-4">Phone</h3>
                <h5 className="text-gray-600">23567766</h5>
            </div>

            <div className="h-full bg-[#FBA705] p-9 rounded-lg shadow-lg w-full max-w-md">
                <form action="" className="flex flex-col space-y-4">
                    <label className="font-semibold text-gray-700" htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name"  
                        placeholder="Name..." 
                        className="p-2 border-b-2 border-black rounded-md focus:outline-none focus:ring-2  bg-transparent"
                    />
                    
                    <label className="font-semibold text-gray-700" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="E-mail..." 
                        className="p-2 border-b-2 border-black rounded-md focus:outline-none focus:ring-2  bg-transparent"
                    />
                    
                    <label className="font-semibold text-gray-700" htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="5" 
                        placeholder="Write your message..."
                        className="p-2 border-b-2 border-black rounded-md focus:outline-none focus:ring-2  bg-transparent"
                    ></textarea>
                    
                    <button 
                        type="submit" 
                        className="mt-4 bg-black text-white font-semibold py-2 rounded-md hover:bg-black transition transform hover:scale-105 shadow-md"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
