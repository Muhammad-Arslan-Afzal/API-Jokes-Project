const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    while (jokes.firstChild) {
        jokes.removeChild(jokes.firstChild);
    }
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}


const getDadJoke = async () => {

    try {
        const config = { headers: { Accept: 'application/json' } }
        const result = await axios.get('https://icanhazdadjoke.com/', config)
        return result.data.joke;
    }
    catch (e) {
        return 'NO JOKES AVAILABLE SORRY :('
    }
}

button.addEventListener('click', addNewJoke);