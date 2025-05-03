'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-100">
      {/* Header */}
      <header className="bg-wk-indigo text-white px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center">
          <h1 className="text-xl font-semibold">Patient Referral Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="grid gap-8 sm:grid-cols-2 mb-16">
          {/* Card 1: How to Proceed */}
          <div className="bg-white rounded-lg shadow-md p-6 text-left border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-wk-navy mb-2">How to Proceed</h3>
            <p className="text-sm text-gray-700">
              Fill in the patient details, provide referral specifics, attach any documents if needed, and review the summary before submitting.
            </p>
          </div>

          {/* Card 2: Why This Matters */}
          <div className="bg-white rounded-lg shadow-md p-6 text-left border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-wk-navy mb-2">Why This Matters</h3>
            <p className="text-sm text-gray-700">
              This tool simplifies the referral process, improves care coordination, and helps specialists receive accurate and timely information.
            </p>
          </div>
        </div>

        {/* Start Button */}
        <Link
          href="/referral/step1-patient-details"
          className="inline-block bg-wk-indigo hover:bg-indigo-800 text-white font-medium px-6 py-3 rounded shadow transition"
        >
          Start Referral
        </Link>
      </main>
    </div>
  );
}
