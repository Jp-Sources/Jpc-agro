import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Navbar from './Navbar';

const Home = () => {
    // Placeholder data for agricultural products
    const products = [
        {
            name: 'Green pepper',
            description: 'Green pepper and other varieties.',
            imageSrc: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            name: 'Dairy cow',
            description: 'Mainly for milk production.',
            imageSrc: 'https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            name: 'Carrot ',
            description: 'Carrot gotten from the farm',
            imageSrc: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        // Add more products as needed
    ];

    // Placeholder data for blog posts
    const blogPosts = [
        {
            title: 'Fish Farming',
            excerpt: 'Looking forward in starting up fish farming',
            date: 'August 10, 2023',
            author: 'John Doe',
        },
        {
            title: 'Snail Production',
            excerpt: 'Looking forward in starting up Snail production and hatching',
            date: 'August 15, 2023',
            author: 'Jane Smith',
        },
        {
            title: 'Rabbit Production',
            excerpt: 'Looking forward in starting up Rabbit production/breeding',
            date: 'August 20, 2023',
            author: 'Micheal lens',
        },
        // Add more blog posts as needed
    ];

    // Placeholder data for testimonials
    const testimonials = [
        {
            text: 'I am a customer of Agribegri from last two years. I purchased many products from here. It has very nice experience for me. More than that the sales executive Divya has helped a lot for me. Divya always provides new products available list for me, which helps me to purchase products. Thanks to Jpc Agro services',
            author: 'Nwodo Emeka',
        },
        {
            text: 'Thanking you for your Effective after sales process.I ordered Trap + Lure but I received Trap alone.Dixita helped me to get the remaining.This is my 1st experience with Jpc Agro services and I gonna continue my purchase with you guys.',
            author: 'Okoye Christopher',
        },
        {
            text: 'I appreciated your delivery service within the time that is the most important thing.And this site where farmers can buy easy and quality seeds and other agri related inputs .And also customer services related to any problems to buy or payment issues are also good.',
            author: 'Ogbodo Pamela',
        },
        // Add more testimonials as needed
    ];

       

    return (
        <div>
            <Navbar />
          <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-600 text-white py-16">
            <div className="container mx-auto text-center">
                <Fade bottom> 
                  <h1 className="text-4xl font-bold mb-4">Welcome to Jpc-Agro Allied Services</h1>
                <p className="text-lg mb-8">Discover amazing content and services.</p>
                </Fade>
                <Link
                    to="/about"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Get Started
                </Link>
            </div>
        </div>

        <div className="py-12 bg-gray-100">
            <div className="container mx-auto">
                {/* Agriculture Products Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Agricultural Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                                <img src={product.imageSrc} alt={product.name} className="w-full h-32 object-cover mb-2" />
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Blog Posts Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                <p className="text-gray-600">{post.excerpt}</p>
                                <div className="text-sm text-gray-500 mt-2">
                                    {post.date} by {post.author}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                                <p className="text-gray-600">{testimonial.text}</p>
                                <div className="text-sm text-gray-500 mt-2">- {testimonial.author}</div>
                            </div>
                        ))}
                    </div>
                </section>
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

export default Home;
