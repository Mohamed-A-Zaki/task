interface EventLocationProps {
  location: string;
  details: string;
}

export function EventLocation({ location, details }: EventLocationProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="h-[24px] w-[24px] rounded-[4px] bg-[#EEEEEE]"></div>
      <div className="flex flex-col gap-0.5 text-[8px] text-[#7E7E7E]">
        <div className="font-[500]">{location}</div>
        <div className="font-[400]">{details}</div>
      </div>
    </div>
  );
}
