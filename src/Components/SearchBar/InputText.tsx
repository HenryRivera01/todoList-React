import { useState } from "react";

type InputTextProps = {
  onsubmit: (value: string) => void;
};

export const InputText = ({ onsubmit }: InputTextProps) => {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("buscaste: ", text);
    onsubmit(text);
    setText("");
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit} action="submit">
        <input
          className="search-input"
          placeholder="Tabs, TodoList..."
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="search-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </form>
    </div>
  );
};
