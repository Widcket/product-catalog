import PropTypes from 'prop-types';

const root = 12;
const spaces = [6 / root, 12 / root, 25 / root];
const getEmValue = value => `${value}em`;
const getRemValue = value => `${value}rem`;

const color = {
    white: '#FFFFFF',
    lightBlues: ['#25BBF1', '#0AD4FA', '#15DBFF'], // Darker to lighter
    grays: ['#616161', '#A3A3A3', '#D9D9D9', '#EDEDED', '#F9F9F9'] // Darker to lighter
};

const font = {
    sizes: [7 / root, 8 / root, 9 / root, 12 / root, 18 / root, 32 / root],
    weights: { regular: 400, bold: 700 },
    stack: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, "Open Sans", "Droid Sans", sans-serif',
    getSize: getRemValue
};

export const theme = { spaces, color, font, getEmValue, getRemValue };
const withTheme = ComposedComponent => props => <ComposedComponent {...props} theme={theme} />;

export default withTheme;
