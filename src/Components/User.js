import React, { useRef } from 'react';
import socketHook from '../Hooks/socketHook';


export const User = ({data,setData}) => {
    const userRef=useRef(null);
    const roomRef=useRef(null);
    const socket = socketHook();
   const  handleClick = ()=>{
        socket.emit("checkUser",{user:userRef.current.value,roomId:roomRef.current.value})
        socket.on("join",(msg)=>{
            setData({user:userRef.current.value,room:roomRef.current.value});
            console.log(`message : ${msg}`);

        })
        socket.on("UE",(msg)=>{
                window.alert(msg)
        })
   }
    return ( 
            (data.user==null)?
            (
            <div className='UserForm' >
            <div>
                <label>Select Username : </label>
                <input type="text" ref={userRef}/>
            </div>
            <div>
                <label>Select Room : </label>
                <input type="text" ref={roomRef} />
            </div>
            <div>
                <button onClick={handleClick}> Join</button>
            </div>
            </div>
            )
            :(
            <div className='UserData' >
            <div> User name : {data.user}</div>
            </div>
        )

     );
}
 
