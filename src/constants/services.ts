export interface ServiceCard {
  name: string;
  price: string;
  description?: string;
  tooltip?: string;
}

export const SERVICES: ServiceCard[] = [
  {
    name: "Terapia indywidualna",
    price: "200 zł",
  },
  {
    name: "Terapia dla par / rodzin",
    price: "250 zł",
  },
];

export const SERVICE_HEADER = "Cennik usług";
