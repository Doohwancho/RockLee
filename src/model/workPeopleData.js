/*
guide for backgroundColor of node

1. default: '#666' - gray
2. yet :'FF3333' - red
3. working on: '3333FF' - blue

*/

export default [
  /* Work root */
  {
    data: {
      id: "Work",
      url: "",
      label: "Work",
      backgroundColor: "#666",
    },
  },

  //우선순위
  {
    data: {
      id: "priority",
      url: "",
      label: "Priority",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Work<-priority", source: "priority", target: "Work" },
  },

  {
    data: {
      id: "eatTheFrog",
      url: "",
      label: "Eat The Frog",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "priority<-eatTheFrog",
      source: "eatTheFrog",
      target: "priority",
    },
  },

  {
    data: {
      id: "rightAway",
      url: "",
      label: "Right Away",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "priority<-rightAway",
      source: "rightAway",
      target: "priority",
    },
  },

  {
    data: {
      id: "boundary",
      url: "",
      label: "exact boundary",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "priority<-boundary", source: "boundary", target: "priority" },
  },

  //simplify & Visualize
  {
    data: {
      id: "simplifyAndVisualize",
      url: "",
      label: "Simplify & Visualize",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "Work<-simplifyAndVisualize",
      source: "simplifyAndVisualize",
      target: "Work",
    },
  },

  //원칙
  {
    data: {
      id: "principle",
      url: "",
      label: "Principle",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "simplifyAndVisualize<-principle",
      source: "principle",
      target: "simplifyAndVisualize",
    },
  },

  {
    data: {
      id: "leanstart",
      url: "",
      label: "Lean Start-up",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "simplifyAndVisualize<-leanstart",
      source: "leanstart",
      target: "simplifyAndVisualize",
    },
  },

  //detail
  {
    data: {
      id: "detail",
      url: "",
      label: "Detail",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Work<-detail", source: "detail", target: "Work" },
  },

  //stress management
  {
    data: {
      id: "stressManagement",
      url: "",
      label: "Stress Management",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "Work<-stressManagement",
      source: "stressManagement",
      target: "Work",
    },
  },

  {
    data: {
      id: "fiveMin",
      url: "",
      label: "5 minute break",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "stressManagement<-fiveMin",
      source: "fiveMin",
      target: "stressManagement",
    },
  },

  /* Human root */
  {
    data: {
      id: "Human",
      url: "",
      label: "Human",
      backgroundColor: "#666",
    },
  },

  //water
  {
    data: {
      id: "water",
      url: "",
      label: "Water",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Human<-water", source: "water", target: "Human" },
  },

  {
    data: {
      id: "gong",
      url: "",
      label: "공",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "water<-gong", source: "gong", target: "water" },
  },

  {
    data: {
      id: "balance",
      url: "",
      label: "중용",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "water<-balance", source: "balance", target: "water" },
  },

  //역지사지
  {
    data: {
      id: "inHisShoe",
      url: "",
      label: "역지사지",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "Human<-inHisShoe", source: "inHisShoe", target: "Human" },
  },

  {
    data: {
      id: "summarize",
      url: "",
      label: "Summarization",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "inHisShoe<-summarize",
      source: "summarize",
      target: "inHisShoe",
    },
  },

  //객관적 평가
  {
    data: {
      id: "objectiveEvaluation",
      url: "",
      label: "객관적 평가",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "Human<-objectiveEvaluation",
      source: "objectiveEvaluation",
      target: "Human",
    },
  },

  {
    data: {
      id: "arrogance",
      url: "",
      label: "Arrogance",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "objectiveEvaluation<-arrogance",
      source: "arrogance",
      target: "objectiveEvaluation",
    },
  },

  {
    data: {
      id: "bows",
      url: "",
      label: "절",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "objectiveEvaluation<-bows",
      source: "bows",
      target: "objectiveEvaluation",
    },
  },
]