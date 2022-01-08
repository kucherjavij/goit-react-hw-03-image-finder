import React, { Component } from 'react';

class Searchbar extends Component {

componentDidMount() {
    fetch('https://pixabay.com/api/?q=cat&page=1&key=23697885-1be4d713ea150551106b2a392&image_type=photo&orientation=horizontal&per_page=12').then(resp=> resp.json).then(data=>console.log(data))
}

    render() { 
        return <div>
           <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        </div>;
    }
}
 
export default Searchbar;