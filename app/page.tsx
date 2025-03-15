import line from "@/assets/Line.svg";
import qrCode from "@/assets/qrcode.svg";
import { EventCard } from "@/components/EventCard/EventCard";
import { EventFeatures } from "@/components/EventCard/EventFeatures";
import { EventHeader } from "@/components/EventCard/EventHeader";
import { EventLocation } from "@/components/EventCard/EventLocation";
import { Timer } from "@/components/EventCard/Timer";
import { Button } from "@/components/ui/button";
import { eventDetails } from "@/constants/eventDetails";
import Image from "next/image";

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

      <div className="flex flex-1 flex-col items-center justify-between">
        <Timer />
        <Image src={qrCode} alt="qrCode" />
        <Button className="h-[26px] cursor-pointer bg-[#353535] text-[8px] font-[500] text-[#F8F8F8]">
          احجز تذكرتك
        </Button>
      </div>
    </EventCard>
  );
}
