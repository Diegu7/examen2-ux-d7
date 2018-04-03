import React, { Component } from 'react'
import axios from 'axios'

class TweetForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.tweet.user,
      body: this.props.tweet.body
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const tweet = {
      user: this.state.user,
      body: this.state.body
    }

    axios.put(
      `http://localhost:3001/api/v1/tweets/${this.props.tweet.id}`,
      {
        tweet: tweet
      }
    ).then(response => {
      console.log(response)
      this.props.updateTweet(response.data)
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input className="input" type="text" name="user" placeholder="Username" value={this.state.user} onChange={this.handleInput} />
          <textarea className="input" name="body" placeholder="What are you thinking?" value={this.state.body} onChange={this.handleInput}></textarea>
        </form>
      </div>
    );
  }
}

export default TweetForm