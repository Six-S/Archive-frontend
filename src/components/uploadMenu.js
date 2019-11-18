import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class UploadMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggles: {
                file: false,
                directory: false,
                system: false
            }
        }
    }

    handleChange(type){
        let toggles = this.state.toggles;
        console.log(toggles)
        switch(type){
            case 'file':
                this.setState({
                    toggles: {
                        file: true,
                        directory: false,
                        system: false
                    }
                });
                break;
            case 'directory':
                    this.setState({
                        toggles: {
                            file: false,
                            directory: true,
                            system: false
                        }
                    });
                    break;
            case 'system':
                    this.setState({
                        toggles: {
                            file: false,
                            directory: false,
                            system: true
                        }
                    });
                    break;
        }
    }

    // <FormHelperText>Be careful</FormHelperText>

    render(){

        console.log(this.props)

        return (
            <div>
                <div 
                    className='backArrow'
                    onClick={this.props.handleBack()}
                    >
                    <KeyboardBackspaceIcon onClick={this.props.handleBack()}/>
                </div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Upload Type: </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch checked={this.state.toggles.file} onChange={() => this.handleChange('file')} value="file" />}
                                label="Single File"
                            />
                            <FormControlLabel
                                control={<Switch checked={this.state.toggles.directory} onChange={() => this.handleChange('directory')} value="directory" />}
                                label="Directory"
                            />
                            <FormControlLabel
                                control={
                                <Switch checked={this.state.toggles.system} onChange={() => this.handleChange('system')} value="system" />
                                }
                                label="System"
                            />
                        </FormGroup>
                </FormControl>
            </div>
        )
    }
}

export default UploadMenu;