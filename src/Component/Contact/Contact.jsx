import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import Squares from "../Banner/Squares";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Helmet } from "react-helmet";

const contactData = [
  {
    icon: <FaMapMarkerAlt className="text-2xl text-blue-500" />,
    title: "Location",
    desc: "Mirpur-6, Dhaka 1216 Bangladesh",
  },
  {
    icon: <FaClock className="text-2xl text-blue-500" />,
    title: "Available Time",
    desc: "Monday - Friday\n9:00am - 5:00pm",
  },
  {
    icon: <FaPhone className="text-2xl text-blue-500" />,
    title: "Phone",
    desc: "+8801956495589",
  },
  {
    icon: <FaEnvelope className="text-2xl text-blue-500" />,
    title: "Email",
    desc: "alimran.dev1@gmail.com",
  },
];

const timelineColors = ["#3B82F6", "#06B6D4", "#6366F1", "#0EA5E9"];

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
        <meta
          property="og:description"
          content="Explore my projects and skills in React, Node.js, and more."
        />
        <meta
          property="og:image"
          content="https://al-imran-portfolio.netlify.app/"
        />
        <meta
          property="og:url"
          content="https://al-imran-portfolio.netlify.app/"
        />
        <meta
          name="twitter:card"
          content="https://i.ibb.co/FkQGbfY6/bannerP.png"
        />
      </Helmet>

      <section
        id="contact"
        className="py-16 md:py-18 sm:px-8 md:px-16 bg-gradient-to-tr from-blue-200 via-white to-cyan-100 text-[#1F2937] px-7  relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
        

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
          {/* Left cards with timeline line and tilt */}
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-300 via-indigo-100 to-cyan-100 z-0 rounded-full" />

            <div className="relative z-10 flex flex-col gap-14 pl-16">
              {contactData.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * i, type: "spring" }}
                >
                  <Tilt
                    glareEnable={true}
                    glareColor="#93C5FD"
                    glareMaxOpacity={0.36}
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    transitionSpeed={2000}
                    className="bg-white/70 border border-gray-200 p-5 rounded-2xl shadow-md flex flex-col items-center cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center">
                      {card.icon}
                      <h3 className="text-lg font-semibold mt-2 text-[#2563EB]">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 italic text-center whitespace-pre-line mt-1">
                        {card.desc}
                      </p>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right contact form */}
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
        </div>
      </section>
    </>
  );
};

export default Contact;
