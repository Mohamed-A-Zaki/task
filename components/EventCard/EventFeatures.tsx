interface EventFeaturesProps {
  features: string[];
}

export function EventFeatures({ features }: EventFeaturesProps) {
  return (
    <div className="flex flex-col gap-0.5">
      {features.map((feature, index) => (
        <div key={index} className="font-[400] text-[8px] text-[#7E7E7E]">
          ✅ {feature}
        </div>
      ))}
    </div>
  );
}
