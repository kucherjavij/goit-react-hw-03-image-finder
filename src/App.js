import React, { Component } from 'react';
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button';
import {Conteiner} from './App.styled'


class App extends Component {

state={
  pictureName:'',
page: 1
}


onLoadMore = () => {
  let { page } = this.state;
  this.setState({ page: page + 1 });
};

handleFormSubmit = pictureName => {
  this.setState({pictureName})
  if (pictureName) {
    this.setState({ page: 1 })
  }
  
}

  render() { 
    return <Conteiner>
<Searchbar onSubmit={this.handleFormSubmit}/>
<ImageGallery pictureName={this.state.pictureName} page={this.state.page}/>
{this.state.pictureName && <Button onLoadNext={this.onLoadMore} />}
    </Conteiner>;
  }
}
 
export default App;


