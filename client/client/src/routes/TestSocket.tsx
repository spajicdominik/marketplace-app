import { Client } from "@stomp/stompjs";
import { useEffect } from "react";

export default function TestSocket() {
    
useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new WebSocket("ws://localhost:8080/ws"),
      reconnectDelay: 5000,
      debug: (str) => console.log(str),
    });

    client.onConnect = () => {
      console.log("Connected!");

      // SUBSCRIBE
      client.subscribe("/topic/chat", (msg) => {
        console.log("Received:", JSON.parse(msg.body));
      });

      // SEND
      client.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify({
          conversation_id: 2,
          sender_id: 1,
          message: "Real time!"
        }),
      });
    };

    client.activate();
  }, []);

    return (
        <div className="bg-white text-black flex flex-col items-center p-20">
            WebSocket Test Running - in console.
        </div>
    )
}