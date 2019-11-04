import React from 'react';

import Login from './login';

import './index.css'

class App extends React.Component {
    
    state = {
        defaultValue: 'default',
        loggedIn: false
    }

    handleLogin(user, pass){
        console.log('WOW OUR CREDS!', user, pass);
        this.setState({
            loggedIn: true
        });
    }

    render(){
        return (
            <div className='Top'>
                <h2 className='background'>The Archive</h2>
                {!this.state.loggedIn ? 
                    <Login handleLogin={this.handleLogin}/>
                : ''}
            </div>
        )
    }
}

export default App;