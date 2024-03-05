addEventListener('keydown', event => {
  if(event.target !== document.body) return

  switch(event.key){
    case 'j': scrollBy(0, 50); break;
    case 'k': scrollBy(0, -50); break;
    /* case 'h': history.back(); break; // dont think I want these, so removed them
    case 'l': history.forward(); break;
    case 't': chrome.runtime.sendMessage('t'); break;
    case 'w': chrome.runtime.sendMessage('w'); break; */
  }
})
