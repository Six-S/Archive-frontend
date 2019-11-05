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
            loggedIn: false
        }
    }

    handleLogin(user, pass){
        console.log('WOW OUR CREDS!', user, pass);
        //There's going to be a request to the API here.
        //for now just an if to simulate a "failed auth request"
        //FIXME
        if(user === 'user' && pass === 'password'){
            toast.success('🚀 Authentication Successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            this.setState({
                loggedIn: true
            });
        } else {
            toast.error('⚠️ Authentication Failed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    render(){
        return (
            <div className='Top'>
                <h2 className='background'>The Archive</h2>
                {!this.state.loggedIn ? 
                    <Login handleLogin={this.handleLogin.bind(this)}/>
                :
                    <Menu />
                }
                <ToastContainer />
            </div>
        )
    }
}

export default App;