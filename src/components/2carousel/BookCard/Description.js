import React from 'react';
import '../carouselStyle.css';

var BookDescription = React.createClass({
  render: function() {
    return (
      <div className='Description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    );
  }
});

export default BookDescription;