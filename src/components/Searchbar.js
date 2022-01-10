import React, { Component } from 'react';
import {SearchbarConteiner, SearchFormButton, SearchFormInput, SearchForm} from './Searchbar.styled'


class Searchbar extends Component {

    state = {

        pictureName: ''

        };
        

        onPictureNameChange = evt => {
this.setState({pictureName: evt.currentTarget.value.toLowerCase()})

        }

        onHandleSubmit = evt => {
            evt.preventDefault()
            if (this.state.pictureName.trim() === '') {
                return alert('please fill')
            }
this.props.onSubmit(this.state.pictureName)
            this.setState({pictureName: ''})
        }

    render() { 
        return <SearchbarConteiner>
           <header>
  <SearchForm onSubmit={this.onHandleSubmit}>
    <SearchFormButton type="submit">
      <span>Search</span>
    </SearchFormButton>

    <SearchFormInput
    name='pictureName'
    value={this.state.pictureName}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images"
    onChange={this.onPictureNameChange}
    />
  </SearchForm>
</header>
        </SearchbarConteiner>;
    }
}
 
export default Searchbar;