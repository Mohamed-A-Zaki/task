interface EventHeaderProps {
  title: string;
  subtitle: string;
}

export function EventHeader({ title, subtitle }: EventHeaderProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="text-[12px] font-[500] text-[#676767]">{title}</h3>
      <p className="text-[8px] font-[400] text-[#7E7E7E]">{subtitle}</p>
    </div>
  );
}
