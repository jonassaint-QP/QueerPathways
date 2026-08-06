export const FINANCIAL_ARCHITECTURE = {
  policy: "QP-POL-002",
  strictSegregation: true,
  
  CLINICAL_LANE: {
    domain: "queerpathways.org",
    ehr: "TherapyNotes",
    processor: "CardPointe / CardConnect",
    merchantId: "496649211885",
    settlement: "Found Bank Clinical Sub-Account",
    portalUrl: "https://www.therapyportal.com/p/queercharts/",
    pricingLockedUntil: "2027-03-30",
    rates: {
      intake: 225,
      individual: 150,
      relationship: 200,
    },
    capacityLimitPerRegion: 7, // PA & Ontario
  },

  RETAIL_LANE: {
    domain: "queerpathways.com",
    processor: "NMI via KURV / PaymentCloud",
    settlement: "Found Bank Retail Sub-Account",
    monthlyCapUSD: 30000,
    reserveHoldback: 0.05,
    architecture: "Zero-Database Flat-File React SPA",
  },

  BANNED_PROCESSORS: ["Stripe", "PayPal Personal", "Square"]
} as const;
