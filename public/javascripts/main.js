// public/js/main.js
function clearMessagesAndForm() {
    // Clear the messages list
    const messagesClear = document.getElementById('messages-clear');
    while (messagesClear.firstChild) {
      messagesClear.removeChild(messagesClear.firstChild);
    }
    // Clear the form fields
    document.getElementById('messageUser').value = '';
    document.getElementById('messageText').value = '';
  }