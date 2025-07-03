import React, {useState} from "react";
import './App.css' 
import { EventSourcePolyfill } from 'event-source-polyfill';

function App(){
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [agentOn, setAgentOn] = useState(false)

  const handleSend = () => {
    if (!prompt.trim()) return;

    setPrompt('');       // Clear input
    setResponse('');     // Reset response box

    const source = new EventSource(`http://localhost:5000/prompt?prompt=${encodeURIComponent(prompt)}`);

    source.onmessage = (event) => {
      setResponse(prev => prev + event.data);
    };

    source.onerror = (err) => {
      console.error('Stream error:', err);
      source.close();
    };
};


  return (
    <div className="App">
      <button onClick={() => setAgentOn(!agentOn)}>
        {agentOn ? 'Stop Agent' : 'Start Agent'}
      </button>

      {agentOn && (
        <form
          onSubmit={(e) => {
            e.preventDefault(); // prevents page reload
            handleSend();       // trigger your send function
          }}
        >
          <input
            type="text"
            value={prompt}
            className="inputbox"
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask something..."
          />
          <button type="submit">Send</button>

          <p>Response: {response}</p>
        </form>
      )}
    </div>

  );

}

export default App;