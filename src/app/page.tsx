"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "./ui/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Image
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
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8 sm:p-16">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
              Welcome to the{" "}
              <span className="text-blue-600">Support Portal</span>
            </h1>
            <p className="text-lg text-gray-700">
              Need help? Submit a support request and our team will assist you
              as soon as possible.
            </p>
            <button
              onClick={() => router.push("/request")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-lg transition duration-300 shadow-md"
            >
              + Create Support Request
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/Support.png"
              alt="Support illustration"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Optional Footer */}
        <footer className="absolute bottom-6 left-0 w-full text-center text-sm text-gray-500">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-blue-600"
          >
            Next.js
          </a>
        </footer>
      </div>
    </>
  );
}
