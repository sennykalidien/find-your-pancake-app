import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CardList extends Component {

    static propTypes = {
        cardList: PropTypes.array
    };

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(pancake => pancake)
                }
            </div>
        );
    }
}

export default CardList;
