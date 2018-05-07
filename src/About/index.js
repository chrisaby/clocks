import React from 'react';

export default class abouts extends React.Component{
    render(){
        return(
            <div>
                
                Hello welcome to About {this.props.match.params.label} page
            </div>
        )
    }
}