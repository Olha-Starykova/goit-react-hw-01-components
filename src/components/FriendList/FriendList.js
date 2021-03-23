import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend'
import styles from './Friend.module.css'


const FriendList = ({ friends }) => (
    
    <ul class="friend-list">
        {friends.map(({ id, name, isOnline, avatar }) => (
            <li className={styles.items} key={id}>
                <Friend
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar}
                />
            </li>

        ))}
     
    </ul>
);

FriendList.propTypes = {
 
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
           
        })
    ).isRequired,
};


export default FriendList;