import ClothesProvider from './store/ClothesProvider';
import Header from './components/Header';
import Form from './components/Form';
import React from 'react';


function App() {
  return (
    <div>
      <Header />
      <ClothesProvider>
        <Form />
      </ClothesProvider>
    </div>
  );
}

export default App;
