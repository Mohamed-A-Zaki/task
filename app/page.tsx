import qrCode from "@/assets/qrcode.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import line from "@/assets/Line.svg";
import { Timer } from "@/components/Timer";

export default function Home() {
  // shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)]
  return (
    <>
      <div className="p-4 flex gap-5 bg-white  w-[303px] h-[147px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-[500] text-[12px] text-[#676767]">
              تنظيف صحي يعني حياة أفضل
            </h3>
            <p className="font-[400] text-[8px] text-[#7E7E7E]">
              هذا النص هو مثال لنص يستبدل
            </p>
          </div>

          <div className="flex items-center gap-1">
            <div className="bg-[#EEEEEE] w-[24px] h-[24px] rounded-[4px]"></div>
            <div className="flex flex-col gap-0.5">
              <div className="font-[500] text-[8px] text-[#7E7E7E]">
                موقع الورشة
              </div>
              <div className="font-[400] text-[8px] text-[#7E7E7E]">
                يتم عمل الورشة عبر موقع الزوم
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="font-[400] text-[8px] text-[#7E7E7E]">
              ✅ كيفية عمل مزيل عرق منزلي{" "}
            </div>
            <div className="font-[400] text-[8px] text-[#7E7E7E]">
              ✅ وصفات طبيعية سهلة وفعّالة{" "}
            </div>
          </div>
        </div>

        <Image src={line} alt="line" />

        <div className="flex-1 flex flex-col justify-between items-center">
          <Timer />

          <div>
            <Image src={qrCode} alt="qrCode" />
          </div>

          <Button className="bg-[#353535] text-[#F8F8F8] font-[500] text-[8px] h-[26px] cursor-pointer">
            احجز تذكرتك
          </Button>
        </div>

        <div className="bg-[#D9D9D9] w-[27px] h-[27px] rounded-full absolute top-0 -translate-y-1/2 right-[175px]"></div>
        <div className="bg-[#D9D9D9] w-[27px] h-[27px] rounded-full absolute bottom-0 right-[175px] translate-y-1/2"></div>
      </div>
    </>
  );
}
