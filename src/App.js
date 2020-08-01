import React from 'react';
import './index.css';

import data from './data/dados_iniciais.json'
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'

function App() {
  return (
    <div>
      <Menu />
      <BannerMain 
        videoTitle={data.categorias[0].videos[0].titulo}
        videoDescription={'Watch now'}
        url={data.categorias[0].videos[0].url}
      />
      <Carousel 
        ignoreFirstVideo
        category={data.categorias[0]}
      />
            <Carousel 
        ignoreFirstVideo
        category={data.categorias[1]}
      />
    </div>
  );
}

export default App;
