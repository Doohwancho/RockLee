//style for spreadsheet image
import "./style.css";

//image files
import RockLeeImg from "/src/images/spreadsheets/RockLee2_transparent.gif";
import RockLeeImg2 from "/src/images/spreadsheets/RockLee3_transparent.png";
import SasukeImg from "/src/images/spreadsheets/sasuke.png";
// import RockLeeProfile0 from "/src/images/profile/ProfileRockLee0.png";
// import RockLeeProfile1 from "/src/images/profile/ProfileRockLee1.png";
// import RockLeeProfile2 from "/src/images/profile/ProfileRockLee2.png";
// import RockLeeProfile3 from "/src/images/profile/ProfileRockLee3.png";
// import RockLeeProfile4 from "/src/images/profile/ProfileRockLee4.png";
// import RockLeeProfile5 from "/src/images/profile/ProfileRockLee5.png";
// import RockLeeProfile6 from "/src/images/profile/ProfileRockLee6.png";
// import RockLeeProfile7 from "/src/images/profile/ProfileRockLee7.png";

//cytoscape.js
// import cytoscape from "cytoscape";
// import coseBilkent from "cytoscape-cose-bilkent"; //cose-bilkent layout
//data files for cyytoscape
// import csData from "./model/csData.js";


/***************************************************
 * 1. init
 */

/* config & state management */

var MYAPP = MYAPP || {};

function initializeContainer() {
  MYAPP.src = {};
  MYAPP.modal = {};
  MYAPP.cytoscape = {};
  MYAPP.cytoscape.cfg = {};
  MYAPP.error = {};
}

/* util functions */

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function (styles) {
  for (let k in styles) this.style[k] = styles[k];
  return this;
};

/* check validation */

function checkValidPage() {
  let urlParam = window.location.search;
  return urlParam !== "";
}

/* error handling */

function errorCheck() {
  for (const property in MYAPP.error) {
    if (MYAPP.error[property]) {
      console.log(`ERROR! [${property}]`);
      return true;
    }
  }
}

function getParent() {
  let parent = document.getElementsByClassName("mt-4")[1];
  MYAPP.src.parent = parent;
  MYAPP.error.parent_is_null_code_1000 = MYAPP.src.parent === undefined;
}

/***************************************************
 * 2. get src
 */

function getFormattedToday() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1; //0월부터 시작해서 +1
  let date = now.getDate();
  let today =
    year +
    "-" +
    (month > 9 ? month : "0" + month) +
    "-" +
    (date > 9 ? date : "0" + date);
  
  MYAPP.src.formattedToday = today;
}

/**
 * today's number of commit 을 observer로 얻어 그에 맞는 RockLee.gif를 렌더링 하는 함수
 * 기존에 페이지 로드가 끝난 시점에 commit number를 가져오는 방식에서, observer 방식으로 바뀜 
 * 2단계에 거쳐서 today's commit number을 구함
 * 1단계) today's commit number가 담긴 DOM의 id를 가지고 있는 DOM을 observer로 받음
 * 2단계) 1단계에서 찾은 id를 가지는 DOM을 observer로 받아서 today's commit number를 뽑아낸다. 
 */
function setupCommitNumberObserver() {
  let todaysCommitTagId;

  const commitNumberObserver = new MutationObserver((mutationsList, observer) => {
    const element = document.querySelector('[data-date="' + MYAPP.src.formattedToday + '"]');

    if (element) {
      todaysCommitTagId = element.getAttribute('aria-labelledby');
      observer.disconnect();
      
      if(todaysCommitTagId) {
        console.log("todaysCommitTagId:", todaysCommitTagId);
        specificElementObserver.observe(document, { childList: true, subtree: true });
      }
    }
  });

  const specificElementObserver = new MutationObserver((mutationsList, observer) => {
    const specificElement = document.getElementById(todaysCommitTagId);

    if (specificElement) {
      console.log("specificElement:", specificElement);
      let commitNumber = specificElement.textContent.split(" ")[0];
      commitNumber = commitNumber === 'No' ? 0 : parseInt(commitNumber, 10);

      MYAPP.src.commitNumber = commitNumber > 7 ? 7 : commitNumber;    
      console.log("my commit number:", MYAPP.src.commitNumber);

      observer.disconnect();

      injectLee();
      // changeProfileToLee();
      fetchGeohotCommits();  //내 록리 캐릭터 만든 이후 라이벌의 캐릭터 추가하면 좋은점은, 페이지 로드 도중 div 없으면 에러날 수 있는 확률 방지 및, 내 록리캐릭터가 안떴는데 라이벌 캐릭터만 뜨는 사고 방지 가능 
    }
  });

  commitNumberObserver.observe(document, { childList: true, subtree: true });
}

