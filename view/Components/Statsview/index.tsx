import * as React from 'react';

export default function Index(props: any) {
    return(
        <div className="stats">
            <div id="profile-name">{props.user_data.profile.name}</div>
            <div className = "substats" id="hp"><i className="material-icons">favorite</i>HP: {(props.user_data.stats.hp).toPrecision(3)}</div>
            <div className = "substats" id="lvl"><i className="material-icons">star</i>LVL: {props.user_data.stats.lvl}</div>
        </div>
    );
}