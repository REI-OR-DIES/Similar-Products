const React = require('react');
const axios = require('axios');

class SimilarProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div class="similar-product-box">
        <img src={this.props.product.imageUrl}></img>
        <h2>{this.props.product.name}</h2>
        <body>{this.props.product.description}</body>
        <h2>${this.props.product.price}</h2>
      </div>
    );
  }
}

export default SimilarProduct;