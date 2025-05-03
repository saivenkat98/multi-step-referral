"use client";

import { useForm } from "react-hook-form";
import { useReferral, AdditionalInfo } from "../../../context/ReferralContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import FormNavigation from "../components/FormNavigation";
import Stepper from "../components/Stepper";
import FormCard from "../components/FormCard";
import FormHeader from "../components/FormHeader";
import InputField from "../components/InputField";
import { motion } from "framer-motion";


export default function AdditionalInfoStep() {
  const { formData, updateFormData } = useReferral();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdditionalInfo>({
    defaultValues: formData.additionalInfo || {},
  });

  useEffect(() => {
    reset(formData.additionalInfo || {});
  }, [formData.additionalInfo, reset]);

  const onSubmit = (data: AdditionalInfo) => {
    updateFormData({ additionalInfo: data });
    router.push("/referral/step4-review-submit");
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      updateFormData({
        additionalInfo: {
          ...formData.additionalInfo,
          documents: e.target.files,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-100 p-6">
      <FormHeader title="Additional Information" />

      <FormCard>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Stepper currentStep={3} />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label>
                Upload Document
              </label>
              <input
                type="file"
                accept=".png,.jpg,.jpeg,.pdf,.doc"
                onChange={onFileChange}
                className="w-full"
              />
              
              {formData.additionalInfo?.documents?.[0]?.name && (
                <p className="text-sm mt-1 text-green-600">
                  ✅ File selected: {formData.additionalInfo?.documents?.[0]?.name}
                </p>
              )}
            </div>

            <InputField
              label="Additional Comments"
              type="textarea"
              register={register("comments")}
              error={errors.comments}
            />

            <FormNavigation />
          </form>
        </motion.div>
      </FormCard>
    </div>
  );
}
