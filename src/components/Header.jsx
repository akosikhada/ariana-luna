import React from "react";

const Header = ({ herName, setHerName, handleNameSubmit }) => (
  <div className="text-center space-y-6 p-4">
    <img
      src="/ariana-luna.jpg"
      alt="My Dogs"
      className="w-full max-w-xs mx-auto h-auto rounded-lg"
    />
    <form onSubmit={handleNameSubmit} className="space-y-4">
      <input
        type="text"
        value={herName}
        onChange={(e) => setHerName(e.target.value)}
        placeholder="Ano gusto mo itawag ko sayo?"
        className="w-full px-6 py-2 rounded-lg text-black text-center placeholder:text-gray-500 font-medium"
      />
      <button
        type="submit"
        className="bg-purple-500 text-white font-semibold text-md px-6 py-2 rounded-lg shadow-lg hover:bg-purple-600 transition"
      >
        Enter
      </button>
    </form>
    <h1 className="text-2xl font-mono">Hint: HAHA</h1>
  </div>
);

export default Header;
