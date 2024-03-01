import { io } from "socket.io-client"
import { useEffect,useState } from "react";

const useSocket = () => {
    const [socket,setSocket]=useState(null);
    useEffect(()=>{
    const socket = io("ws://localhost:5600");
    setSocket(socket)
    },[])
    return socket
}
 
export default useSocket;