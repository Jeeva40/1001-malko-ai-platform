// Application entry point — initializes the Malko AI Platform frontend
document.addEventListener("DOMContentLoaded", () => {
    // Ensure chat.js has loaded and exposed its handler before proceeding
    if (typeof window.handleSend !== "function") {
        console.log("Malko AI initialization failed.");
        return;
    }

    // Focus the chat input so the user can start typing immediately
    const chatInput = document.getElementById("chat-input");
    if (chatInput) {
        chatInput.focus();
    }

    console.log("Malko AI initialized successfully.");
});
