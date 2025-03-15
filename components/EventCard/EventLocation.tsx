interface EventLocationProps {
  location: string;
  details: string;
}

export function EventLocation({ location, details }: EventLocationProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="bg-[#EEEEEE] w-[24px] h-[24px] rounded-[4px]"></div>
      <div className="flex flex-col gap-0.5 text-[8px] text-[#7E7E7E]">
        <div className="font-[500]">{location}</div>
        <div className="font-[400]">{details}</div>
      </div>
    </div>
  );
}
