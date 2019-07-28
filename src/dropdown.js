
import React from 'react';
import ReactDOM from 'react-dom';

export default class dropdown extends React.Component {





    render() {
        return (<ul className="dropdown-content" >
            {this.props.children}
        </ul>);



    }

}
