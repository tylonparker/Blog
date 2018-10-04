import React, {Component} from 'react'
import fire from './config/Fire';
import App from './App';
import Login from './Login'

class MainPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      user:'',
    };
    this.authListener = this.authListener.bind(this);
  }

componentDidMount() {
  this.authListener(); 
  }

  componentWillMount(){
  this.authListener();
  }

authListener() {
    fire.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({user});
      }else {
        this.setState({user:null});
      }
    });
  }
render(){
    return(
      <div>
        {this.state.user ? (<App/>) :(<Login/>) }
      </div>
    );
  }
}

export default MainPage;
