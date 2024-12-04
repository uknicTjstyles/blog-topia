// pages/403.tsx
import { FC } from 'react';
import Link from 'next/link';

const ForbiddenPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">403 - Forbidden</h1>
      <p className="mt-4">You do not have permission to access this page.</p>
      <Link href="/" className="mt-6 text-blue-500">Go to Home</Link>
    </div>
  );
};

export default ForbiddenPage;
