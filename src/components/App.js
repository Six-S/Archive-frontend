import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import Login from './login';
import Menu from './menu';

import './index.css'
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            loggedIn: true
        }
    }

    generateNotification(type, message){
        if(type === 'success'){
            toast.success(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else if(type === 'warn'){
            toast.warn(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else {
            toast.error(message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    handleLogin(user, pass){
        console.log('WOW OUR CREDS!', user, pass);
        //There's going to be a request to the API here.
        //for now just an if to simulate a "failed auth request"
        //FIXME
        if(user === 'user' && pass === 'pass'){
            this.generateNotification('success', '🚀 Authentication Successful')
            this.setState({
                loggedIn: true
            });
        } else {
            this.generateNotification('error', '⚠️ Authentication Failed')
        }
    }

    render(){
        return (
            <div className='Top'>
                <h2 className='background'>The Archive</h2>
                {!this.state.loggedIn ? 
                    <Login handleLogin={this.handleLogin.bind(this)}/>
                :
                    <Menu 
                        popNotification={this.generateNotification.bind(this)}
                    />
                }
                <ToastContainer />
            </div>
        )
    }
}

export default App;