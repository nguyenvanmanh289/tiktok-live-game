import { memo } from "react";
import "./Cubik.scss";

function Cubik(){
    return(
        <div id="wrap-cubik">
            <div id="container-cubik">
                <div className="sideresult"></div>
                <div className="sideresult"></div>
                <div className="sideresult"></div>
                <div className="sideresult"></div>
                <div className="sideresult"></div>
                <div className="sideresult"></div>
            </div>
        </div>
    )
}

export default memo(Cubik);