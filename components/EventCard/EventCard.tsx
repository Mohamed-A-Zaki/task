interface EventCardProps {
  children: React.ReactNode;
}

export function EventCard({ children }: EventCardProps) {
  return (
    <div className="p-4 flex gap-3 bg-white w-[303px] h-[147px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl">
      {children}
      <div className="bg-[#D9D9D9] w-[27px] h-[27px] rounded-full absolute top-0 -translate-y-1/2 right-[166px]"></div>
      <div className="bg-[#D9D9D9] w-[27px] h-[27px] rounded-full absolute bottom-0 right-[166px] translate-y-1/2"></div>
    </div>
  );
}
