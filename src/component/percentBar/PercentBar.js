import { memo } from "react";
import "./PercentBar.scss";

function PercentBar(){
    let a =10
    let b =70
    let c=5
    let d=10
    let e=3
    let f=2

    return (
        <div id="warp">
            <div id="title">Phân tích thống kê thời gian thực</div>

            <div className="warp-percent">
                <div className="percent" style={{height:`${a}%`}} id="huoup">{a}%</div>
                <div className="percent" style={{height:`${b}%`}} id="baup">{b}%</div>
                <div className="percent" style={{height:`${c}%`}} id="gap">{c}%</div>
                <div className="percent" style={{height:`${d}%`}} id="cap">{d}%</div>
                <div className="percent" style={{height:`${e}%`}} id="cuap">{e}%</div>
                <div className="percent" style={{height:`${f}%`}} id="tomp">{f}%</div>
            </div>

            <div id="warp-avatar">
                <div className="avatar" id="huou"></div>
                <div className="avatar" id="bau"></div>
                <div className="avatar" id="ga"></div>
                <div className="avatar" id="ca"></div>
                <div className="avatar" id="cua"></div>
                <div className="avatar" id="tom"></div>
            </div>
        </div>
    )
}

export default memo(PercentBar);