import React, { useEffect, useState } from "react";

const WebSocketExample: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("https://echo.websocket.org/");
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connected");
      ws.send("Hello from React!");
    };

    ws.onmessage = (event) => {
      console.log("📩 Message:", event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    ws.onerror = (err) => console.error("WebSocket error:", err);

    ws.onclose = () => console.log("WebSocket disconnected");

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send("New message from client... " + Math.random());
    }
  };

  return (
    <div>
       <h2 className="display-6">WebSocket Example</h2>
      <button onClick={sendMessage}>Send Message</button>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketExample;
