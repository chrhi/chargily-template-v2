import React from "react";
import { Check } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 to-white"
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Success Icon */}
          <div className="bg-[#1B4B36] text-white p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-3">
                <Check className="w-12 h-12 text-[#1B4B36]" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">شكراً لتبرعك!</h1>
            <p className="text-lg text-yellow-300">تم استلام تبرعك بنجاح</p>
          </div>

          {/* Thank You Message */}
          <div className="p-8 text-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700">
                نشكرك على مساهمتك في دعم قضيتنا
              </p>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <p className="text-4xl font-bold text-[#1B4B36] mb-2">
                  1000 دج
                </p>
                <p className="text-gray-600">قيمة التبرع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
