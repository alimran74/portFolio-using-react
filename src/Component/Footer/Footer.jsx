import { Helmet } from "react-helmet";



const Footer = () => {
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
        <meta property="og:image" content="https://yourdomain.com/preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <footer data-aos="fade-up"
      className="relative z-10 max-w-7xl mx-auto px-8  
        bg-[#F9FAFB]/80 backdrop-blur-md border border-[#1F2937]/10 shadow-md
        flex flex-col items-center gap-4
        text-[#1F2937]"
    >
      {/* Logo */}
      <img
        src="https://i.ibb.co/qFmfJC6B/image-modified.png" 
        alt="Al Imran Logo"
        className="h-20 mt-2 w-auto "
      />

     
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-6xl font-extrabold tracking-wide text-[#2563EB]">
          Al Imran
        </h1>
        <p className="text-lg max-w-md text-center text-[#050d18]">
          Crafting clean & modern web experiences — let's build something great
          together.
        </p>
        <p className="animate-pulse italic">
          “Turning Ideas into Interfaces — One Line at a Time.”
        </p>
        <p className="text-lg text-gray-600 ">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
 </>
  );
};

export default Footer;
