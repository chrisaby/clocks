import React from 'react';

export default class extends React.Component{
    render(){
        return(<div>
                <button>
                    Dropdown
                </button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#">India</a>
                    <a href="#">Japan</a>
                    <a href="#">UK</a>
                    <a href="#">USA</a>
                </div>
            </div>);
    }
}