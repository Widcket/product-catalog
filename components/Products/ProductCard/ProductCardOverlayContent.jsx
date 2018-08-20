import React from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../utilities/theme';
import { themeContract } from '../../../contracts';
import coin from '../../../static/images/coin.svg';
import RoundedButton from '../../Shared/RoundedButton';

const ProductCardOverlayContent = props => {
    const { spaces, color, font, getEmValue, getRemValue } = props.theme;
    const coinSize = 0.95;

    return (
        <aside className="product-card-overlay-content">
            <style jsx>{`
                aside {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    color: ${color.white};
                    font-size: ${font.getSize(font.sizes[4])};
                    opacity: 0;
                }

                aside img {
                    width: ${getEmValue(coinSize)};
                    height: ${getEmValue(coinSize)};
                    margin-left: ${getEmValue(0.25)};
                    margin-bottom: -${getEmValue(0.2)};
                }

                aside :global(.product-card-overlay-cost) {
                    margin-bottom: ${getRemValue(spaces[0])};
                }
            `}</style>
            <div className="product-card-overlay-cost">
                <span>{props.cost.toLocaleString()}</span>
                <img alt={'Points'} src={coin} />
            </div>
            <RoundedButton
                label="Redeem now"
                width={'80%'}
                backgroundColor={color.white}
                fontColor={color.grays[0]}
                onClick={props.onClick}
            />
        </aside>
    );
};

ProductCardOverlayContent.propTypes = {
    theme: themeContract,
    cost: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default withTheme(ProductCardOverlayContent);
