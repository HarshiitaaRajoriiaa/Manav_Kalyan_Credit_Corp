import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Head() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center  text-black p-10">
      <div data-aos="fade-up" className="text-center max-w-3xl">
        {/* <h1 className="text-6xl  tracking-wide drop-shadow-lg">
          Welcome To 👋 <div className="text-sky-500 font-bold">Manav Kalyan Credit Cooperative Society Ltd.</div>
        </h1> */}
        <h1 className="text-6xl tracking-wide drop-shadow-lg">
          Welcome To{" "}
          <span className="inline-block [animation:waving-hand_1.5s_ease-in-out_infinite] origin-[70%_70%]">
            ✋
          </span>{" "}
          <div className="text-sky-500 font-bold">
            Manav Kalyan Credit Cooperative Society Ltd.
          </div>
        </h1>
        <p className="mt-4 text-lg text-gray-600 drop-shadow-md">
          Your reliable partner for secure loans and cooperative banking.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-orange-600 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
