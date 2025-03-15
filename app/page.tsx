import { EventCard } from "@/components/EventCard/EventCard";
import { eventDetails } from "@/constants/eventDetails";
import qrCode from "@/assets/qrcode.svg";
import Image from "next/image";
import line from "@/assets/Line.svg";
import { EventHeader } from "@/components/EventCard/EventHeader";
import { EventLocation } from "@/components/EventCard/EventLocation";
import { EventFeatures } from "@/components/EventCard/EventFeatures";
import { Timer } from "@/components/Timer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <EventCard>
      <div className="flex flex-col justify-between">
        <EventHeader
          title={eventDetails.title}
          subtitle={eventDetails.subtitle}
        />
        <EventLocation
          location={eventDetails.location}
          details={eventDetails.locationDetails}
        />
        <EventFeatures features={eventDetails.features} />
      </div>

      <Image src={line} alt="line" />

      <div className="flex-1 flex flex-col justify-between items-center">
        <Timer />
        <Image src={qrCode} alt="qrCode" />
        <Button className="bg-[#353535] text-[#F8F8F8] font-[500] text-[8px] h-[26px] cursor-pointer">
          احجز تذكرتك
        </Button>
      </div>
    </EventCard>
  );
}