function fetchGeohotCommits() {
  chrome.runtime.sendMessage({action: "fetchGeohotCommits"}, response => {
    if (response.error) {
      console.error('Error fetching geohot commits:', response.error);
    } else {
      console.log("Geohot's commit number:", response.commits);
      const geohotCommitNumber = response.commits > 7 ? 7 : response.commits;
      console.log("Geohot's commit number:", geohotCommitNumber);
      injectGeohotzCharacter(geohotCommitNumber);
    }
  });
}


/***************************************************
 * 3. Rock Lee Image
 */

function injectLee() {
  //create RockLee gif DOM
  let rockLeeDiv = document.createElement("div");
  rockLeeDiv.className = `rocklee-level${MYAPP.src.commitNumber}`; //rocklee-level0 ~ 7 하면, style.css에서   @keyframes rocklee-level-3 { //... } 이 spread image를 .gif로 렌더링 해준다. 
  rockLeeDiv.style.position = "relative";
  rockLeeDiv.style.top = rockLeeDiv.style.left = MYAPP.src.commitNumber + "0%"; //more you commit, more RockLee move towards right

  //insert RockLee image DOM as first child of mt-4 DOM (right above git commit hitmap calendar)
  MYAPP.src.parent.insertBefore(rockLeeDiv, MYAPP.src.parent.firstChild); 
}

function injectGeohotzCharacter(commitNumber) {
  if (!MYAPP.src.parent) {
    console.error("Parent element not found");
    return;
  }

  let geohotDiv = document.createElement("div");
  geohotDiv.className = `sasuke-level${commitNumber}`;
  geohotDiv.style.position = "relative";
  geohotDiv.style.top = geohotDiv.style.left = commitNumber + "0%";
  
  let label = document.createElement("div");
  // label.textContent = "geohot's commits";
  label.style.textAlign = "center";
  label.style.fontSize = "12px";
  label.style.marginTop = "5px";

  let container = document.createElement("div");
  container.appendChild(geohotDiv);
  container.appendChild(label);

  if (MYAPP.src.parent.firstChild) {
    MYAPP.src.parent.insertBefore(container, MYAPP.src.parent.firstChild.nextSibling);
  } else {
    MYAPP.src.parent.appendChild(container);
  }
}

/***************************************************
 * 4. Modal
 */
/*
function insertButtonForModal() {
  //button for skillData
  let csBtn = document.createElement("button");
  csBtn.type = "button";
  csBtn.className = "btn btn-block";
  csBtn.innerHTML = "Skill Tree";

  //add buttons to parent node
  let parent = document.body.querySelector(".js-profile-editable-edit-button");
  parent.insertAdjacentElement("afterend", csBtn);

  MYAPP.modal.csBtn = csBtn;
}

function insertModal() {
  let modal = document.createElement("div");
  modal.className = "modal";

  let modalContent = document.createElement("div");
  modalContent.className = "modalContent";

  // let close = document.createElement("div");
  // close.className = 'close';
  // close.innerHTML = '&times;';

  // modalContent.appendChild(close);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);

  MYAPP.modal.modal = modal;
  MYAPP.modal.modalContent = modalContent;
  MYAPP.modal.close = close;
}

function cssForModal() {
  MYAPP.modal.modal.setStyle({
    display: "none",
    position: "fixed",
    "z-index": 1000,
    "padding-top": "50px",
    "padding-left": "50px",
    "padding-right": "50px",
    "padding-bottom": "50px",

    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    "background-color": "rgb(0,0,0)",
  });

  MYAPP.modal.modalContent.setStyle({
    "background-color": "#fefefe",
    border: "1px solid #888",
    width: "100%",
    height: "100%",
  });

  // MYAPP.modal.close.setStyle({
  //   'color': '#aaaaaa',
  //   'float': 'right',
  //   'padding-right': '10px',
  //   'font-size': '38px',
  //   'font-weight': 'bold',
  // })
}

function addEventListenerForModal() {
  MYAPP.modal.csBtn.onclick = function () {
    cytoscapeExecute(csData);
    MYAPP.modal.modal.style.display = "block";
    MYAPP.cytoscape.cy.resize();
    MYAPP.cytoscape.cy.fit();
  };

  // MYAPP.modal.close.onclick= function(){
  //   MYAPP.modal.modal.style.display = "none";
  // }

  window.onclick = function (event) {
    if (event.target == MYAPP.modal.modal) {
      MYAPP.modal.modal.style.display = "none";
    }
  };

  window.onclick = function (event) {
    if (event.target == MYAPP.modal.modal) {
      MYAPP.modal.modal.style.display = "none";
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      MYAPP.modal.modal.style.display = "none";
    }
  });
}
*/

