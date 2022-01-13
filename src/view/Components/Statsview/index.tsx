import * as React from 'react';

export default function Index(props: any) {
    return(
        <div className="stats">
            {/* <div id="profile-name">{props.user_data.profile.name}</div> */}
            <div className = "substats" id="hp">HP: {(props.user_data.stats.hp).toPrecision(3)}</div>
            <div className = "substats" id="lvl">LEVEL: {props.user_data.stats.lvl}</div>
            <div className = "substats" id="gold">GOLD: {(props.user_data.stats.gp).toPrecision(3)}</div>
        </div>
    );
}