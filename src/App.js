import React, {Component} from 'react';
import logo from './static/images/logo.svg';
import './App.scss';
import Button from './components/common/button/Button';
import CardList from './components/CardList/CardList';

class App extends Component {

    // State
    state = {
        pancakes: []
    };

    // Life cycle hooks
    componentDidMount() {
        this.setState({
            pancakes: [1,2,3]
        })
    }

    // Methods
    clickFn() {
        this.setState({
            pancakes: [...this.state.pancakes, ...[4]]
        })
    }

    render() {
        return (
            <div className="App">
                {/*<Header/>*/}
                {/*<Banner/>*/}
                {/*<Filter/>*/}
                {/*{ /* fetch cardList from api */ }
                <CardList cardList={this.state.pancakes}/>
                {/*<Footer/>*/}

                {/*/!*<header className="Appheader">*!/*/}
                {/*/!*    <img src={logo} className="AppLogo" alt="logo"/>*!/*/}
                {/*/!*</header>*!/*/}

                <Button text={'pannekoek'} clickFn={this.clickFn.bind(this)}/>

            </div>
        );
    }

}

export default App;
