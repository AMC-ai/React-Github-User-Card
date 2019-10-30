import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  state = {
    user: { name: '' },
    userText: '',
    followers: [],
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/AMC-ai')
      .then(res => {
        console.log(res)
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));


    axios
      .get(`https://api.github.com/users/AMC-ai/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      if (this.state.user === '404') {
        axios
          .get('https://api.github.com/users/AMC-ai')
          .then(res => {
            this.setState({
              user: res.data,
              userText: 'AMC-ai'
            });
          })
          .catch(err => console.log(err));
      }
    }
    if (prevProps.someValue !== this.props.someValue) {
    }
  }

  handleChanges = e => {
    this.setState({
      userText: e.target.value
    });

  };

  searchFollowers = () => {
    console.log(this.state.userText)
  };

  render() {
    return (
      <div className="App">
        <h1>Hello People</h1>
        <h3>Search Below 🔽</h3>
        <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
        />

        {this.state.user.length === 0 && <p>Loading profile...</p>}
        <div className="followers">

          <UserCard user={this.state.user}></UserCard>

          {this.state.followers.filter((user) => {
            return user.login.toLowerCase().includes(this.state.userText.toLowerCase());
          }).map((user) => <UserCard user={user} key={user.id}></UserCard>)}
        </div>
      </div>
    );
  }
}

export default App;
