// import React, { useState, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "../Images/logo.png";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50  bg-gradient-to-bl from-[#002F6C] to-[#1e7ce6] p-2 transition-all duration-300 `}
//     >
//       <div className="container mx-auto flex justify-between items-center px-6">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="h-12 w-auto" />

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 text-white font-semibold">
//           {[
//             {
//               title: "Our Schemes",
//               links: [
//                 "Fixed Deposit",
//                 "Recurring Deposit",
//                 "Monthly Income",
//                 "Daily Deposit",
//                 "Saving Account",
//               ],
//             },
//             {
//               title: "Loans",
//               links: [
//                 "Gold Loan",
//                 "Personal Loan",
//                 "Home Loan",
//                 "Vehicle Loan",
//                 "Business Loan",
//               ],
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => setDropdownOpen(index)}
//               onMouseLeave={() => setDropdownOpen(null)}
//             >
//               <button className="flex items-center gap-1 hover:text-orange-400 transition">
//                 {item.title} <ChevronDown size={16} />
//               </button>
//               {dropdownOpen === index && (
//                 <ul className="absolute left-0 mt-2 bg-white text-blue-900 shadow-md p-2 rounded-md w-48">
//                   {item.links.map((link, idx) => (
//                     <li key={idx}>
//                       <a href="#" className="block px-4 py-2 hover:bg-blue-100">
//                         {link}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//           {[
//             "Code of Conduct",
//             "Career",
//             "Privacy Policy",
//             "Legal",
//           ].map((link, index) => (
//             <a key={index} href="#" className="hover:text-orange-400 transition">
//               {link}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden block text-white bg-orange-500 p-2 rounded-lg"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <nav className="md:hidden absolute top-full left-0 w-full bg-white text-blue-900 shadow-md p-4 transition-all">
//           <ul className="space-y-3 text-center font-semibold">
//             {[
//               "Our Schemes",
//               "Loans",
//               "Code of Conduct",
//               "Career",
//               "Privacy Policy",
//               "Legal",
//             ].map((item, index) => (
//               <li key={index}>
//                 <a
//                   href="#"
//                   className="block py-2 hover:bg-orange-100 text-blue-900"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../Images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Track mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Our Schemes",
      links: [
        "Fixed Deposit",
        "Recurring Deposit",
        "Monthly Income",
        "Daily Deposit",
        "Saving Account",
      ],
    },
    {
      title: "Loans",
      links: [
        "Gold Loan",
        "Personal Loan",
        "Home Loan",
        "Vehicle Loan",
        "Business Loan",
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-bl from-[#002F6C] to-[#1e7ce6] p-2 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 hover:text-orange-400 transition">
                {item.title} <ChevronDown size={16} />
              </button>
              {dropdownOpen === index && (
                <ul className="absolute left-0 mt-2 bg-white text-blue-900 shadow-md p-2 rounded-md w-48">
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-orange-400 transition"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-white bg-orange-500 p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white text-blue-900 shadow-md p-4 transition-all">
          <ul className="space-y-3 text-center font-semibold">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)
                  }
                  className="w-full flex  justify-center items-center py-2 px-4 hover:bg-orange-200"
                >
                  {item.title}
                  {mobileDropdownOpen === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {mobileDropdownOpen === index && (
                  <ul className="bg-gray-100 rounded-md py-2">
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
              (link, index) => (
                <li key={index}>
                  <a href="#" className="block py-2 hover:bg-orange-200">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
