import React, { Component } from 'react';
import {LoadMore} from './Button.styled'

class Button extends Component {

state={
    page: 2,
}

onLoadMore = () => {
    let { page } = this.state;
    this.setState({ page: page + 1 });
    this.props.onLoadNext(this.state.page)
  };

    render() { 
        return <div> 
            <LoadMore onClick={this.onLoadMore}>Load More</LoadMore>
        </div>;
    }
}
 
export default Button;