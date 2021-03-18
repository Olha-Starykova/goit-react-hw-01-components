import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg'

const Friend = ({ isOnline, avatar, name }) => (
    <>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="" width="48"/>
      <p class="name">{name}</p>
    </>
);

Friend.defaultProps = {
    avatar: defaultImage,
};

Friend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;