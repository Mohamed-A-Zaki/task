interface EventCardProps {
  children: React.ReactNode;
}

export function EventCard({ children }: EventCardProps) {
  return (
    <div className="absolute top-1/2 left-1/2 flex h-[147px] w-[303px] -translate-x-1/2 -translate-y-1/2 gap-3 rounded-xl bg-white p-4">
      {children}
      <div className="absolute top-0 right-[166px] h-[27px] w-[27px] -translate-y-1/2 rounded-full bg-[#D9D9D9]"></div>
      <div className="absolute right-[166px] bottom-0 h-[27px] w-[27px] translate-y-1/2 rounded-full bg-[#D9D9D9]"></div>
    </div>
  );
}
