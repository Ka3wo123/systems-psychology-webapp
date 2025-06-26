export interface ServiceCard {
  name: string;
  price: string;
  duration?: string;
  description?: string;
  tooltip?: string;
}

export const SERVICES: ServiceCard[] = [
  {
    name: "Terapia indywidualna",
    price: "200 zł",
    duration: "50 minut",
  },
  {
    name: "Terapia dla par / rodzin",
    price: "250 zł",
    duration: "50 minut",
  },
];

export const SERVICE_HEADER = "Cennik usług";
