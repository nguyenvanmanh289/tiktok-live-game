import { memo } from "react";
import "./CurrentCoin.scss";

function CurrentCoin({linkAvatar,name,coin}){

    linkAvatar="";
    name="manh";
    coin=500;

    return(
        <div id="wrap-currentcoin">
            <h1><span>XEM COIN HIỆN CÓ</span> bằng cách comment: <span style={{color:"blue"}}>coin </span> sẽ hiện trên top<br/></h1>
            <ul>
                <li>
                    <img src={linkAvatar} alt="avatar" />
                    <h2>{name}</h2>
                    <h3>{coin}</h3>
                </li>
                <li>
                    <img src={linkAvatar} alt="avatar" />
                    <h2>{name}</h2>
                    <h3>{coin}</h3>
                </li>
                <li>
                    <img src={linkAvatar} alt="avatar" />
                    <h2>{name}</h2>
                    <h3>{coin}</h3>
                </li>
                <li>
                    <img src={linkAvatar} alt="avatar" />
                    <h2>{name}</h2>
                    <h3>{coin}</h3>
                </li>
                <li>
                    <img src={linkAvatar} alt="avatar" />
                    <h2>{name}</h2>
                    <h3>{coin}</h3>
                </li>
                <li>
                    <img src={linkAvatar} alt="avatar" />
                    <h2>{name}</h2>
                    <h3>{coin}</h3>
                </li>
            </ul>
        </div>
    )
}

export default memo(CurrentCoin);