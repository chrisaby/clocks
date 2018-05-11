import React from 'react';
import './Contact.css';
export default class abouts extends React.Component{
    render(){
        return(
            <div id="contact-container">
                <div id="contact-content"><b>{this.props.match.params.name}'s Contact</b><hr/>  
                    <address>
                        Kottackal (H)<br/>
                        Kothamangalam P.O<br/>
                        Ernakulam District-686691<br/>
                        Kerala, India<br/>
                        Mobile: +91-8281888117<br/>
                        Email: antonychrisaby@gmail.com<br/>
                    </address>
                </div>
            </div>
        )
    }
}