"use client";

import React from "react";

const DonatePage = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 to-white"
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#1B4B36] text-white p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">حملة التبرعات الخيرية</h1>
            <p className="text-lg text-yellow-300">معاً لمستقبل أفضل</p>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Donation Amount */}
            <div className="bg-emerald-50 p-6 rounded-lg text-center mb-8">
              <h3 className="text-xl font-bold text-[#1B4B36] mb-2">
                قيمة التبرع
              </h3>
              <p className="text-4xl font-bold text-[#1B4B36]">1000 دج</p>
            </div>

            {/* Donation Button */}
            <button
              onClick={async () => {
                const res = await fetch("/api");
                const data = await res.json();
                window.location = data.data?.checkout_url;
              }}
              className="w-full bg-[#1B4B36] hover:bg-[#153828] text-yellow-300 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              تبرع الآن
            </button>

            {/* Trust Message */}
            <div className="text-center text-sm text-gray-600 mt-6">
              <p>جميع التبرعات آمنة ومضمونة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
