export const PRACTICE_CONFIG = {
  practitioner: "Joshua Jonassaint",
  licenses: {
    PA: "CW023073",
    // ONTARIO removed 2026-09-16: the Ontario registration is closed and the
    // practice operates in Pennsylvania only. Do not reinstate this key for
    // public display; see the removal record for the disposition history.
  },
  protocol: {
    safetyNetDays: 7,
    maxActiveSlotsTotal: 7,
  },
  pricing: {
    intake: 225,
    individual: 150,
    relationship: 200,
    lockDate: "March 30, 2027",
  },
  portals: {
    therapyNotes: "https://www.therapyportal.com/p/queercharts/",
  },
  vocabularyRules: {
    id: "QP-ICP-LANG-001",
    retailOnly: ["Sibling"],
    editorialAlternatives: ["Double-Outsider", "queer neurodivergent people", "you"],
  },
} as const;
