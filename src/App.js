import React, { Component } from 'react';
import Searchbar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button';
import {Conteiner} from './App.styled'


class App extends Component {

state={
  pictureName:'',
page: null
}

loadMore = page => {
  this.setState({page})
}

handleFormSubmit = pictureName => {
  this.setState({pictureName})
}

  render() { 
    return <Conteiner>
<Searchbar onSubmit={this.handleFormSubmit}/>
<ImageGallery pictureName={this.state.pictureName} page={this.state.page}/>
{this.state.pictureName && <Button onLoadNext={this.loadMore} />}
    </Conteiner>;
  }
}
 
export default App;


