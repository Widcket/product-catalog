import PropTypes from 'prop-types';

import { productsContract } from './products';

const profileContract = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    redeemHistory: productsContract,
    createDate: PropTypes.string.isRequired
});

export default profileContract;