/***************************************************
 * 5. Cytoscape.js
 */
/*
function insertDivForCytoscape() {
  let cy = document.createElement("div");
  cy.id = "cy";
  MYAPP.modal.modalContent.appendChild(cy);

  MYAPP.cytoscape.DOM = cy;
}

function cssForCytoscape() {
  MYAPP.cytoscape.DOM.setStyle({
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  });
}

function configCytoscape(data) {
  let config = MYAPP.cytoscape.cfg;

  //use Cose-Bilkent Layout
  cytoscape.use(coseBilkent);

  //rank를 활용하기 위해 data만 입력한 cytoscape 객체
  config.cy_for_rank = cytoscape({
    container: MYAPP.cytoscape.DOM, // container to render in
    elements: data,
  });

  //elements들의 rank. target이 많이 될 수록 rank가 올라감. 이걸 바탕으로 node.size()정함
  config.pageRank = config.cy_for_rank.elements().pageRank();

  //size of node & font
  config.nodeMaxSize = 50;
  config.nodeMinSize = 5;
  config.nodeActiveSize = 28;
  config.fontMaxSize = 8;
  config.fontMinSize = 5;
  config.fontActiveSize = 7;

  //size of edge & arrow
  config.edgeWidth = "2px";
  config.edgeActiveWidth = "4px";
  config.arrowScale = 0.8;
  config.arrowActiveScale = 1.2;

  //color
  config.dimColor = "#dfe4ea";
  config.edgeColor = "#ced6e0";
  config.nodeColor = "#57606f";
  config.nodeActiveColor = "#ffa502";

  config.successorColor = "#ff6348"; //ff6348
  config.predecessorsColor = "#3ecded"; //1e90ff
}

function initCytoscape(data) {
  let config = MYAPP.cytoscape.cfg;

  const cy = cytoscape({
    container: MYAPP.cytoscape.DOM, // container to render in

    elements: data,

    minZoom: 0.2,
    wheelSensitivity: 0.1,

    style: [
      // the stylesheet for the graph
      {
        selector: "node",
        style: {
          "background-color": "data(backgroundColor)",
          label: "data(label)", //json의 data.label이 보이게 만듬. data(id)하면 id가 보임
          width: function (ele) {
            //상위 node일 수록 더 크게
            return (
              config.nodeMaxSize * config.pageRank.rank("#" + ele.id()) +
              config.nodeMinSize
            );
          },
          height: function (ele) {
            return (
              config.nodeMaxSize * config.pageRank.rank("#" + ele.id()) +
              config.nodeMinSize
            );
          },
          "font-size": function (ele) {
            return (
              config.fontMaxSize * config.pageRank.rank("#" + ele.id()) +
              config.fontMinSize
            );
          },
          color: config.nodeColor,
        },
      },
      {
        selector: "edge",
        style: {
          width: config.edgeWidth,
          "curve-style": "bezier",
          "line-color": config.edgeColor,
          "target-arrow-color": config.edgeColor, //source-arrow-color로 바꾸기 가능. 화살표 방향 바꿀 때 사용
          "target-arrow-shape": "vee",
          "arrow-scale": config.arrowScale,
        },
      },
    ],

    //import한 cose-bilkent layout 설정
    layout: {
      name: "cose-bilkent",
      animate: false,
      gravityRangeCompound: 1.5,
      fit: true,
      tile: true,
    },
  });

  MYAPP.cytoscape.cy = cy;
}

function uiUxCytoscape() {
  MYAPP.cytoscape.cy.on("tap", function (e) {
    const url = e.target.data("url");
    if (url && url !== "") {
      window.open(url);
    }
  });

  MYAPP.cytoscape.cy.on("tapstart mouseover", "node", function (e) {
    let config = MYAPP.cytoscape.cfg;

    window.setDimStyle(MYAPP.cytoscape.cy, {
      "background-color": config.dimColor,
      "line-color": config.dimColor,
      "target-arrow-color": config.dimColor,
      color: config.dimColor,
    });

    window.setFocus(
      e.target,
      config.successorColor,
      config.predecessorsColor,
      config.edgeActiveWidth,
      config.arrowActiveScale
    );
  });

  MYAPP.cytoscape.cy.on("tapend mouseout", "node", function (e) {
    window.setResetFocus(e.cy);
  });
}

// mouse in/out highlight function 

function mouseInOutHighLightCytoscape() {
  let config = MYAPP.cytoscape.cfg;

  window.setDimStyle = function (target_cy, style) {
    target_cy.nodes().forEach(function (target) {
      target.style(style);
    });
    target_cy.edges().forEach(function (target) {
      target.style(style);
    });
  };

  window.setFocus = function (
    target_element,
    successorColor,
    predecessorsColor,
    edgeWidth,
    arrowScale
  ) {
    target_element.style("background-color", config.nodeActiveColor);
    target_element.style("color", config.nodeColor);
    target_element.successors().each(function (e) {
      // 상위  엣지와 노드
      if (e.isEdge()) {
        e.style("width", edgeWidth);
        e.style("arrow-scale", arrowScale);
      }
      e.style("color", config.nodeColor);
      e.style("background-color", successorColor);
      e.style("line-color", successorColor);
      e.style("target-arrow-color", successorColor);
      window.setOpacityElement(e, 0.5);
    });
    target_element.predecessors().each(function (e) {
      // 하위 엣지와 노드
      if (e.isEdge()) {
        e.style("width", edgeWidth);
        e.style("arrow-scale", arrowScale);
      }
      e.style("color", config.nodeColor);
      e.style("background-color", predecessorsColor);
      e.style("line-color", predecessorsColor);
      e.style("target-arrow-color", predecessorsColor);
      window.setOpacityElement(e, 0.5);
    });
    target_element.neighborhood().each(function (e) {
      // 이웃한 엣지와 노드
      window.setOpacityElement(e, 1);
    });

    target_element.style(
      "width",
      Math.max(parseFloat(target_element.style("width")), config.nodeActiveSize)
    );
    target_element.style(
      "height",
      Math.max(
        parseFloat(target_element.style("height")),
        config.nodeActiveSize
      )
    );
    target_element.style(
      "font-size",
      Math.max(
        parseFloat(target_element.style("font-size")),
        config.fontActiveSize
      )
    );
  };

  window.setOpacityElement = function (target_element, degree) {
    target_element.style("opacity", degree);
  };

  window.setResetFocus = function (target_cy) {
    target_cy.nodes().forEach(function (target) {
      target.style("background-color", target.data().backgroundColor);
      var rank = config.pageRank.rank(target);

      target.style("width", config.nodeMaxSize * rank + config.nodeMinSize);
      target.style("height", config.nodeMaxSize * rank + config.nodeMinSize);
      target.style("font-size", config.fontMaxSize * rank + config.fontMinSize);

      target.style("color", config.nodeColor);
      target.style("opacity", 1);
    });
    target_cy.edges().forEach(function (target) {
      target.style("line-color", config.edgeColor);
      target.style("target-arrow-color", config.edgeColor);
      target.style("width", config.edgeWidth);
      target.style("arrow-scale", config.arrowScale);
      target.style("opacity", 1);
    });
  };
}

//브라우저 크기에 따른 자동 크기 조정
function resizeCytoscape() {
  let resizeTimer;

  window.addEventListener("resize", function () {
    this.clearTimeout(resizeTimer);
    resizeTimer = this.setTimeout(function () {
      MYAPP.cytoscape.cy.fit();
    }, 200);
  });
}

function cytoscapeExecute(data) {
  configCytoscape(data);
  initCytoscape(data);
  uiUxCytoscape();
  mouseInOutHighLightCytoscape();
  resizeCytoscape();
}
*/

function main() {
  /*
    A. setup
  */
  //1. init
  if (checkValidPage()) return;
  initializeContainer();
  getParent();
  if (errorCheck()) return;

  /*
    B. crawl number of commits today and render RockLee.gif 
  */
  //2. get src
  getFormattedToday();
  setupCommitNumberObserver();

  /*
    C. graph-formed skill tree (disabled for now)
  */
  //4. modal for cytoscape skilltree
  // insertButtonForModal();
  // insertModal();
  // cssForModal();
  // addEventListenerForModal();

  //5. cytoscape.js init
  // insertDivForCytoscape();
  // cssForCytoscape();

  //6. cytoscape.js execute
  // cytoscapeExecute();
}

main();