import React, { useEffect } from 'react';
import socket from './socket';

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Connected to server with ID: ${socket.id}`);
    });

    return () => {
      socket.off('connect');
    };
  }, []);

  return (
    <div className="App">
      <h1>Code Battle Platform</h1>
      <p>Check the console for real-time updates.</p>
    </div>
  );
}

export default App;
