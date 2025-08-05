// components/NewsTicker.tsx
"use client";

export default function CompanySlider() {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-2 z-50">
      <div className="whitespace-nowrap animate-marquee">
        <span className="mx-4">Next.js و Tailwind CSS!</span>
        <span className="mx-4">تحديثات جديدة على مشروعك قيد التنفيذ!</span>
        <span className="mx-4"> تابعنا لمزيد من الأخبار التقنية!</span>
      </div>
    </div>
  );
}
