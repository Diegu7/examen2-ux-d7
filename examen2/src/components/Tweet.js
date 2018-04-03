import React from 'react'

const Tweet = ({tweet}) =>
  <div className="tile" key={tweet.id}>
     <h4>{tweet.user}</h4>
     <p>{tweet.body}</p>
  </div>


export default Tweet