import React, { useState } from 'react';
import Navbar from './Navbar'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-600 min-h-screen py-12">
      <Navbar/>
      <div className="container mx-auto mt-10 px-4 md:px-0">
        <h2 className="text-3xl text-white font-semibold mb-4 text-center">Contact Jpc Agro Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-white font-semibold mb-2">Contact Details</h3>
            <p className="text-white">
              We'd love to hear from you. You can reach out to us using the following contact details:
            </p>
            <ul className="mt-4">
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 2a8 8 0 0 0-8 8c0 3.86 4.77 8.85 7.4 9.85a1 1 0 0 0 1.2 0C13.23 18.85 18 13.86 18 10a8 8 0 0 0-8-8zm0 14a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6z"
                  />
                  <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
                <span className='text-white'>123 Main Street, City</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 2a8 8 0 0 0-8 8c0 3.86 4.77 8.85 7.4 9.85a1 1 0 0 0 1.2 0C13.23 18.85 18 13.86 18 10a8 8 0 0 0-8-8zm0 14a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6z"
                  />
                  <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
                <span className='text-white'>Email: Okonkwojohnpaulchisom@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 2a8 8 0 0 0-8 8c0 3.86 4.77 8.85 7.4 9.85a1 1 0 0 0 1.2 0C13.23 18.85 18 13.86 18 10a8 8 0 0 0-8-8zm0 14a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6z"
                  />
                  <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
                <span className='text-white'>Phone: +234 81-6344-8378</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-2 max-w-md mx-auto">Contact Form</h3>
            <p className="text-white max-w-md mx-auto">
              Use the form below to send us a message. We'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-white text-black py-6 mt-12">
             <div className="container mx-auto text-center">
             <p>&copy; 2023 JPC Agro-Services. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
};

export default Contact;
