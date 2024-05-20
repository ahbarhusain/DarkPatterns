// popup js (chrome extension) listen for inspect button (id = inspectBtn) and send message to content.js

document.getElementById('inspectBtn').addEventListener('click', () => {
    const depth = document.getElementById('depthInput').value;
    console.log('Popup.js sending SET_DEPTH message with depth: ', depth);
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { type: 'SET_DEPTH', depth: depth });
        console.log('Popup.js sent SET_DEPTH message with depth: ', depth);
    });
    return true;
});