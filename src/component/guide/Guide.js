import { memo } from "react";
import "./Guide.scss";

function Guide(){
    return(
        <div id="wrap-guide">
            <h1>HƯỚNG DẪN CHƠI GAME</h1>
            <h4>===================<br/>Để xem số coin hiện có:</h4>
               <p> comment: <span>coin</span> mặc định có 300coin</p> 
            <h2>===================<br/>Để đặt cược vào 1 ô: </h2>
                <p>comment: <span>huou 200</span> hoặc <span>ga 150</span> 
                 để cược cho hươu 200coin hoặc gà 150coin, các con khác tương tự</p>
            <h3>===================<br/>Để cược nhiều ô,comment 1 chuỗi:</h3>
                <p>vd  <span>huou 150 ga 200</span></p>
        </div>
    )
}

export default memo(Guide);