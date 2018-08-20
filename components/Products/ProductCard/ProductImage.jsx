import React from 'react';
import PropTypes from 'prop-types';
import PowerPicture from 'react-power-picture';

import defaultProduct from '../../../static/images/default-product.svg';

const ProductImage = props => {
    return (
        <PowerPicture sources={props.sources}>
            {(image, loading) => (
                <div className="product-image">
                    <style jsx>{`
                        img {
                            width: 100%;
                            object-fit: cover;
                        }
                    `}</style>
                    <img alt={props.title} src={loading ? defaultProduct : image} />
                </div>
            )}
        </PowerPicture>
    );
};

ProductImage.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            size: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired,
    title: PropTypes.string.isRequired
};

export default ProductImage;
