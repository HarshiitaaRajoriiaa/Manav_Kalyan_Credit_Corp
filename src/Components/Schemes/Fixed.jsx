import React from "react";

export default function Fixed() {
  return (
    <div className="max-w-4xl mx-auto mt-20  my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
        Fixed Deposit Schemes
      </h2>
      
      <table className="w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-orange-300 text-white">
            <th className="p-3 border">Time Period</th>
            <th className="p-3 border">Rate</th>
            <th className="p-3 border">Maturity Bonus</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="p-3 border">1 Year</td>
            <td className="p-3 border">11%</td>
            <td className="p-3 border">-</td>
          </tr>
          <tr className="border">
            <td className="p-3 border">3 Year</td>
            <td className="p-3 border">12%</td>
            <td className="p-3 border">-</td>
          </tr>
          <tr className="border">
            <td className="p-3 border">5 Year</td>
            <td className="p-3 border">12.50%</td>
            <td className="p-3 border">-</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg text-gray-700">
        <h3 className="text-lg font-semibold">Terms & Conditions:</h3>
        <ul className="list-disc list-inside mt-2">
          <li>It is mandatory to be a member in the company.</li>
          <li>Minimum FD would be of Rs.10000 and further in multiples of Rs. 1000.</li>
          <li>Special ROI is applicable only for Senior Citizens.</li>
          <li>Interest calculation is yearly compound.</li>
        </ul>
      </div>
    </div>
  );
}
