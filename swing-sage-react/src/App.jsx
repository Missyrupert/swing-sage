import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsAndConditions from "./pages/legal/TermsAndConditions";

const App = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Routes>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          {/* Placeholder for main app routes – replace with real components */}
          <Route
            path="/"
            element={
              <div className="p-6 text-center">
                <h1 className="text-3xl font-bold text-green-400 mb-4">
                  Welcome to Swing Sage
                </h1>
                <p className="text-gray-300">
                  This is the home page. The real magic begins once routing and AI are fully live.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
