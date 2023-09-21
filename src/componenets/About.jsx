// AboutUs.js
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const About = () => {

  return (
    <section className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-600 py-12">
      <Navbar/>
      <div className="container mx-auto mt-10 px-4 md:px-0">
        <div className="max-w-screen-xl mx-auto text-center">
          <Fade left>
          <h2 className="text-3xl text-white font-semibold mb-4">About Jpc Agro-allied Services</h2>
          <p className="text-white mb-6">
            Jpc Agro-allied Services is your trusted partner in the world of agriculture. With a
            rich heritage spanning decades, we have been providing high-quality agricultural
            products to farmers and businesses.
          </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Fade bottom>
            <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-600 p-4 rounded-lg shadow-md " >
              <img
                src="https://images.pexels.com/photos/45869/pig-domestic-pig-suckle-piglet-45869.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Agricultural Product 1"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg text-white font-semibold">Pig Production</h3>
              <p className="text-white">
               Pigs are naturally omnivorous and will eat both plants and small animals; they will forage for leaves, grass, roots, fruits and flowers. Pigs make nests to sleep in and dig out mud wallows when they need to cool down. 
              </p>
              <br />
              <Link to="https://en.wikipedia.org/wiki/Pig" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Read More
              </Link>
            </div>
            </Fade>
            
            <Fade top>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Agricultural Product 2"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg font-semibold">Poultry Farming</h3>
              <p className="text-gray-600">
                Poultry farming is the form of animal husbandry which raises domesticated birds such as chickens, ducks, turkeys and geese to produce meat or eggs for food. Poultry – mostly chickens – are farmed in great numbers. More than 60 billion chickens are killed for consumption annually.
              </p>
              <br />
              <Link to="https://en.wikipedia.org/wiki/Poultry_farming#:~:text=Poultry%20farming%20is%20the%20form,are%20killed%20for%20consumption%20annually." className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Read More
              </Link>
            </div>
            </Fade>


           <Fade bottom>
            <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-600 p-4 rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/5953800/pexels-photo-5953800.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Agricultural Product 3"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg text-white font-semibold">Goat Farming</h3>
              <p className="text-white">
                Goats are highly valued for their meat, milk, and skin, making them a profitable business venture. According to statistics, Nigeria is one of the largest goat producing countries in Africa, with an estimated population of over 34 million goats. Goats are also the most traded livestock in the Nigerian livestock market.
              </p>
              <br />
              <Link to="https://en.wikipedia.org/wiki/Goat_farming" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Read More
              </Link>
            </div>
           </Fade>
            
           <Fade top>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/1656664/pexels-photo-1656664.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Agricultural Product 3"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg font-semibold">Cucumber and Tomato</h3>
              <p className="text-gray-600">
              Tomato and cucumber are popular and important crops for greenhouse production in Florida. Profitability from production of tomato and cucumber requires attention to the many details of crop culture. To cultivate cucumbers in the dry season, the use of irrigation systems is a must.
              </p>
              <br />
              <Link to="https://medwynsofanglesey.co.uk/maximising-your-crop-of-tomatoes-and-cucumbers/" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Read More
              </Link>
            </div>
            </Fade>

            <Fade bottom>
             <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-600 p-4 rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/1459331/pexels-photo-1459331.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Agricultural Product 3"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg text-white font-semibold">Corn Production</h3>
              <p className="text-white">
              In the production of various corn products for human consumption, there are two processes: a dry milling process and a wet milling process. In the dry process, corn is cleaned and then hammer milled to a medium ground corn meal.
              </p>
              <br />
              <Link to="https://www.britannica.com/plant/corn-plant" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Read More
              </Link>
            </div>
            </Fade>
            
           <Fade top>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image URL
                alt="Agricultural Product 3"
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-lg font-semibold">Rice Production</h3>
              <p className="text-gray-600">
              The various steps in rice cultivation include seed selection, seed-bed and land preparation, transplanting, weeding, fertilizing, pest management, harvesting, threshing, drying and marketing. In Nigeria, rice farming is common in the north. But the major rice-producing States are Kano, Gombe, Niger, Kebbi, Ebonyi, Anambra, Nasarawa, and Ogun.
              </p>
              <br />
              <Link to="https://www.britannica.com/plant/rice" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Read More
              </Link>
            </div>
            </Fade>
          </div>
        </div>
      </div>
      <footer className="bg-white text-black py-6 mt-12">
             <div className="container mx-auto text-center">
             <p>&copy; 2023 JPC Agro-Services. All rights reserved.</p>
            </div>
        </footer>
    </section>
  );
};

export default About;
