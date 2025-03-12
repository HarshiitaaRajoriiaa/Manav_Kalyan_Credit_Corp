import React from "react";

export default function Monthly() {
  return (
    <div className="max-w-4xl mx-auto mt-20 my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
        Monthly Income Scheme
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-orange-300 text-white">
            <th className="p-3 border">Time Period</th>
            <th className="p-3 border">Rate</th>
            <th className="p-3 border">Maturity Bonus</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border">
            <td className="p-3 border">3 Year</td>
            <td className="p-3 border">12%</td>
            <td className="p-3 border">0.50%</td>
          </tr>
          <tr className="text-center border">
            <td className="p-3 border">6 Year</td>
            <td className="p-3 border">12%</td>
            <td className="p-3 border">3%</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 text-gray-700">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Terms & Conditions:
        </h3>
        <ul className="list-disc list-inside">
          <li>Minimum MIS would be of Rs. 10,000/- and further in multiples of Rs. 10,000/-.</li>
          <li>No TDS Deducted on interest paid on Deposits.</li>
          <li>Special ROI is applicable only for Senior Citizens.</li>
        </ul>
      </div>
    </div>
  );
}
