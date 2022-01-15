import * as React from 'react';

export default function Index(props: any) {
    return(
        <div className="stats">
            {/* <div id="profile-name">{props.user_data.profile.name}</div> */}
            <div className = "substats" id="hp">HP: {numberWithCommas((props.user_data.stats.hp).toFixed(0))}</div>
            <div className = "substats" id="lvl">LEVEL: {props.user_data.stats.lvl}</div>
            <div className = "substats" id="gold">GOLD: {numberWithCommas(props.user_data.stats.gp.toFixed(2))}</div>
        </div>
    );
}
function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}