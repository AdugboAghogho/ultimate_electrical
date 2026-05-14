"use client";

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    // 1. Setup state to hold the form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    // 2. Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 3. Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Stop the page from reloading

        // Basic validation (optional but recommended)
        if (!formData.firstName || !formData.message) {
            alert("Please provide at least your first name and a message.");
            return;
        }

        // WhatsApp number (Remove the +, spaces, and dashes)
        const whatsappNumber = "2348035361989";

        // Format the message content
        const textMessage = `Hello, I have an inquiry from the website.\n\n*Name:* ${formData.firstName} ${formData.lastName}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;

        // Encode the text so it's safe for a URL (handles spaces, newlines, etc.)
        const encodedMessage = encodeURIComponent(textMessage);

        // Redirect to WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">

                {/* Contact Us Section with Split Layout */}
                <section className="max-w-[1200px] mx-auto p-10 md:p-16 lg:p-20 bg-white shadow-2xl rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Light graphic */}
                    <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 ">
                        <img src="/sth (1).jpg" alt="A sophisticated modern lamp" className="w-4/5 h-auto" />
                    </div>

                    {/* Contact Details & Form */}
                    <div className="w-full md:w-1/2 pt-8 md:pt-0">
                        <h2 className="text-3xl text-[#091291e7] md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight uppercase">
                            Bespoke <br /> Consultations
                        </h2>
                        <div className="space-y-6 text-gray-600 text-sm leading-relaxed mb-10 max-w-md">
                            <p>
                                Looking for a custom installation or need professional advice for your next project? Our designers are ready to help.
                            </p>
                            <div className="space-y-3 pt-3">
                                <p><strong>Store:</strong> Ikorodu, Lagos, Nigeria</p>
                                <p><strong>Phone:</strong> +234 803 536 1989</p>
                                <p><strong>Email:</strong> ultimateconglomerates@gmail.com</p>
                            </div>
                        </div>

                        {/* Link the onSubmit handler to the form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="  First Name"
                                    required
                                    className="w-full shadow-xl rounded-2xl border-b border-gray-300 py-3 px-4 bg-transparent text-sm focus:outline-none focus:border-orange-600 transition-colors placeholder:text-gray-400"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="  Last Name"
                                    className="w-full shadow-xl rounded-2xl border-b border-gray-300 py-3 px-4 bg-transparent text-sm focus:outline-none focus:border-orange-600 transition-colors placeholder:text-gray-400"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="  Email Address"
                                className="w-full shadow-xl rounded-2xl border-b border-gray-300 py-3 px-4 bg-transparent text-sm focus:outline-none focus:border-orange-600 transition-colors placeholder:text-gray-400"
                            />
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="  Describe your design vision or question..."
                                className="w-full shadow-xl rounded-2xl border-b border-gray-300 py-3 px-4 bg-transparent text-sm focus:outline-none focus:border-orange-600 transition-colors resize-none placeholder:text-gray-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-[#091291e7] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg hover:bg-orange-700 transition-colors mt-4"
                            >
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>

                </section>

                {/* Studio Spotlight Section */}
                <section className="py-20 md:py-32">
                    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="w-full md:w-1/2 pt-12 md:pt-0">
                            <h2 className="text-3xl text-[#091291e7] md:text-5xl font-bold mb-6 leading-[1.1] tracking-tight uppercase">
                                A Decade of <br /> Brilliant Craft
                            </h2>
                            <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                                <p>
                                    Since 2024, we have been obsessed with how light transforms a space. We believe that a lamp isn't just an object; it's the heartbeat of a room, setting the tone for every conversation and every quiet moment.
                                </p>
                                <p>
                                    Our design philosophy blends architectural integrity with atmospheric warmth. Each piece is hand-finished in our studio, ensuring that when you turn on a Lumina light, you aren't just seeing clearly—you're seeing excellence.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
                            <img src="/sth (1).jpg" alt="A sophisticated modern lamp" className="w-[60rem] h-[20rem] object-cover rounded-[2rem]" />
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default ContactPage;