const React = require('react');
const axios = require('axios');
import SimilarProduct from './similarProduct.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarProducts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3004/products')
      .then((result) => {
        this.setState({
          similarProducts: result.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return(
      <div>
        <h1>Similar Products</h1>
        <div className="similar-product-container">
          { this.state.similarProducts.map((product) => (
            <SimilarProduct product={product} key={this.props.product_id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
