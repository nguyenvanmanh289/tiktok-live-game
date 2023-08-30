import { memo } from "react";
import "./Gift.scss";

function Gift(){
    return(
        <div id="wrap-gift">
            <h1>1 coin of any tiktok gift = X10 coin in game</h1>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
            <div className="gift-item">x10</div>
        </div>
    )
}

export default memo(Gift);
