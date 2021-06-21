import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom'
import './Logout.css'
import { PoweroffOutlined  } from "@ant-design/icons";

const Logout = ({user,clientId,setUser}) => {
    

    const logout = () => {
        console.log('logout success!')
        setUser('')
        console.log(JSON.parse(localStorage.getItem("user")))
        localStorage.clear()
    }
    
    return (
        <div>
            {user !== '' ?
            <div>
            <GoogleLogout
                clientId={clientId}
                render={renderProps => (
                    <PoweroffOutlined  onClick={renderProps.onClick}/>
                    )}
                buttonText="Logout"
                onLogoutSuccess={logout}
            />
            <Redirect to='/home'/>  
            </div> :
            <Redirect to='/' />
            }
            
        </div>
    )
}

export default Logout
