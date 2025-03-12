import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../Images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

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
        { name: "Fixed Deposit", path: "/fixed-deposit" },
        { name: "Recurring Deposit", path: "/recurring-deposit" },
        { name: "Monthly Income", path: "/monthly-income" },
        { name: "Daily Deposit", path: "/daily-deposit" },
        { name: "Saving Account", path: "/saving-account" },
      ],
    },
    {
      title: "Loans",
      links: [
        { name: "Gold Loan", path: "/gold-loan" },
        { name: "Personal Loan", path: "/personal-loan" },
        { name: "Home Loan", path: "/home-loan" },
        { name: "Vehicle Loan", path: "/vehicle-loan" },
        { name: "Business Loan", path: "/business-loan" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-50 bg-gradient-to-bl from-[#002F6C] to-[#1e7ce6] p-2 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-orange-400 transition ${
                isActive ? "text-orange-400" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-orange-400 transition ${
                isActive ? "text-orange-400" : ""
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-orange-400 transition ${
                isActive ? "text-orange-400" : ""
              }`
            }
          >
            Contact Us
          </NavLink>

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
                      <NavLink
                        to={link.path}
                        className="block px-4 py-2 hover:bg-blue-100"
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
            (link, index) => (
              <NavLink
                key={index}
                to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                className={({ isActive }) =>
                  `hover:text-orange-400 transition ${
                    isActive ? "text-orange-400" : ""
                  }`
                }
              >
                {link}
              </NavLink>
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
            <li>
              <NavLink
                to="/"
                className="block py-2 hover:bg-orange-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 hover:bg-orange-200"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 hover:bg-orange-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>

            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === index ? null : index
                    )
                  }
                  className="w-full flex justify-center items-center py-2 px-4 hover:bg-orange-200"
                >
                  {item.title}
                  {mobileDropdownOpen === index ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
                {mobileDropdownOpen === index && (
                  <ul className="bg-gray-100 rounded-md py-2">
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={link.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
              (link, index) => (
                <li key={index}>
                  <NavLink
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="block py-2 hover:bg-orange-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

// import React, { useState, useEffect } from "react";
// import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
// import logo from "../Images/logo.png";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // Track mobile dropdown

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     {
//       title: "Our Schemes",
//       links: [
//         "Fixed Deposit",
//         "Recurring Deposit",
//         "Monthly Income",
//         "Daily Deposit",
//         "Saving Account",
//       ],
//     },
//     {
//       title: "Loans",
//       links: [
//         "Gold Loan",
//         "Personal Loan",
//         "Home Loan",
//         "Vehicle Loan",
//         "Business Loan",
//       ],
//     },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-screen z-50 bg-gradient-to-bl from-[#002F6C] to-[#1e7ce6] p-2 transition-all duration-300`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-6">
//         {/* Logo */}
//         <img src={logo} alt="Logo" className="h-12 w-auto" />

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 text-white font-semibold">
//           {menuItems.map((item, index) => (
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
//           {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
//             (link, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="hover:text-orange-400 transition"
//               >
//                 {link}
//               </a>
//             )
//           )}
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
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() =>
//                     setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)
//                   }
//                   className="w-full flex  justify-center items-center py-2 px-4 hover:bg-orange-200"
//                 >
//                   {item.title}
//                   {mobileDropdownOpen === index ? <ChevronUp /> : <ChevronDown />}
//                 </button>
//                 {mobileDropdownOpen === index && (
//                   <ul className="bg-gray-100 rounded-md py-2">
//                     {item.links.map((link, idx) => (
//                       <li key={idx}>
//                         <a href="#" className="block px-4 py-2 hover:bg-gray-200">
//                           {link}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//             {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
//               (link, index) => (
//                 <li key={index}>
//                   <a href="#" className="block py-2 hover:bg-orange-200">
//                     {link}
//                   </a>
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
// import logo from "../Images/logo.png";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     {
//       title: "Our Schemes",
//       links: [
//         { name: "Fixed Deposit", path: "/fixed-deposit" },
//         { name: "Recurring Deposit", path: "/recurring-deposit" },
//         { name: "Monthly Income", path: "/monthly-income" },
//         { name: "Daily Deposit", path: "/daily-deposit" },
//         { name: "Saving Account", path: "/saving-account" },
//       ],
//     },
//     {
//       title: "Loans",
//       links: [
//         { name: "Gold Loan", path: "/gold-loan" },
//         { name: "Personal Loan", path: "/personal-loan" },
//         { name: "Home Loan", path: "/home-loan" },
//         { name: "Vehicle Loan", path: "/vehicle-loan" },
//         { name: "Business Loan", path: "/business-loan" },
//       ],
//     },
//   ];

//   return (
//     <header
//       className={`fixed top-0  mb-20 left-0 w-screen z-50 bg-gradient-to-bl from-[#002F6C] to-[#1e7ce6] p-2 transition-all duration-300`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-6">
//         {/* Logo */}
//         <NavLink to="/">
//           <img src={logo} alt="Logo" className="h-12 w-auto" />
//         </NavLink>

//         {/* Desktop Navigation */}

//         <nav className="hidden md:flex space-x-6 text-white font-semibold">
//           {menuItems.map((item, index) => (
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
//                       <NavLink
//                         to={link.path}
//                         className="block px-4 py-2 hover:bg-blue-100"
//                       >
//                         {link.name}
//                       </NavLink>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//           {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
//             (link, index) => (
//               <NavLink
//                 key={index}
//                 to={`/${link.toLowerCase().replace(/ /g, "-")}`}
//                 className={({ isActive }) =>
//                   `hover:text-orange-400 transition ${
//                     isActive ? "text-orange-400" : ""
//                   }`
//                 }
//               >
//                 {link}
//               </NavLink>
//             )
//           )}
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
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() =>
//                     setMobileDropdownOpen(
//                       mobileDropdownOpen === index ? null : index
//                     )
//                   }
//                   className="w-full flex justify-center items-center py-2 px-4 hover:bg-orange-200"
//                 >
//                   {item.title}
//                   {mobileDropdownOpen === index ? (
//                     <ChevronUp />
//                   ) : (
//                     <ChevronDown />
//                   )}
//                 </button>
//                 {mobileDropdownOpen === index && (
//                   <ul className="bg-gray-100 rounded-md py-2">
//                     {item.links.map((link, idx) => (
//                       <li key={idx}>
//                         <NavLink
//                           to={link.path}
//                           className="block px-4 py-2 hover:bg-gray-200"
//                         >
//                           {link.name}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//             {["Code of Conduct", "Career", "Privacy Policy", "Legal"].map(
//               (link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={`/${link.toLowerCase().replace(/ /g, "-")}`}
//                     className="block py-2 hover:bg-orange-200"
//                   >
//                     {link}
//                   </NavLink>
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }
