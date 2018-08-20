import React from 'react';

import withTheme from '../../../utilities/theme';
import { themeContract, profileContract } from '../../../contracts';
import coin from '../../../static/images/coin.svg';
import Pill from '../../Shared/Pill';

const NavigationUserInfo = props => {
    const { color, getRemValue } = props.theme;
    const coinSize = 1.16;

    return (
        <div className="user-info">
            <style jsx>{`
                :global(.user-info) {
                    display: flex;
                    align-items: center;
                }

                span {
                    margin-right: ${getRemValue(1)};
                }

                img {
                    width: ${getRemValue(coinSize)};
                    height: ${getRemValue(coinSize)};
                    margin-left: ${getRemValue(0.25)};
                    margin-right: -${getRemValue(0.25)};
                    margin-bottom: -${getRemValue(0.18)};
                }
            `}</style>
            <span>{props.profile.name}</span>
            <Pill fontColor={color.grays[0]}>
                <span>{props.profile.points}</span>
                <img alt={'Points'} src={coin} />
            </Pill>
        </div>
    );
};

NavigationUserInfo.propTypes = {
    theme: themeContract,
    profile: profileContract
};

export default withTheme(NavigationUserInfo);
