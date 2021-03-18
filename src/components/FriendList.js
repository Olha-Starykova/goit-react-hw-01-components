import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend'

const FriendList = ({ friends }) => (
    
    <ul class="friend-list">
        {friends.map(({ id, name, isOnline, avatar }) => (
            <li class="item" key={id}>
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