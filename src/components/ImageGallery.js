import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem'
import {ImageGalleryList} from './ImageGalleryItem.styled'

class ImageGallery extends Component {

    state ={
        picture: null,
        error: null,
        status: 'idle',
    }

componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    
    if (prevName !== nextName) {
        this.setState({status: 'pending'});
        fetch(`https://pixabay.com/api/?q=${nextName}&page=${nextPage}&key=23697885-1be4d713ea150551106b2a392&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (response.ok) {
               return response.json()
            }
            return Promise.reject(new Error(`Sorry we do not have ${this.props.pictureName}`))

        })
        .then(picture => this.setState({picture: picture.hits, status: 'resolved'}))
        .catch(error => this.setState({error, status: 'rejected'}) )
        
    }

    if (prevPage !== nextPage) {
        fetch(`https://pixabay.com/api/?q=${nextName}&page=${nextPage}&key=23697885-1be4d713ea150551106b2a392&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            if (response.ok) {
               return response.json()
            }
            return Promise.reject(new Error(`Sorry we do not have ${this.props.pictureName}`))

        })
        .then(picture => this.setState({picture: [
            ...prevState.picture,
            ...picture.hits,
          ], status: 'resolved'}))
        .catch(error => this.setState({error, status: 'rejected'}) )}

}


    render() { 
        const { picture, error , status} = this.state
      
if (status === 'idle') {
    return <div>Write something...</div>
}

        if (status === 'pending') {
            return  <div>Loading...</div>
          }

          if (status === 'rejected') {
              return <h2>{error.message}</h2>
          }

          if (status === 'resolved') {
              return <ImageGalleryList>
                  
              {picture.map(({webformatURL, id, largeImageURL})=><ImageGalleryItem URL={webformatURL} LargeUrl={largeImageURL} key={id}>    
              
              </ImageGalleryItem>)}
              </ImageGalleryList>
              
          }

    }
}
 
export default ImageGallery;

