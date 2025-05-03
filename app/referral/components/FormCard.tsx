'use client';

interface Props {
  children: React.ReactNode;
}

export default function FormCard({ children }: Props) {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-lg shadow p-8">
      {children}
    </div>
  );
}