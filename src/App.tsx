import Header from './components/Header';
import ImageList from './components/ImageList';
import React from 'react';

function App() {

  return (
    <>
      <Header />
      <hr />
      <div className="imgs">
        <ImageList />
      </div>
    </>
  )
}

export default App
