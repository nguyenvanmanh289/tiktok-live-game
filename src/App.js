import { memo } from "react";
import "./App.scss";
import MainGame from "./component/game/MainGame";
function App() {
  return (
    <div className="container">
       <MainGame/>
    </div>
  );
}

export default memo(App);
