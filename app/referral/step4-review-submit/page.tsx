"use client";

import React from 'react';
import { useReferral } from "../../../context/ReferralContext";
import ReviewSection from "../components/ReviewSection";
import { useRouter } from "next/navigation";
import Stepper from "../components/Stepper";
import FormHeader from "../components/FormHeader";
import FormCard from "../components/FormCard";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';


export default function ReviewSubmitStep() {
  const { formData, resetFormData } = useReferral();
  const router = useRouter();

  const handleSubmit = async () => {
    await fetch("/api/submit-referral", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    toast.success('Referral submitted successfully');
    resetFormData();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-100 p-6">
      <FormHeader title="Review & Submit" />

      <FormCard>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Stepper currentStep={4} />

          <div className="space-y-6 text-wk-navy text-sm">
            {/* Patient Details*/}
            <ReviewSection
              title="Patient Details"
              data={{
                name: formData.patient?.name,
                dob: formData.patient?.dob,
                contact: formData.patient?.contact,
              }}
            />

            {/* Referral Details*/}
            <ReviewSection
              title="Referral Details"
              data={{
                reason: formData.referral?.reason,
                specialty: formData.referral?.specialty,
              }}
            />

            {/* Additional Info */}
            <ReviewSection
              title="Additional Info"
              data={{
                comments: formData.additionalInfo?.comments,
                documents:
                  formData.additionalInfo?.documents?.[0]?.name ||
                  "No file uploaded",
              }}
            />
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={() => router.back()}
              className="px-5 py-2 bg-gray-300 text-wk-navy rounded hover:bg-gray-400"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-wk-indigo text-white rounded hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </motion.div>
      </FormCard>
    </div>
  );
}
