"use client";

import Image from "next/image";
import Navbar from "../ui/Navbar";
import RequestForm from "../ui/RequestForm";

export default function NewRequestPage() {
  return (
    <>
      <Navbar />

      {/* Background gradients */}
      {/* <Image
        src="/bg-gradient.svg"
        alt="Support illustration"
        width={500}
        height={500}
        className="pointer-events-none fixed -start-10 top-10 w-full max-w-3xl object-fill blur-3xl"
      />
      <Image
        src="/bg-gradient.svg"
        alt="Support illustration"
        width={500}
        height={500}
        className="pointer-events-none fixed bottom-0 end-[-50%] w-full max-w-3xl object-fill opacity-50 blur-3xl"
      /> */}

     {/* Main content */}
<main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-blue-50 to-white">
  {/* Title & Subtitle */}
  <div className="max-w-2xl mb-10 text-center">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
      Request Assistance
    </h1>
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
      Fill out the form below and our support team will get back to you shortly.
    </h2>
  </div>

  {/* Form card */}
  <div className="w-full max-w-2xl bg-white p-6 sm:p-10 rounded-xl shadow-lg">
    <RequestForm />
  </div>
</main>

    </>
  );
}
