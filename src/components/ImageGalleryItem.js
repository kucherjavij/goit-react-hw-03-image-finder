import React, { Component } from 'react';
import Modal from './Modal'
import {Images} from './ImageGalleryItem.styled'

class ImageGalleryItem extends Component {
    state ={
        showModal: false
    }
    toggleModal = () => {
        this.setState(({showModal}) => ({showModal: !showModal,}))
    }


    render() { 
        return <div>
            
            <li >
        <Images src={this.props.URL} alt=""  onClick={this.toggleModal}/>
      </li>
      {this.state.showModal && <Modal largeImageUrl={this.props.LargeUrl} onClose={this.toggleModal}/>}
      </div>;
    }
}
 
export default ImageGalleryItem;

