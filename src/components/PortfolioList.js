import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';
import PropTypes from 'prop-types';

export default class PortfolioList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
    getPortfolioProfit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: []
  };

  componentDidMount () {
    this.props.getPortfolioProfit();
  }

  render () {
    return (
      <div className="PortfolioList">
        {this.props.items.map((item) => {
          return <PortfolioItem key={item.id} removeItem={this.props.removeItem} item={item} />
        })}
      </div>
    );
  }
}
