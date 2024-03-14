import "./App.css";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800 overflow-hidden">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
