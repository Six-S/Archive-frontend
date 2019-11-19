import React from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
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
            },
            allowUpload: false,
            allowSubmit: false,
            files: []
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
                    },
                    allowUpload: true,
                });
                break;
            case 'directory':
                    this.setState({
                        toggles: {
                            file: false,
                            directory: true,
                            system: false
                        },
                        allowUpload: true,
                    });
                    break;
            case 'system':
                    this.setState({
                        toggles: {
                            file: false,
                            directory: false,
                            system: true
                        },
                        allowUpload: true,
                    });
                    break;
        }
    }

    handleBackClick(event){

        console.log('we are in handle back click', event)

        this.setState({
            toggles:{
                file: false,
                directory: false,
                system: false
            },
            allowUpload: false,
            allowSubmit: false,
            files: []
        });

        this.props.handleBack()
    }

    handleFileUpload(event){
        console.log('we made it into file upload!!', event.target.files);
        let uploadedFiles = event.target.files

        //This aint working, I don't know why I thought it would. It's late.
        uploadedFiles.forEach(file => {
            this.setState({
                files: [...this.state.files, file]
            });
        });

        //new FileReader() !!!!!!!!!!1

        console.log('WOwowow our state!', this.state)
    }

    // <FormHelperText>Be careful</FormHelperText>

    render(){
        return (
            <div>
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
                                control={<Switch checked={this.state.toggles.system} onChange={() => this.handleChange('system')} value="system" />}
                                label="System"
                            />
                        </FormGroup>
                </FormControl>
                <div className='uploadFile'>
                    <input
                        accept="image/*"
                        className='fileInput'
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={(event) => this.handleFileUpload(event)}
                    />
                    <label htmlFor="contained-button-file">
                        <Button 
                            variant="contained"
                            component="span"
                            disabled={!this.state.allowUpload}
                        >
                            Upload
                        </Button>
                    </label>
                </div>
                <div className='buttonGroup'>
                    <div className='uploadButton'>
                        <Button
                            variant="contained"
                            onClick={event => this.handleBackClick(event)}
                            id="back"
                        >
                            Back
                        </Button>
                    </div>
                    <div className='uploadButton'>
                        <Button
                            variant="contained"
                            onClick={(e) => console.log('Submit was clicked.')}
                            disabled={!this.state.allowSubmit}
                            id="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadMenu;