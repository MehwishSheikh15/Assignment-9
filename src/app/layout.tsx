import React from "react";
import Image from "next/image";
import "./globals.css";

export const metadata = {
    title: "Governor Sindh Website",
    description: "Official website for the Governor of Sindh.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900">
                {/* Navbar */}
                <nav className="bg-blue-900 text-white py-4">
                    <div className="container mx-auto flex justify-between items-center px-6">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Image
                                src="/image/logo.png" 
                                alt="Governor Sindh Logo"
                                width={50} 
                                height={50} 
                                className="rounded-md" 
                            />
                            <span className="text-1xl font-bold ml-3">Tuition Free Education Program on Latest Technologies</span>
                        </div>

                        {/* Navigation Links */}
                        <ul className="flex space-x-6">
                            <li>
                                <a href="/" className="hover:text-blue-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/apply" className="hover:text-blue-300">
                                    Apply
                                </a>
                            </li>
                            <li>
                                <a href="/job" className="hover:text-blue-300">
                                    Job
                                </a>
                            </li>
                            <li>
                                <a href="/result" className="hover:text-blue-300">
                                    Result
                                </a>
                            </li>
                            <li>
                                <a href="/courses" className="hover:text-blue-300">
                                    Courses
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6">{children}</main>

                {/* Footer */}
                <footer className="bg-blue-900 text-white py-4">
                    <div className="container mx-auto text-center">
                        <p>© 2024 Governor Sindh Website. All rights reserved.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
};

export default Layout;
