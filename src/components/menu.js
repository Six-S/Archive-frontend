import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';


class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            file: false,
            directory: false,
            system: false
        }
    }

    handleChange(type, event){
        this.setState({
            ...this.state,
            type: event.target.checked
        })
    }

    render(){
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Upload Type: </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={this.state.file} onChange={this.handleChange('file')} value="file" />}
                            label="Single File"
                        />
                        <FormControlLabel
                            control={<Switch checked={this.state.directory} onChange={this.handleChange('directory')} value="directory" />}
                            label="directory"
                        />
                        <FormControlLabel
                            control={
                            <Switch checked={this.state.system} onChange={this.handleChange('system')} value="system" />
                            }
                            label="System"
                        />
                    </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
          </FormControl>
        )
    }
}

export default Menu;