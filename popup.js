function updatePopup() {
  chrome.storage.sync.get(
    {
      commitNumber: 0,
    },
    function (option) {

      let parent = document.getElementById("container-rockLee");
      let commitNumber = option.commitNumber;
      
      let commitNumberDOM = document.createElement("div");
      commitNumberDOM.innerHTML = `level ${commitNumber}`;

      let rockLeeDiv = document.createElement("div");
      rockLeeDiv.className = `rocklee-level${commitNumber > 7 ? 7 : commitNumber}`;
      rockLeeDiv.style.position = "relative";
      rockLeeDiv.style.left = option.commitNumber + "0%"; //more you commit, more RockLee move towards right
      
      parent.appendChild(commitNumberDOM);
      parent.appendChild(rockLeeDiv);
    }
  );
}
document.addEventListener("DOMContentLoaded", updatePopup, false);
