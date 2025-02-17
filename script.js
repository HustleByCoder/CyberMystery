document.addEventListener("DOMContentLoaded", function () {
    const commandInput = document.getElementById("commandInput");
    const outputDiv = document.getElementById("output");

    const commands = {
        "help": "Available commands: whoami, ping, nmap, clear",
        "whoami": "You are an ethical hacker exploring CyberMystery!",
        "ping": "Pinging 127.0.0.1...\nReply from 127.0.0.1: bytes=32 time<1ms TTL=64",
        "nmap": "Starting Nmap scan...\nDiscovered open ports: 22 (SSH), 80 (HTTP), 443 (HTTPS)",
        "clear": "clear"
    };

    function executeCommand() {
        const command = commandInput.value.trim().toLowerCase();
        commandInput.value = "";
        
        if (command === "clear") {
            outputDiv.innerHTML = "";
            return;
        }
        
        const response = commands[command] || `Command not found: ${command}`;
        appendOutput(response);
    }

    function appendOutput(text) {
        const pre = document.createElement("pre");
        pre.textContent = text;
        outputDiv.appendChild(pre);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    document.querySelector("button").addEventListener("click", executeCommand);
    commandInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            executeCommand();
        }
    });
});
