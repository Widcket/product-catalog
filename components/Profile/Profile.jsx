import React from 'react';
import { connect } from 'react-redux';

import { setProfile } from '../Profile/profile.redux';

const Profile = props => <h1>This is the user profile</h1>;

const mapStateToProps = state => state.profile;
const mapDispatchToProps = { setProfile };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
