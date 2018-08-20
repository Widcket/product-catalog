import PropTypes from 'prop-types';

export const productContract = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        hdUrl: PropTypes.string.isRequired
    }).isRequired
});

export const productsContract = PropTypes.arrayOf(productContract).isRequired;
