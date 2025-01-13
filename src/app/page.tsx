import React from "react";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 to-white"
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header with CCP-style banner */}
          <div
            className="bg-[#1B4B36] text-white p-8 text-center relative overflow-hidden"
            style={{ backgroundColor: "#1B4B36" }}
          >
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-4">حملة التبرعات الخيرية</h1>
              <p className="text-lg text-yellow-300">معاً لمستقبل أفضل</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-full h-full bg-[url('/api/placeholder/800/400')] bg-cover bg-center"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            <div className="space-y-8">
              {/* Impact Section */}
              <div className="text-right">
                <h2 className="text-xl font-bold text-[#1B4B36] mb-4">
                  تأثير تبرعك
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <p className="font-bold text-[#1B4B36] mb-2">
                      الغذاء والماء
                    </p>
                    <p className="text-sm text-gray-600">
                      توفير الاحتياجات الأساسية للعائلات
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-lg">
                    <p className="font-bold text-[#1B4B36] mb-2">التعليم</p>
                    <p className="text-sm text-gray-600">دعم تعليم الأطفال</p>
                  </div>
                </div>
              </div>

              {/* Donation Amount */}
              <div className="bg-emerald-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-[#1B4B36] mb-2">
                  قيمة التبرع
                </h3>
                <p className="text-4xl font-bold text-[#1B4B36]">1000 دج</p>
                <p className="text-sm text-gray-600 mt-2">
                  رقم الحساب البريدي: CCP 123-456
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-[#1B4B36] hover:bg-[#153828] text-yellow-300 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                تبرع الآن
              </button>

              {/* Trust Indicators */}
              <div className="text-center text-sm text-gray-600 mt-6">
                <p className="mb-2">تحت إشراف بريد الجزائر</p>
                <p>جميع التبرعات آمنة ومضمونة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
