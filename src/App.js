import React, { useState } from 'react';
import './App.css';
import users from './usersData/users';
import FriendRes from './component/FriendRes/FriendRes';
import Confirm from './component/FriendRes/ConfermReq/Confirm';

function App() {
  const [usersInfo, setUsersInfo] = useState(users);
  // setUsersInfo([users]);
  // console.log(usersInfo);
  const [infoCart, setInfoCart] = useState([])
  const handleAddFriend = (info) => {
    // console.log('clicked', info);
    const newUsersInfo = [...infoCart, info];
    setInfoCart(newUsersInfo);
  }
  // const [remove, setRemove] = useState([])
  // const handleConfirm = (x) => {
  //   const remove = [...infoCart];
  //   const newRemove = remove.filter(p => p.id !== x.id)
  //   setInfoCart(newRemove);
  // }

const total = infoCart.reduce((total, info) => total + info.salary ,0)
const style={
  alignItems: 'center',
  textAlign: 'center'
}
  return (
    <div className="App">
     
       <div style={{width:'75%'}}>
        {
          users.map(user => <FriendRes handleAddFriend = {handleAddFriend}  users = { user} key={user.id}></FriendRes>)
        }
       </div>
       <div>
          <h3 style={style}>Friend Request Area</h3>
          <p style={style}>Request Friend: {infoCart.length}</p>
          <p style={style}>Salary:{total}</p>
          {
            infoCart.map(cc => <Confirm key={cc.id} cart = {cc}></Confirm>)
          }
       </div>
      
    </div>
  );
}

export default App;
