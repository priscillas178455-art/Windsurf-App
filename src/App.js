import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [jokeCount, setJokeCount] = useState(0);
  const [emoji, setEmoji] = useState('😄');

  const emojis = ['😂', '🤣', '😆', '😁', '😄', '😸', '🎉', '🌟', '✨', '🎊'];

  // Collection of kid-friendly jokes
  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
    },
    {
      setup: "What do you call a bear with no teeth?",
      punchline: "A gummy bear!"
    },
    {
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!"
    },
    {
      setup: "What do you call a fake noodle?",
      punchline: "An impasta!"
    },
    {
      setup: "Why did the bicycle fall over?",
      punchline: "Because it was two-tired!"
    },
    {
      setup: "What do you call cheese that isn't yours?",
      punchline: "Nacho cheese!"
    },
    {
      setup: "Why couldn't the leopard play hide and seek?",
      punchline: "Because he was always spotted!"
    },
    {
      setup: "What did one wall say to the other wall?",
      punchline: "I'll meet you at the corner!"
    },
    {
      setup: "Why did the math book look so sad?",
      punchline: "Because it had too many problems!"
    },
    {
      setup: "What do you call a dinosaur that crashes his car?",
      punchline: "Tyrannosaurus Wrecks!"
    },
    {
      setup: "Why don't eggs tell jokes?",
      punchline: "They'd crack each other up!"
    },
    {
      setup: "What do you call a sleeping bull?",
      punchline: "A bulldozer!"
    },
    {
      setup: "Why did the cookie go to the doctor?",
      punchline: "Because it felt crumbly!"
    },
    {
      setup: "What's orange and sounds like a parrot?",
      punchline: "A carrot!"
    },
    {
      setup: "Why can't you hear a pterodactyl using the bathroom?",
      punchline: "Because the 'P' is silent!"
    },
    {
      setup: "What do you call a fish wearing a bowtie?",
      punchline: "Sofishticated!"
    },
    {
      setup: "Why did the student eat his homework?",
      punchline: "Because the teacher said it was a piece of cake!"
    },
    {
      setup: "What do you call a pig that does karate?",
      punchline: "A pork chop!"
    },
    {
      setup: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts!"
    },
    {
      setup: "What did the ocean say to the beach?",
      punchline: "Nothing, it just waved!"
    }
  ];

  const getRandomJoke = () => {
    setIsLoading(true);
    
    // Random emoji
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
    
    // Simulate loading for fun animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      const selectedJoke = jokes[randomIndex];
      setJoke(`${selectedJoke.setup}\n\n${selectedJoke.punchline}`);
      setIsLoading(false);
      setJokeCount(jokeCount + 1);
    }, 500);
  };

  useEffect(() => {
    getRandomJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
        <header className="header">
          <h1 className="title">
            <span className="emoji-large">{emoji}</span>
            Joke Generator
            <span className="emoji-large">{emoji}</span>
          </h1>
          <p className="subtitle">Get ready to LOL! 🎉</p>
        </header>

        <div className={`joke-card ${isLoading ? 'loading' : ''}`}>
          {isLoading ? (
            <div className="loading-animation">
              <div className="spinner"></div>
              <p>Loading a hilarious joke...</p>
            </div>
          ) : (
            <div className="joke-content">
              <div className="joke-icon">🎭</div>
              <p className="joke-text">{joke}</p>
            </div>
          )}
        </div>

        <button 
          className="joke-button" 
          onClick={getRandomJoke}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : '🎲 Get Another Joke!'}
        </button>

        <div className="stats">
          <div className="stat-badge">
            <span className="stat-emoji">🎯</span>
            <span className="stat-text">Jokes Enjoyed: {jokeCount}</span>
          </div>
        </div>

        <footer className="footer">
          <p>Made with ❤️ for awesome kids and teens!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
