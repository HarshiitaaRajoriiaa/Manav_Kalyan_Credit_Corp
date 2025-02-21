import React from "react";
import fixed from "../Images/fixed.webp";
import Recurring from "../Images/Recurring.webp";
import Month from "../Images/Month.webp";
import Personal from "../Images/Personal.webp";

export default function Schemes() {
  const schemes = [
    {
      img: fixed,
      title: "Fixed Deposit",
      text: "A fixed deposit (FD) is a financial instrument provided by Indian banks which provides investors.....",
    },
    {
      img: Recurring,
      title: "Recurring Deposit",
      text: "A Recurring deposit (RD) is a financial instrument provided by Indian banks which help people..",
    },
    {
      img: Month,
      title: "Monthly Plan",
      text: "Monthly Income Plan is a traditional participating product, which provides deferred regular income..",
    },
    {
      img: Personal,
      title: "Personal Plan",
      text: "Get a step closer to fulfilling your dreams by availing our loan and meet your financial needs...",
    },
  ];

  return (
    <div
      className="bg-gradient-to-tr from-[#002F6C] to-[#1e7ce6] p-10 "
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="max-w-sm rounded-xl  shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-60 object-cover"
                src={scheme.img}
                alt={scheme.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {scheme.title}
                </h2>
                <p className="text-gray-600 mt-2">{scheme.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
