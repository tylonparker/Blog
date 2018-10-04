import React, { Component } from 'react';
//{import logo from './logo.svg'};
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Container from './Components/Container';
import CommentBox from './Components/CommentBox';
import Comments from './Components/Comments';
import fire from './config/Fire';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        comments: []
      };
      this.handleAddComment = this.handleAddComment.bind(this);
      this.logout = this.logout.bind(this);
    }

componentDidMount() {
  /*global Ably*/
  const channel = Ably.channels.get('comments');

  channel.attach();
    channel.once('attached', () => {
      channel.history((err, page) => {
        // create a new array with comments only in an reversed order (i.e old to new)
        const comments = Array.from(page.items.reverse(), item => item.data)

        this.setState({ comments });
      });
    });
}

handleAddComment(comment) {
this.setState(prevState => {
  return {
    comments: prevState.comments.concat(comment)
  };
});
}
logout() {
        fire.auth().signOut();
    }
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Container/>
        <hr/>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <CommentBox handleAddComment={this.handleAddComment}/>
                  <Comments comments={this.state.comments.reverse()} />
                </div>
              </div>
            </div>
          </section>
        <hr/>
        <button onClick={this.logout}>Logout</button>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default App;
