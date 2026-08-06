export const PRACTICE_CONFIG = {
  practitioner: "Joshua Jonassaint",
  licenses: {
    PA: "CW023073",
    ONTARIO: "RSW 842649",
  },
  protocol: {
    safetyNetDays: 7,
    maxSlotsPerJurisdiction: 7,
  },
  pricing: {
    intake: 225,
    individual: 150,
    relationship: 200,
    lockDate: "March 30, 2027",
  },
  portals: {
    therapyNotes: "https://www.therapyportal.com/p/queercharts/",
    headwayPA: "https://care.headway.co",
  },
  vocabularyRules: {
    id: "QP-ICP-LANG-001",
    retailOnly: ["Sibling"],
    editorialAlternatives: ["Double-Outsider", "queer neurodivergent people", "you"],
  }
} as const;
