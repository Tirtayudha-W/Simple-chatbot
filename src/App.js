import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { text: "Welcome👋", sender: "Parsley" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSend = () => {
    if (inputValue.trim() === "") return;

    // Check for specific keywords in the user's message and respond accordingly
    let response = "";
    const userInput = inputValue.toLowerCase();

    if (userInput.includes("hello")) {
      response = "Hello there!";
    } else if (userInput.includes("how are you?")) {
      response = "I'm fine, thank you! Can I help?";
    } else if (userInput.includes("how to study properly?")) {
      response = "Take time to study, read regularly, get enough rest, and evaluate how you study";
    } else if (userInput.includes("thank's for help")) {
      response = "thanks again, happy to help";
    } else {
      response = "Sorry, I'm not sure how to respond to that.";
    }

    // Add user message to the messages state with sender's name
    setMessages(prevMessages => [
      ...prevMessages,
      { text: inputValue, sender: "User" } // Change sender to "User"
    ]);

    // Pause before the bot responds
    setTimeout(() => {
      // Add bot response to the messages state with sender's name
      setMessages(prevMessages => [
        ...prevMessages,
        { text: response, sender: "Parsley" } // Change sender to "Parsley"
      ]);
    }, 1000); // Adjust the delay time (in milliseconds) as needed

    // Clear the input field
    setInputValue("");
  };

  return (
    <div className="App">
      <div className="chat-window">
        <h2>
          <div className="chat-title">Parsley Bot 🤖</div>
        </h2>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === "Parsley" ? "bot" : "user"}`}>
            <span className="sender">{message.sender}</span>: {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleMessageSend();
          }}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
