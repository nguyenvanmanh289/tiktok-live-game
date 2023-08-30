import { memo } from "react";
import "./TopPlayer.scss";

function TopPlayer({linkAvatar,name,coin}){
    linkAvatar="";
    name="manh";
    coin=500;
    return(
        <div id="wrap-topplayer">
            <h1>TOP NGƯỜI CHƠI XUẤT SẮC</h1>
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

export default memo(TopPlayer);