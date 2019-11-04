import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: ''
        }
    }

    updateValues(evt){
        
        let val = evt.target.value;

        if(evt.target.id === 'user'){
            this.setState({
                user: val
            });
        } else {
            this.setState({
                pass: val
            })
        }
        
    }

    render(){

        return(
            <Container maxWidth='xs'>
                <CssBaseline />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    label="Username"
                    name="user"
                    autoFocus
                    value={this.state.user}
                    onChange={evt => this.updateValues(evt)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.pass}
                    onChange={evt => this.updateValues(evt)}
                />
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.props.handleLogin(this.state.user, this.state.pass)}
                >
                Sign In
                </Button>
            </Container>

        )
    }
}

export default Login;