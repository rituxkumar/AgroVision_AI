import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { WifiOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Offline | AgroVision AI',
};

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-full mb-6">
        <WifiOff className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">You are offline</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-8">
        It looks like you've lost your internet connection. Please check your network settings and try again.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors inline-block"
      >
        Retry Connection
      </Link>
    </div>
  );
}
