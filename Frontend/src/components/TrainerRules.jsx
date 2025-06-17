import React, { useState } from "react";

const RulePopup = ({ onAgree, onDecline }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4 text-center text-red-600">
          Trainer Rules & Regulations
        </h2>
        <ul className="text-sm text-gray-800 mb-4 list-disc list-inside space-y-2">
          <li>Must hold a valid training certificate.</li>
          <li>Respect client confidentiality at all times.</li>
          <li>Punctuality and discipline are mandatory.</li>
          <li>No sharing of client information outside the platform.</li>
        </ul>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="agree"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I have read and agree to the rules and regulations.
          </label>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onDecline}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Decline
          </button>
          <button
            onClick={onAgree}
            disabled={!isChecked}
            className={`px-4 py-2 rounded-lg text-white ${
              isChecked
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Agree & Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulePopup;
