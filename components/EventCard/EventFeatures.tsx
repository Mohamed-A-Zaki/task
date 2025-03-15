interface EventFeaturesProps {
  features: string[];
}

export function EventFeatures({ features }: EventFeaturesProps) {
  return (
    <div className="flex flex-col gap-0.5">
      {features.map((feature, index) => (
        <div key={index} className="text-[8px] font-[400] text-[#7E7E7E]">
          ✅ {feature}
        </div>
      ))}
    </div>
  );
}
