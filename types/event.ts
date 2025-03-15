export interface EventDetails {
  title: string;
  subtitle: string;
  location: string;
  locationDetails: string;
  features: string[];
}

export interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
