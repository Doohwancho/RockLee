//경쟁자의 총 commit 갯수를 fetch하는 함수
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchGeohotCommits") {
      fetch(`https://api.github.com/users/geohot/events/public`)
      .then(response => response.json())
      .then(data => {
        const today = new Date().toISOString().split('T')[0];
        const todayCommits = data
          .filter(event => event.created_at.startsWith(today))
          .reduce((total, event) => {
            if (event.type === 'PushEvent' && event.payload && event.payload.commits) { //push일 땐, 내부에 commit 갯수만큼 갯수 추가한다.
              return total + event.payload.commits.length;
            }
            if (['CreateEvent', 'CommitCommentEvent'].includes(event.type)) { //push가 아닌 다른 event(ex. pull request 등..)은 개당 +1 추가한다.
              return total + 1;
            }
            return total;
          }, 0);

        sendResponse({ commits: todayCommits });
      })
      .catch(error => {
        console.error('Error fetching geohot commits:', error);
        sendResponse({ error: error.toString() });
      });
      return true;
    }
  });