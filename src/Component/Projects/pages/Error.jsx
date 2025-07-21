import { useState } from "react";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import rocketLaunch from "../../../assets/Rocket-launch.json";

const ErrorPage = () => {
  const [showRocket, setShowRocket] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowRocket(true);
    setTimeout(() => {
      navigate("/");
    }, 3000); // adjust based on animation length
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center overflow-hidden px-6 py-10">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-30%] left-[10%] w-[600px] h-[600px] bg-[#00ffea] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-[#00bfff] opacity-10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 border-[1px] border-cyan-500 rounded-full animate-spin-slow"></div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white opacity-30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 1}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Main Content */}
      <div className="z-10 text-center space-y-6 max-w-2xl">
        <div className="flex justify-center items-center">
          <img src="./logo.png" alt="Logo" className="w-80 mx-auto" />
        </div>

        <h1 className="text-8xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-glitch">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
          Lost in the Codeverse
        </h2>

        <p className="text-gray-300 max-w-md mx-auto text-lg">
          The page you are looking for vanished into a wormhole or doesn’t exist in this universe.
        </p>

        {!showRocket && (
          <button
            onClick={handleClick}
            className="inline-block px-6 py-3 mt-4 border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white rounded-full transition duration-300 hover:shadow-lg"
          >
            ⬅ Return to Earth
          </button>
        )}

        {showRocket && (
          <div className="flex justify-center items-center mt-4">
            <Lottie animationData={rocketLaunch} loop={false} className="w-48 h-48" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
