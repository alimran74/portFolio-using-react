import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";


import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import Squares from "../Banner/Squares";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6a9ngjt",
        "template_1bx7y29",
        form.current,
        "dOtnpRTkIlAbhg051"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <>
    <Helmet>
        <title>Al Imran | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Al Imran, a passionate Full Stack Web Developer skilled in React, Node.js, MongoDB, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Al Imran, Web Developer, MERN stack, React portfolio, JavaScript developer"
        />
        <meta name="author" content="Al Imran" />
        <meta property="og:title" content="Al Imran | Full Stack Web Developer" />
        <meta property="og:description" content="Explore my projects and skills in React, Node.js, and more." />
        <meta property="og:image" content="https://al-imran-portfolio.netlify.app/" />
        <meta property="og:url" content="https://al-imran-portfolio.netlify.app/" />
        <meta name="twitter:card" content="https://i.ibb.co/FkQGbfY6/bannerP.png" />
      </Helmet>
    <section
    data-aos="fade-up"
      id="contact"
      className="py-16 md:py-18 px-4 sm:px-8 md:px-16 bg-[#F9FAFB] text-[#1F2937] px-7 mx-auto relative overflow-hidden"
    >
      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={50}
        borderColor="rgba(31, 41, 55, 0.08)"
        hoverFillColor="#E0F2FE"
        className="absolute inset-0 -z-10"
      />

      <div className="text-center mb-14">
        <div className="flex justify-center items-center gap-3 text-blue-500 text-4xl font-bold">
          <MdContactMail className="text-5xl" />
          <h2>Contact Me</h2>
        </div>
        <p className="text-gray-600 text-lg mt-2">
          Feel free to reach out through any method or drop a message below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[{
            icon: <FaMapMarkerAlt className="text-2xl text-blue-500" />,
            title: "Location",
            desc: "Mirpur-6, Dhaka 1216 Bangladesh"
          }, {
            icon: <FaClock className="text-2xl text-blue-500" />,
            title: "Available Time",
            desc: "Monday - Friday\n9:00am - 5:00pm"
          }, {
            icon: <FaPhone className="text-2xl text-blue-500" />,
            title: "Phone",
            desc: "+8801956495589"
          }, {
            icon: <FaEnvelope className="text-2xl text-blue-500" />,
            title: "Email",
            desc: "alimran.dev1@gmail.com"
          }].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/70 border border-gray-200 p-5 rounded-2xl shadow-md flex flex-col items-center card-container"
             
              transition={{ type: "spring", stiffness: 100 }}
              style={{ perspective: "1000px" }}
            >
              <div className="card w-full h-full flex flex-col items-center justify-center">
                {card.icon}
                <h3 className="text-lg font-semibold z-10">{card.title}</h3>
                <p className="text-gray-600 italic text-center z-10">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white/80 border border-gray-200 p-8 rounded-2xl shadow-lg    
    hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] hover:border-blue-500
    hover:scale-[1.02] transition duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
            Stay in Touch
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-[#1F2937] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-[#1F2937] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-[#1F2937] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-[#1F2937] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="custom-button w-full"
          >
             Send Message via email
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;
