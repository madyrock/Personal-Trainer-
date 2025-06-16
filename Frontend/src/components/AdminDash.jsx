import React, { useEffect, useState } from "react";

const AdminDashboardLocalWithDocs = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("trainers");
    if (stored) setTrainers(JSON.parse(stored));
  }, []);

  const verifyTrainer = (id) => {
    const updated = trainers.map((t) =>
      t.id === id ? { ...t, verified: true } : t
    );
    setTrainers(updated);
    localStorage.setItem("trainers", JSON.stringify(updated));
  };

  // Example: Delete a single trainer by id
const deleteTrainer = (id) => {
  const existingTrainers = JSON.parse(localStorage.getItem("trainers")) || [];
  const updatedTrainers = existingTrainers.filter((trainer) => trainer.id !== id);
  localStorage.setItem("trainers", JSON.stringify(updatedTrainers));
  setTrainers(updatedTrainers); // update state if using useState
};


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin - Trainer Applications (LocalStorage)
      </h1>
      {trainers.length === 0 ? (
        <p className="text-center">No trainer applications found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-lg shadow p-4"
            >
              <h2 className="text-xl font-semibold mb-2">{trainer.name}</h2>
              <p className="mb-1">
                <strong>Email:</strong> {trainer.email}
              </p>
              <p className="mb-1">
                <strong>Phone:</strong> {trainer.phone}
              </p>
              <p className="mb-1">
                <strong>City:</strong> {trainer.city}
              </p>
              <p className="mb-1">
                <strong>Certificate:</strong> {trainer.certificate}
              </p>
              
              
              

              {/* Show uploaded document */}
             

              {!trainer.verified ? (

                
                <button
                  onClick={( ) => verifyTrainer(trainer.id)}
                  className="mt-2 mr-5 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Approve
                </button>
              ) : (
                <p className="text-green-600 font-bold">Verified ✅</p>
              )}

              <button
                onClick={() => deleteTrainer(trainer.id)}
                className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboardLocalWithDocs;
