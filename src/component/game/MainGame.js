import { memo } from "react"
import "./MainGame.scss"
import PercentBar from "../percentBar/PercentBar"
import TopPlayer from "../topPlayer/TopPlayer";
import CurrentCoin from "../currentCoin/CurrentCoin";
import Guide from "../guide/Guide";
import Gift from "../listGift/Gift";
import X3cubik from "../3diceBox/X3cubik";




function MainGame({huou,bau,ga,ca,cua,tom}){
    return(
        <div id="main-game"> 
            <div id="content">
                <h1>TRÒ CHƠI DÂN GIAN VIỆT NAM </h1>
                <div id="mark">
                    <X3cubik/>
                </div>
                
                <div className="opacity" style={{backgroundColor:`rgba(0,0,0,${huou})`}}></div>
                <div className="opacity" style={{backgroundColor:`rgba(0,0,0,${bau})`}}></div>
                <div className="opacity" style={{backgroundColor:`rgba(0,0,0,${ga})`}}></div>
                <div className="opacity" style={{backgroundColor:`rgba(0,0,0,${ca})`}}></div>
                <div className="opacity" style={{backgroundColor:`rgba(0,0,0,${cua})`}}></div>
                <div className="opacity" style={{backgroundColor:`rgba(0,0,0,${tom})`}}></div>
            </div>
            <div id="console-game">
                <div className="layout" id="guide">
                    <Guide/>
                </div>
                <div className="layout" id="top-player">
                    <TopPlayer/>
                </div>
                <div className="layout" id="current-coin">
                    <CurrentCoin/>
                </div>
                <div className="layout-bottom" id="analysis">
                    <PercentBar/>
                </div>
                <div className="layout-bottom" id="upcoin">
                    <Gift/>
                </div>
            </div>
        </div>
    )
}

export default memo(MainGame);