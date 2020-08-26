import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import './Confirm.css'

const Confirm = (props) => {
    // console.log(props);
    // console.log(props);
    const cart = props.cart;
    // const handleConfirm = props.handleConfirm;
    
    const {img, name, email, salary} = props.cart;
    return (
        <div className="confirmStyle">
            <img style={{width: '60px', height: '60px'}} src={img} alt=""/>
            <div className='confirmPart'>
                <h6>Name: {name}</h6>
                <p><small>{email}</small></p>
                <p><small>Salary: {salary}</small></p>
            </div>
            <div>
                <button  className='confirmBtn'>
                <FontAwesomeIcon icon={faUserMinus} />
                Confirm</button>
            </div>
        </div>
    );
};

export default Confirm;