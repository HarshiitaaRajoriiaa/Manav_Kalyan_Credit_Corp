import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatapp = () => {
  const phoneNumber = "87501 17878"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default Whatapp;
