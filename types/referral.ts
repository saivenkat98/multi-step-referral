// types/referral.ts (recommended to keep your types separate)
export interface PatientInfo {
    name: string;
    dob: string;
    contact: string;
  }
  
  export interface ReferralDetails {
    reason: string;
    specialty: string;
    notes?: string;
  }
  
  export interface AdditionalInfo {
    documents?: FileList;
    comments?: string;
  }
  
  export interface ReferralFormData {
    patient: PatientInfo;
    referral: ReferralDetails;
    additionalInfo: AdditionalInfo;
  }  