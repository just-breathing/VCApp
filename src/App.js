import './App.css';
import { useState } from 'react';
import {User} from "./Components/User"


function App() {

  const [userData, setUserData] = useState({
    user: null,
    room: null
  })

  return (
    <div className="app">
      <User setData={setUserData} data={userData} />
      {
        userData.user?
          <div>
            Hello
          </div>
        :""  
      }
    </div>
  );
}






export default App;
