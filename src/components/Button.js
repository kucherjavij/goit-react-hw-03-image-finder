import React, { Component } from 'react';
import {LoadMore} from './Button.styled'

class Button extends Component {



    render() { 
        return <div> 
            <LoadMore onClick={this.props.onLoadNext}>Load More</LoadMore>
        </div>;
    }
}
 
export default Button;