/* chrome.runtime.onMessage.addListener(cmd => { // literally dont want any of this
  switch(cmd){
    case 'w':
      browser.tabs.query({currentWindow: true, active: true})
        .then(tab => browser.tabs.remove(tab[0].id))
    break;
    case 't':
      browser.sessions.getRecentlyClosed({maxResults: 1})
        .then(s => browser.sessions.restore(s[0].sessionId))
    break;
  }
}) */
