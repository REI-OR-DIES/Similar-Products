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
    axios.get('http://3.18.221.86:3004/api/products')
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
    const similarProducts = this.state.similarProducts.map((product) => {
      return <SimilarProduct product={product}/>
    });
    return(
      <div>
        <h1>Similar Products</h1>
        <div className="similar-product-container">
          {similarProducts}
        </div>
      </div>
    );
  }
}

export default App;
