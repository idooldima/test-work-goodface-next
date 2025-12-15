export type Product = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  pricing: {
    basePrice: number;
    bundleDiscounts: {
      min: number;
      max?: number;
      pricePerIp: number;
    }[];
  };
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Datacenter Proxies",
    description:
      "High-speed, reliable proxies sourced from data centers, ideal for managing high-volume, concurrent requests.",
    pricing: {
      basePrice: 3,
      bundleDiscounts: [
        { min: 10, max: 24, pricePerIp: 3.0 },
        { min: 25, max: 49, pricePerIp: 2.75 },
        { min: 50, max: 99, pricePerIp: 2.5 },
        { min: 100, pricePerIp: 2.25 },
      ],
    },
  },

  {
    id: "2",
    title: "Residential Proxies",
    description: "Real residential IPs with high trust score.",
    pricing: {
      basePrice: 5,
      bundleDiscounts: [
        { min: 10, max: 24, pricePerIp: 5 },
        { min: 25, max: 49, pricePerIp: 4.5 },
        { min: 50, pricePerIp: 4 },
      ],
    },
  },
];
