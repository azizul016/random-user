import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './FriendRes.css';

const FriendRes = (props) => {
    // console.log(props.users);
    const {img, name, phone, email, salary} = props.users;
    const handleAddFriend = props.handleAddFriend;
    // const friendStyle = {
    //     display: 'flex',


    // }
    return (
        <div className='friendStyle'>
            <img style={{width:'150px', height:'150px'}} src={img} alt=""/>
            <div className='mainInfo'>
                <h4>Name: {name}</h4>
                <p><small>Phone: {phone}</small></p>
                <p><small>Email: {email}</small></p>
                <p><small>Yearly salary: {salary}</small></p>
            </div>
            <div>
                <button onClick={() => handleAddFriend(props.users)} className='button'>
                <FontAwesomeIcon icon={faUserPlus} />
                Add Friend
                </button>
            </div>
        </div>
    );
};

export default FriendRes;