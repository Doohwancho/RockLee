/*
guide for backgroundColor of node

1. default: '#666' - gray
2. yet :'FF3333' - red
3. working on: '3333FF' - blue

*/

export default [
  /* Learn root */
  {
    data: {
      id: "Learn",
      url: "",
      label: "Learn",
      backgroundColor: "#666",
    },
  },

  //학
  {
    data: {
      id: "study",
      url: "",
      label: "학",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Learn<-study", source: "study", target: "Learn" },
  },

  {
    data: {
      id: "module",
      url: "",
      label: "Module",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "study<-module", source: "module", target: "study" },
  },

  {
    data: {
      id: "waterKnowing",
      url: "",
      label: "처음부터 끝까지 물 흐르듯 막힘없이",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "study<-waterKnowing",
      source: "waterKnowing",
      target: "study",
    },
  },

  //정리
  {
    data: {
      id: "memo",
      url: "",
      label: "Memo",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "study<-memo", source: "memo", target: "study" },
  },

  {
    data: {
      id: "index",
      url: "",
      label: "Index",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "memo<-index", source: "index", target: "memo" },
  },

  {
    data: {
      id: "story",
      url: "",
      label: "Story",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "memo<-story", source: "story", target: "memo" },
  },

  {
    data: {
      id: "seemmless",
      url: "",
      label: "Seemmless",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "story<-seemmless", source: "seemmless", target: "story" },
  },

  {
    data: {
      id: "emotion",
      url: "",
      label: "Emotion",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "story<-emotion", source: "emotion", target: "story" },
  },

  {
    data: {
      id: "deconstructAndReconstruct",
      url: "",
      label: "Deconstruct & Reconstruct",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "memo<-deconstructAndReconstruct",
      source: "deconstructAndReconstruct",
      target: "memo",
    },
  },

  //습
  {
    data: {
      id: "research",
      url: "",
      label: "습",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Learn<-research", source: "research", target: "Learn" },
  },

  //친숙화
  {
    data: {
      id: "familiarize",
      url: "",
      label: "Familiarize",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "research<-familiarize",
      source: "familiarize",
      target: "research",
    },
  },

  //능동적
  {
    data: {
      id: "proactive",
      url: "",
      label: "능동적",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "research<-proactive",
      source: "proactive",
      target: "research",
    },
  },
  {
    data: {
      id: "curiosity",
      url: "",
      label: "Curiosity Driven",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "proactive<-curiosity",
      source: "curiosity",
      target: "proactive",
    },
  },

  {
    data: {
      id: "experiment",
      url: "",
      label: "Experiment",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "proactive<-experiment",
      source: "experiment",
      target: "proactive",
    },
  },

  {
    data: {
      id: "hypothesisVerification",
      url: "",
      label: "Hypothesis & Verification",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "experiment<-hypothesisVerification",
      source: "hypothesisVerification",
      target: "experiment",
    },
  },

  {
    data: {
      id: "creation",
      url: "",
      label: "Creation",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "proactive<-creation",
      source: "creation",
      target: "proactive",
    },
  },

  {
    data: {
      id: "deduction",
      url: "",
      label: "Deduction",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "creation<-deduction",
      source: "deduction",
      target: "creation",
    },
  },

  //map
  {
    data: {
      id: "map",
      url: "",
      label: "Map",
      backgroundColor: "#666",
    },
  },
  // {
  //   data: { id: "Learn<-map", source: "map", target: "Learn" },
  // },

  {
    data: {
      id: "destination",
      url: "",
      label: "Destination",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "map<-destination", source: "destination", target: "map" },
  },

  {
    data: {
      id: "moonshot",
      url: "",
      label: "Moon Shot",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "destination<-moonshot",
      source: "moonshot",
      target: "destination",
    },
  },

  {
    data: {
      id: "imagine",
      url: "",
      label: "Imagine",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: {
      id: "destination<-imagine",
      source: "imagine",
      target: "destination",
    },
  },
  {
    data: {
      id: "Mentor",
      url: "",
      label: "Mentor",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "destination<-Mentor",
      source: "Mentor",
      target: "destination",
    },
  },

  {
    data: {
      id: "identity",
      url: "",
      label: "Identity",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "destination<-identity",
      source: "identity",
      target: "destination",
    },
  },

  {
    data: {
      id: "acknowledgement",
      url: "",
      label: "Acknowledgement",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "identity<-acknowledgement",
      source: "acknowledgement",
      target: "identity",
    },
  },

  {
    data: {
      id: "direction",
      url: "",
      label: "Direction",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "map<-direction", source: "direction", target: "map" },
  },

  {
    data: {
      id: "sketch",
      url: "",
      label: "Sketch: Quantity -> Quality",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "direction<-sketch", source: "sketch", target: "direction" },
  },

  {
    data: {
      id: "review",
      url: "",
      label: "복기",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "direction<-review", source: "review", target: "direction" },
  },

  {
    data: {
      id: "notice",
      url: "",
      label: "알아차림",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "review<-notice", source: "notice", target: "review" },
  },

  {
    data: {
      id: "feedback",
      url: "",
      label: "feedback on error",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "review<-feedback", source: "feedback", target: "review" },
  },

  {
    data: {
      id: "micro",
      url: "",
      label: "micro",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "feedback<-micro", source: "micro", target: "feedback" },
  },

  {
    data: {
      id: "frequent",
      url: "",
      label: "frequent",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "feedback<-frequent", source: "frequent", target: "feedback" },
  },

  {
    data: {
      id: "system",
      url: "",
      label: "System",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "review<-system", source: "system", target: "review" },
  },

  {
    data: {
      id: "simulation",
      url: "",
      label: "Simulation",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "system<-simulation", source: "simulation", target: "system" },
  },

  {
    data: {
      id: "onething",
      url: "",
      label: "Do One Thing At a Time",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "system<-onething", source: "onething", target: "system" },
  },

  {
    data: {
      id: "speed",
      url: "",
      label: "Speed",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "map<-speed", source: "speed", target: "map" },
  },

  {
    data: {
      id: "thank",
      url: "",
      label: "Thank God",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "speed<-thank", source: "thank", target: "speed" },
  },

  {
    data: {
      id: "lifeline",
      url: "",
      label: "Life Line",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "speed<-lifeline", source: "lifeline", target: "speed" },
  },

  {
    data: {
      id: "deadline",
      url: "",
      label: "절대 일을 미루지 않는다",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: { id: "lifeline<-deadline", source: "deadline", target: "lifeline" },
  },

  {
    data: {
      id: "thinkBigActSmall",
      url: "",
      label: "Think Big Act Small",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "speed<-thinkBigActSmall",
      source: "thinkBigActSmall",
      target: "speed",
    },
  },

  {
    data: {
      id: "justDoIt",
      url: "",
      label: "Just Do It",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: {
      id: "thinkBigActSmall<-justDoIt",
      source: "justDoIt",
      target: "thinkBigActSmall",
    },
  },

  {
    data: {
      id: "winFirstHour",
      url: "",
      label: "Win First Hour",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: {
      id: "thinkBigActSmall<-winFirstHour",
      source: "winFirstHour",
      target: "thinkBigActSmall",
    },
  },

  //최선
  {
    data: {
      id: "onesBest",
      url: "",
      label: "최선",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "thinkBigActSmall<-onesBest",
      source: "onesBest",
      target: "thinkBigActSmall",
    },
  },

  {
    data: {
      id: "limitPlusOne",
      url: "",
      label: "한계+1",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "onesBest<-limitPlusOne",
      source: "limitPlusOne",
      target: "onesBest",
    },
  },

  {
    data: {
      id: "deeplyMoved",
      url: "",
      label: "스스로를 감동시켜야 다른사람을 감동시킬 수 있다",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: {
      id: "onesBest<-deeplyMoved",
      source: "deeplyMoved",
      target: "onesBest",
    },
  },

  {
    data: {
      id: "onlyToday",
      url: "",
      label: "딱 오늘만 최선을 다하자",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: {
      id: "onesBest<-onlyToday",
      source: "onlyToday",
      target: "onesBest",
    },
  },
];
