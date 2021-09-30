/*
guide for backgroundColor of node

1. default: '#666' - gray
2. Project: 'FFFF12' - yellow
3. yet :'FF3333' - red
4. working on: '3333FF' - blue

*/

export default [
  /* computer science root */
  {
    data: {
      id: "CS",
      url: "",
      label: "Computer Science",
      backgroundColor: "#666",
    },
  },

  /* computer architecture root */
  {
    data: {
      id: "CA",
      url: "",
      label: "Computer Architecture",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "CS<-CA", source: "CA", target: "CS" },
  },

  {
    data: {
      id: "CODE",
      url: "",
      label: "CODE Petzold",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "CA<-CODE", source: "CODE", target: "CA" },
  },

  {
    data: {
      id: "physicsAndElectroEngineer",
      url: "",
      label: "Physics & Eletro Engineering",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "CA<-physicsAndElectroEngineer",
      source: "physicsAndElectroEngineer",
      target: "CA",
    },
  },

  {
    data: {
      id: "tetris",
      url: "",
      label: "From Nand To Tetris",
      backgroundColor: "#FFFF12",
    },
  },
  {
    data: { id: "CA<-tetris", source: "tetris", target: "CA" },
  },

  /* operating system root */
  {
    data: {
      id: "OS",
      url: "",
      label: "Operating System",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "CS<-OS", source: "OS", target: "CS" },
  },

  {
    data: {
      id: "docker",
      url: "",
      label: "Docker",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: { id: "OS<-docker", source: "docker", target: "OS" },
  },

  {
    data: {
      id: "kubernetes",
      url: "",
      label: "Kubernetes",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "docker<-kubernetes", source: "kubernetes", target: "docker" },
  },

  /* network root */
  {
    data: {
      id: "NW",
      url: "",
      label: "Network",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "CS<-NW", source: "NW", target: "CS" },
  },

  {
    data: {
      id: "centosServer",
      url: "",
      label: "Centos7 Server",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "NW<-centosServer", source: "centosServer", target: "NW" },
  },

  {
    data: {
      id: "networkbasics",
      url: "",
      label: "Network Basics",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "NW<-networkbasics", source: "networkbasics", target: "NW" },
  },

  {
    data: {
      id: "hooni",
      url: "",
      label: "Hooni's Sysco Networking",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "NW<-hooni", source: "hooni", target: "NW" },
  },

  {
    data: {
      id: "AWS",
      url: "",
      label: "AWS",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "NW<-AWS", source: "AWS", target: "NW" },
  },

  {
    data: {
      id: "websocket",
      url: "",
      label: "Web Socket",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "NW<-websocket", source: "websocket", target: "NW" },
  },

  /////////////////////////////////////////////////////////////////////////////////////////////////

  /* front end root */
  {
    data: {
      id: "FE",
      url: "",
      label: "Front End",
      backgroundColor: "#666",
    },
  },

  //html
  {
    data: {
      id: "HTML",
      url: "",
      label: "HTML",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "FE<-HTML", source: "HTML", target: "FE" },
  },

  {
    data: {
      id: "HTML5",
      url: "",
      label: "HTML5",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "HTML<-HTML5", source: "HTML5", target: "HTML" },
  },

  //css
  {
    data: {
      id: "CSS",
      url: "",
      label: "CSS",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "FE<-CSS", source: "CSS", target: "FE" },
  },

  {
    data: {
      id: "Flexbox",
      url: "",
      label: "Flexbox",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "CSS<-Flexbox", source: "Flexbox", target: "CSS" },
  },

  {
    data: {
      id: "Grid",
      url: "",
      label: "Grid",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "CSS<-Grid", source: "Grid", target: "CSS" },
  },

  //javascript
  {
    data: {
      id: "Javascript",
      url: "",
      label: "Javascript",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "FE<-Javascript", source: "Javascript", target: "FE" },
  },

  {
    data: {
      id: "react",
      url: "",
      label: "React",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "Javascript<-react", source: "react", target: "Javascript" },
  },

  {
    data: {
      id: "DOM",
      url: "",
      label: "DOM",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Javascript<-DOM", source: "DOM", target: "Javascript" },
  },

  {
    data: {
      id: "Json",
      url: "",
      label: "Json",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Javascript<-Json", source: "Json", target: "Javascript" },
  },

  {
    data: {
      id: "Ajax",
      url: "",
      label: "Ajax",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Javascript<-Ajax", source: "Ajax", target: "Javascript" },
  },

  //typescript
  {
    data: {
      id: "typescript",
      url: "",
      label: "Typescript",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "Javascript<-typescript",
      source: "typescript",
      target: "Javascript",
    },
  },

  {
    data: {
      id: "TSTL",
      url: "",
      label: "TSTL",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "typescript<-TSTL", source: "TSTL", target: "typescript" },
  },

  {
    data: {
      id: "webgl",
      url: "",
      label: "WebGL Game Engine",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "typescript<-webgl", source: "webgl", target: "typescript" },
  },

  {
    data: {
      id: "project",
      url: "",
      label: "project",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "Javascript<-project",
      source: "project",
      target: "Javascript",
    },
  },

  {
    data: {
      id: "growthMindCharacter",
      url: "",
      label: "Rock Lee",
      backgroundColor: "#FFFF12",
    },
  },
  {
    data: {
      id: "project<-growthMindCharacter",
      source: "growthMindCharacter",
      target: "project",
    },
  },

  {
    data: {
      id: "cytoscape",
      url: "",
      label: "cytoscape.js",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "growthMindCharacter<-cytoscape",
      source: "cytoscape",
      target: "growthMindCharacter",
    },
  },

  {
    data: {
      id: "NoDistraction",
      url: "",
      label: "No Distraction",
      backgroundColor: "#FFFF12",
    },
  },
  {
    data: {
      id: "project<-NoDistraction",
      source: "NoDistraction",
      target: "project",
    },
  },

  {
    data: {
      id: "ChromeExtension",
      url: "",
      label: "ChromeExtension",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "NoDistraction<-ChromeExtension",
      source: "ChromeExtension",
      target: "NoDistraction",
    },
  },
  {
    data: {
      id: "EsLint",
      url: "",
      label: "EsLint",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "NoDistraction<-EsLint",
      source: "EsLint",
      target: "NoDistraction",
    },
  },
  {
    data: {
      id: "Webpack",
      url: "",
      label: "Webpack",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "Javascript<-Webpack",
      source: "Webpack",
      target: "Javascript",
    },
  },

  {
    data: {
      id: "babel",
      url: "",
      label: "babel",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Webpack<-babel", source: "babel", target: "Webpack" },
  },

  /////////////////////////////////////////////////////////////////////////////////////////////////

  /* back end root */
  {
    data: {
      id: "BE",
      url: "",
      label: "Back End",
      backgroundColor: "#666",
    },
  },

  //node.js
  {
    data: {
      id: "node",
      url: "",
      label: "Node.js",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: { id: "BE<-node", source: "node", target: "BE" },
  },

  //java
  {
    data: {
      id: "cpp",
      url: "",
      label: "C++",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: { id: "BE<-cpp", source: "cpp", target: "BE" },
  },

  //java
  {
    data: {
      id: "Java",
      url: "",
      label: "Java",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "BE<-Java", source: "Java", target: "BE" },
  },

  {
    data: {
      id: "OOP",
      url: "",
      label: "OOP",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Java<-OOP", source: "OOP", target: "Java" },
  },

  {
    data: {
      id: "JSP-Servlet",
      url: "",
      label: "JSP-Servlet",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Java<-JSP-Servlet", source: "JSP-Servlet", target: "Java" },
  },

  {
    data: {
      id: "Tomcat",
      url: "",
      label: "Tomcat",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Java<-Tomcat", source: "Tomcat", target: "Java" },
  },

  //Spring
  {
    data: {
      id: "Spring",
      url: "",
      label: "Spring",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "Java<-Spring", source: "Spring", target: "Java" },
  },

  {
    data: {
      id: "BBS",
      url: "",
      label: "BBS",
      backgroundColor: "#FFFF12",
    },
  },
  {
    data: { id: "Spring<-BBS", source: "BBS", target: "Spring" },
  },

  {
    data: {
      id: "junit",
      url: "",
      label: "Junit",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: { id: "Spring<-junit", source: "junit", target: "Spring" },
  },

  {
    data: {
      id: "cicd",
      url: "",
      label: "CI/CD",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: { id: "Spring<-cicd", source: "cicd", target: "Spring" },
  },

  {
    data: {
      id: "log",
      url: "",
      label: "Logging & pipeline",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: { id: "Spring<-log", source: "log", target: "Spring" },
  },

  {
    data: {
      id: "springsecurity",
      url: "",
      label: "Spring Security",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: {
      id: "Spring<-springsecurity",
      source: "springsecurity",
      target: "Spring",
    },
  },

  //design pattern
  {
    data: {
      id: "DesignPattern",
      url: "",
      label: "Design Pattern",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "BE<-DesignPattern", source: "DesignPattern", target: "BE" },
  },

  {
    data: {
      id: "HeadFirst",
      url: "",
      label: "HeadFirst Design Pattern",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "DesignPattern<-HeadFirst",
      source: "HeadFirst",
      target: "DesignPattern",
    },
  },

  //git
  {
    data: {
      id: "Git",
      url: "",
      label: "Git",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "BE<-Git", source: "Git", target: "BE" },
  },

  {
    data: {
      id: "Regex",
      url: "",
      label: "Regex",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "BE<-Regex", source: "Regex", target: "BE" },
  },

  /////////////////////////////////////////////////////////////////////////////////////////////////

  /* database root */
  {
    data: {
      id: "DB",
      url: "",
      label: "Database",
      backgroundColor: "#666",
    },
  },

  //relational database
  {
    data: {
      id: "RDB",
      url: "",
      label: "Relational Database",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "DB<-RDB", source: "RDB", target: "DB" },
  },

  {
    data: {
      id: "designRDB",
      url: "",
      label: "design RDB",
      backgroundColor: "#3333FF",
    },
  },
  {
    data: { id: "RDB<-designRDB", source: "designRDB", target: "RDB" },
  },

  //persistent framework
  {
    data: {
      id: "PersistentFramework",
      url: "",
      label: "Persistent Framework",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "DB<-PersistentFramework",
      source: "PersistentFramework",
      target: "DB",
    },
  },

  {
    data: {
      id: "JDBC",
      url: "",
      label: "JDBC",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "PersistentFramework<-JDBC",
      source: "JDBC",
      target: "PersistentFramework",
    },
  },

  {
    data: {
      id: "Mybatis",
      url: "",
      label: "Mybatis",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "PersistentFramework<-Mybatis",
      source: "Mybatis",
      target: "PersistentFramework",
    },
  },

  {
    data: {
      id: "JPA",
      url: "",
      label: "JPA",
      backgroundColor: "#FF3333",
    },
  },
  {
    data: {
      id: "PersistentFramework<-JPA",
      source: "JPA",
      target: "PersistentFramework",
    },
  },

  /////////////////////////////////////////////////////////////////////////////////////////////////

  /* math root */
  {
    data: {
      id: "MATH",
      url: "",
      label: "Math",
      backgroundColor: "#666",
    },
  },

  {
    data: {
      id: "Datastructure",
      url: "",
      label: "Datastructure",
      backgroundColor: "#666",
    },
  },
  {
    data: {
      id: "MATH<-Datastructure",
      source: "Datastructure",
      target: "MATH",
    },
  },

  {
    data: {
      id: "Algorithm",
      url: "",
      label: "Algorithm",
      backgroundColor: "#666",
    },
  },
  {
    data: { id: "MATH<-Algorithm", source: "Algorithm", target: "MATH" },
  },
];
