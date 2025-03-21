//  DOM Manipulation – Changing Text Content 
import { useState } from "react";

export default function TextChanger() {
    const [text, setText] = useState("Click the button to change this text");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-xl font-semibold mb-4">{text}</div>
            <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                onClick={() => setText("Text has been changed!")}>
                Change Text
            </button>
        </div>
    );
}
