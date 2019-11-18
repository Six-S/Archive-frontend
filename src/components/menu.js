import React from 'react';
import Upload from './uploadMenu';
import Download from './downloadMenu';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected: false,
            typeSelected: 'None'
        }
    }

    handleClick(e){
        this.state = {
            selected: false,
            typeSelected: 'None'
        }
    }

    renderDetails(){
        switch(this.state.typeSelected){
            case 'upload':
                return <Upload
                    handleBack={() => this.handleClick()}
                />
            case 'download':
                return(
                    <Download />
                )
            case 'structure':
                console.warn('Not Implemented...');
                this.props.popNotification('error', 'Structure is not implemented.')
                this.setState({ selected: false })
                break;
            case 'None':
                break;
            default:
                this.props.popNotification('error', 'An unexpected error occured.')
        }
    }

    render(){

        console.log(this.state)

        return (
            <div>
                {!this.state.selected ?
                    <div>
                        <div className='menuButton'>
                            <Button
                                variant="contained"
                                onClick={(e) => this.setState({
                                    selected: true,
                                    typeSelected: e.target.id
                                })}
                                id="upload"
                            >
                                Upload
                            </Button>
                        </div>
                        <div className='menuButton'>
                            <Button
                                variant="contained"
                                onClick={(e) => this.setState({
                                    selected: true,
                                    typeSelected: e.target.id
                                })}
                                id="download"
                            >
                                Download
                            </Button>
                        </div>
                        <div className='menuButton'>
                            <Button
                                variant="contained"
                                onClick={(e) => this.setState({
                                    selected: true,
                                    typeSelected: e.target.id
                                })}
                                id="structure"
                            >
                                Structure
                            </Button>
                        </div>
                    </div>
                :
                    <div>
                        {this.renderDetails()}
                    </div>
                }
            </div>
        )
    }
}

export default Menu;