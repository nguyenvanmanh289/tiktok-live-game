import { memo } from "react";
import "./X3cubik.scss";
import Cubik from "./cubik/Cubik";

function X3cubik(){
    return(
        <div id="wrap-x3cubik">
            <div id="plate">
                <div className="cubik"><Cubik/></div>
                <div className="cubik"><Cubik/></div>
                <div className="cubik"><Cubik/></div>
            </div>
            <div id="hide">{60}</div>
        </div>
    )
}

export default memo(X3cubik);