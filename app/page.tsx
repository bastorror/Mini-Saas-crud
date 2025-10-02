"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Clinic Appointment System
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            Schedule and manage your medical appointments with ease. Our system helps you keep track of your clinic visits efficiently.
          </p>
          <div className="space-x-4">
            <Link 
              href="/appointments"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Appointments
            </Link>
            <Link 
              href="/appointments/create"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Image 
                  src="/file.svg"
                  alt="Easy Booking"
                  width={48}
                  height={48}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Easy Booking</h3>
              <p className="text-gray-700 text-center">
                Schedule appointments quickly and easily with our intuitive booking system.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Image 
                  src="/globe.svg"
                  alt="24/7 Access"
                  width={48}
                  height={48}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">24/7 Access</h3>
              <p className="text-gray-700 text-center">
                Manage your appointments anytime, anywhere with our online platform.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <Image 
                  src="/window.svg"
                  alt="Reminders"
                  width={48}
                  height={48}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Smart Reminders</h3>
              <p className="text-gray-700 text-center">
                Never miss an appointment with our automated reminder system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
