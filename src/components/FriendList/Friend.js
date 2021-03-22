import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../default.jpg'
import reactDom from 'react-dom';
import styles from './Friend.module.css'



const Friend = ({ isOnline, avatar, name }) => (
  <div>
    <span
      className={`${isOnline ? styles.status_green : styles.status_red}`} >

       </span>
      <img class="avatar" src={avatar} alt="" width="48"/>
    <p className={styles.name}>{name}</p>
    </div>
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