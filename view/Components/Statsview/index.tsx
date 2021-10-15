import * as React from 'react';

export default function Index(props: any) {
    return(
        <div id="stats">
            <div id="profile-name">{props.user_data.profile.name}</div>
            <div id="hp">HP: {props.user_data.stats.hp}</div>
            <div id="lvl">LVL: {props.user_data.stats.lvl}</div>
        </div>
    );
}