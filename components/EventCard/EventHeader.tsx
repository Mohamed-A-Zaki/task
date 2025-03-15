interface EventHeaderProps {
  title: string;
  subtitle: string;
}

export function EventHeader({ title, subtitle }: EventHeaderProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="font-[500] text-[12px] text-[#676767]">{title}</h3>
      <p className="font-[400] text-[8px] text-[#7E7E7E]">{subtitle}</p>
    </div>
  );
}
