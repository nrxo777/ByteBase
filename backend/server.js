import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Wanna Hear a Joke?')
})

// get a list of 5 random jokes

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: 'Why did the chicken cross the road? To get to the other side!'
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'Why don\'t scientists trust atoms? Because they make up everything!'
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'What do you call fake spaghetti? An impasta!'
        },
        {
            id: 4,
            title: 'Joke 4',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id: 5,
            title: 'Joke 5',
            content: 'Why don\'t skeletons fight each other? They don\'t have the guts!'
        }
    ]
    res.send(jokes)
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});