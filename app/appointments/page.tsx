"use client";

import { useState, useEffect } from "react";

interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  doctor: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    // Fetch appointments from the backend (replace with actual API call)
    const fetchAppointments = async () => {
      const response = await fetch("/api/appointments");
      const data = await response.json();
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Patient Name</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Doctor</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border border-gray-300 px-4 py-2">{appointment.patientName}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.date}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.time}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.doctor}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}