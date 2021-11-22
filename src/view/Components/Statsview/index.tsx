import * as React from 'react';
import { useTranslation, Trans, Translation } from 'react-i18next'

export default function Index(props: any) {
    let { t ,i18n} = useTranslation()
    return(
        <div className="stats">
            {/* <div id="profile-name">{props.user_data.profile.name}</div> */}
            {console.log(props)}
            <div className = "substats" id="hp"><i className="material-icons">favorite</i>{t('HP')}: {(props.user_data.stats.hp).toPrecision(2)}</div>
            <div className = "substats" id="lvl"><i className="material-icons">star</i>{t('LEVEL')}: {props.user_data.stats.lvl}</div>
            <div className = "substats" id="gold"><i className="material-icons">credit_card</i>{t('GOLD')}: {(props.user_data.stats.gp).toPrecision(2)}</div>
        </div>
    );
}