import { useState } from "react";

import CHAT from "./data/CHAT.json";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

type user = {
    id: number;
    name: string;
    avatar: string;
};

type message = {
    id: number;
    userId: number;
    content: string;
    timestamp: Date;
};

const users: user[] = CHAT;

const ChatInterface = () => {
    const [selectedUser, setSelectedUser] = useState<user | null>(null);
    const [messages, setMessages] = useState<message[]>([]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim() && selectedUser) {
            const newMsg: message = {
                id: messages.length + 1,
                userId: selectedUser.id,
                content: newMessage.trim(),
                timestamp: new Date(),
            };
            setMessages([...messages, newMsg]);
            setNewMessage("");
        }
    };

    return (
        <div className="flex h-[calc(100vh-4rem)]">
            <aside className="w-64 bg-white border-r">
                <ScrollArea className="h-full">
                    <div className="p-4">
                        <h2 className="mb-4 text-lg font-semibold">Users</h2>
                        {users.map((user) => (
                            <button
                                key={user.id}
                                onClick={() => setSelectedUser(user)}
                                className={`flex items-center w-full p-2 rounded mb-2 ${
                                    selectedUser?.id === user.id ? "bg-blue-100" : "hover:bg-gray-100"
                                }`}
                            >
                                <Avatar className="w-8 h-8 mr-2">
                                    <AvatarImage src={user.avatar} alt={user.name} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span>{user.name}</span>
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </aside>
            <div className="flex flex-col flex-1">
                {selectedUser ? (
                    <>
                        <header className="p-4 bg-white border-b">
                            <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
                        </header>
                        <ScrollArea className="flex-1 p-4">
                            {messages
                                .filter((msg) => msg.userId === selectedUser.id)
                                .map((msg) => (
                                    <div key={msg.id} className="mb-4">
                                        <p className="inline-block p-2 bg-blue-100 rounded-lg">{msg.content}</p>
                                        <span className="ml-2 text-xs text-gray-500">
                                            {msg.timestamp.toLocaleTimeString()}
                                        </span>
                                    </div>
                                ))}
                        </ScrollArea>
                        <div className="p-4 bg-white border-t">
                            <div className="flex">
                                <Input
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 mr-2"
                                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                />
                                <Button onClick={handleSendMessage}>Send</Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Select a user to start chatting</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatInterface;
