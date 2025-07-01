import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-sm text-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-green-400">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to <strong>Swing Sage</strong>. This Privacy Policy explains how
        we collect, use, and protect your information when you use our services.
        Your trust means everything to us.
      </p>

      <h2 className="text-lg font-semibold text-green-300 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Videos you upload (for swing analysis and comparison)</li>
        <li>Profile details (name, email, preferences)</li>
        <li>Tips saved, drills completed, and progress tracked</li>
        <li>AI interactions and usage history</li>
        <li>Device and browser information (anonymous analytics only)</li>
      </ul>

      <h2 className="text-lg font-semibold text-green-300 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To personalise your coaching and drill suggestions</li>
        <li>To enable AI-powered feedback tailored to your swing history</li>
        <li>To improve Swing Sage over time using aggregated, anonymous data</li>
        <li>To securely store your videos via AWS cloud infrastructure</li>
        <li>To support your dashboard, progress tracking, and rewards</li>
      </ul>

      <h2 className="text-lg font-semibold text-green-300 mb-2">3. Who Has Access</h2>
      <p className="mb-4">
        Your data is private. No video, tip, or AI history is shared unless:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>You explicitly choose to share it</li>
        <li>We’re required by law to disclose something</li>
      </ul>

      <h2 className="text-lg font-semibold text-green-300 mb-2">4. Cookies</h2>
      <p className="mb-4">
        We may use cookies to improve user experience, such as remembering your settings. No creepy ad tracking here.
      </p>

      <h2 className="text-lg font-semibold text-green-300 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You can delete your account at any time</li>
        <li>You can request your data be removed or anonymised</li>
        <li>You can export your video and swing data anytime</li>
      </ul>

      <h2 className="text-lg font-semibold text-green-300 mb-2">6. Storage & Security</h2>
      <p className="mb-4">
        Videos and data are stored using encrypted AWS services. Your connection to Swing Sage is always encrypted.
      </p>

      <h2 className="text-lg font-semibold text-green-300 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy if the service evolves. We’ll always let you know before anything important changes.
      </p>

      <p className="mt-6 italic text-gray-400">
        Swing Sage is built with love, not surveillance.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
