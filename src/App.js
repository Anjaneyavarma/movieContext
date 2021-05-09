import React from 'react';
import Movies from './Movies';
import Count from './Count';
import Addition from './Addition';
import {MovieProvider} from './MovieContext'

function App() {
  return (
    <MovieProvider>
      <div>
      <Count/>
      <Addition/>
      <Movies/>
    </div>
    </MovieProvider>
    
  )
}

export default App
