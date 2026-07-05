// DOM references
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const chatSendBtn = document.getElementById("chat-send-btn");

// Creates a message element and appends it to the chat container
function appendMessage(text, sender) {
    const messageEl = document.createElement("div");
    messageEl.className = sender === "user" ? "user-message" : "ai-message";
    messageEl.textContent = text;

    chatMessages.appendChild(messageEl);

    // Keep the latest message in view
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Reads the input, sends the message, and renders the AI reply
async function handleSend() {
    const message = chatInput.value.trim();

    if (!message) {
        return;
    }

    appendMessage(message, "user");
    chatInput.value = "";

    chatInput.disabled = true;
    chatSendBtn.disabled = true;

    try {
        const response = await window.sendMessage(message);
        appendMessage(response.reply, "ai");
    } catch (error) {
        appendMessage("Sorry, something went wrong.", "ai");
    } finally {
        chatInput.disabled = false;
        chatSendBtn.disabled = false;
        chatInput.focus();
    }
}

// Event listeners
chatSendBtn.addEventListener("click", handleSend);

chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSend();
    }
});

window.handleSend = handleSend;
