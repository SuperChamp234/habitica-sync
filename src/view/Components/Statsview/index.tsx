import * as React from 'react';
import { useTranslation, Trans, Translation } from 'react-i18next'

export default function Index(props: any) {
    let { t ,i18n} = useTranslation()
    return(
        <div className="stats">
            {/* <div id="profile-name">{props.user_data.profile.name}</div> */}
            {console.log(props)}
            <div className = "substats" id="hp">{t('HP')}: {(props.user_data.stats.hp).toPrecision(3)}</div>
            <div className = "substats" id="lvl">{t('LEVEL')}: {props.user_data.stats.lvl}</div>
            <div className = "substats" id="gold">{t('GOLD')}: {(props.user_data.stats.gp).toPrecision(3)}</div>
        </div>
    );
}