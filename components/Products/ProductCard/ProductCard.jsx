import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../utilities/theme';
import { themeContract, productContract, profileContract } from '../../../contracts';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductCardOverlayBackground from './ProductCardOverlayBackground';
import ProductCardOverlayContent from './ProductCardOverlayContent';
import ProductCardBadge from './ProductCardBadge';
import Pill from '../../Shared/Pill';
import buyBlue from '../../../static/images/buy-blue.svg';
import buyWhite from '../../../static/images/buy-white.svg';

class ProductCard extends Component {
    static propTypes = {
        theme: themeContract,
        product: productContract,
        profile: profileContract,
        onClick: PropTypes.func.isRequired
    };

    getImageSources() {
        return [{ size: 100, src: this.props.product.img.url }, { size: 1920, src: this.props.product.img.hdUrl }];
    }

    getBadge() {
        if (this.props.product.cost <= this.props.profile.points) {
            return <img className="redeemable-item-image" alt={'Redeemable item'} src={buyBlue} />;
        }

        return (
            <Pill>
                <span className="non-redeemable-item-message">
                    You neeed {this.props.product.cost.toLocaleString()}
                </span>
                <img alt={'Not enough points'} src={coin} />
            </Pill>
        );
    }

    render() {
        const { spaces, font, color, getRemValue } = this.props.theme;
        const padding = spaces[1];

        return (
            <article onClick={this.props.onClick}>
                <style jsx>{`
                    article {
                        padding-top: ${getRemValue(padding / 2)};
                        padding-right: ${getRemValue(padding)};
                        padding-bottom: ${getRemValue(padding)};
                        padding-left: ${getRemValue(padding)};
                        background-color: ${color.white};
                        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
                        overflow: hidden;
                        transition: all 0.25s ease-out;
                        position: relative;
                    }

                    article:hover {
                        margin-top: -${getRemValue(padding / 2)};
                        margin-bottom: ${getRemValue(padding / 2)};
                        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.12), 10px 10px 25px rgba(0, 0, 0, 0.32);
                        cursor: pointer;
                    }

                    article :global(.product-image) {
                        border-bottom: 1px solid ${color.grays[2]};
                    }

                    article :global(.product-details) {
                        padding-top: ${getRemValue(padding)};
                    }

                    article :global(.product-card-badge .non-redeemable-item-message) {
                        font-size: ${font.getSize(font.sizes[0])};
                    }

                    article :global(.product-card-badge .redeemable-item-image) {
                        width: ${getRemValue(1.6)};
                    }

                    article:hover :global(.product-card-badge .redeemable-item-image) {
                        width: ${getRemValue(1.9)};
                        content: url(${buyWhite});
                    }

                    article:hover :global(.product-card-overlay-background) {
                        opacity: 0.86;
                    }

                    article:hover :global(.product-card-overlay-content) {
                        opacity: 1;
                    }
                `}</style>

                <ProductCardOverlayBackground />
                <ProductCardOverlayContent cost={this.props.product.cost} onClick={this.props.onClick} />
                <ProductImage sources={this.getImageSources()} title={this.props.product.name} />
                <ProductDetails name={this.props.product.name} category={this.props.product.category} />
                <ProductCardBadge>{this.getBadge()}</ProductCardBadge>
            </article>
        );
    }
}

export default withTheme(ProductCard);
