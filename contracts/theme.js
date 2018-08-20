import PropTypes from 'prop-types';

const themeContract = PropTypes.shape({
    spaces: PropTypes.arrayOf(PropTypes.number).isRequired,
    color: PropTypes.shape({
        white: PropTypes.string.isRequired,
        lightBlues: PropTypes.arrayOf(PropTypes.string).isRequired,
        grays: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    font: PropTypes.shape({
        sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
        weights: PropTypes.objectOf(PropTypes.number).isRequired,
        stack: PropTypes.string.isRequired,
        getSize: PropTypes.func.isRequired
    }).isRequired
}).isRequired;

export default themeContract;
