import { use, useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    }) 
    .catch((error) => {
      console.error('Error fetching jokes:', error)
    })
  })

  return (
    <>
      <h1>Joke List</h1>
      <h2>Here's 5 Jokes: {jokes.length}</h2>
      <hr />

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
