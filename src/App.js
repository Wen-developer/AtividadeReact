import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';
import GlobalStyle from './components/HtmlElements';
const products = [
  {
    id: 1,
    title: "WWE 2K24",
    description: "Um dos melhores simuladores de luta livre, com mecânicas refinadas de grappling e uma vasta gama de superestrelas.",
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202401/1718/3894b9913a1ade743168f1c26ae0e0545017c9c51e27e3b6.png"
  },
  {
    id: 2,
    title: "MLB The Show 24",
    description: "Um jogo de beisebol aclamado pela crítica, com modos de jogo aprimorados e uma experiência imersiva.",
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202401/0519/bd9edd225756f2eac93c02ee66e3fb3df62dfcea02c5564c.png"
  },
  {
    id: 3,
    title: "Dragon's Dogma 2",
    description: "A aguardada sequência de um dos RPGs de ação mais adorados, oferecendo um vasto mundo aberto e combates emocionantes.",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/capsule_616x353.jpg?t=1721347707"
  },
  {
    id: 4,
    title: "Princess Peach: Showtime!",
    description: "Peach assume o papel de heroína para salvar o Teatro Sparkle de vilões excêntricos em uma jornada cheia de ação.",
    imageUrl: "https://m.media-amazon.com/images/I/61m59gwun5L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 5,
    title: "Stellar Blade",
    description: "Um jogo de ação intenso com gráficos impressionantes e combates no estilo 'Soulslike'.",
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202401/2211/40e7cfd126a11fe5118310ebce6d9b3a23e7cabaca717217.png"
  },
  {
    id: 6,
    title: "XDefiant",
    description: "Um FPS competitivo da Ubisoft que mistura facções de várias franquias famosas em batalhas frenéticas 6v6.",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLcM3kbYBrQHDVS5MyFzPWmmmNylu3AQTK7AzlvnEAgnfjyaAiJjZARSFTEmDFvyAaGuGDliK01FEnl0MafbtnFEGUR6Tv8xXOPNxS2RIkqu6eXcLrIi2gruTrbmJoYhrhBB8QsqWYBuKMVqrZ3wQDjvpe3gG-1L9G_R1Q2hu-jhZCMEfo3vxQv7wPWIE/s1280/xdefiant-anuncio-lancamento-21-maio.jpg"
  },
  {
    id: 7,
    title: "Sons of the Forest",
    description: "Um jogo de sobrevivência em um ambiente de horror, onde você e seus amigos devem sobreviver em uma ilha infestada de canibais.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3d/Sons_of_the_Forest.jpg"
  },
  {
    id: 8,
    title: "Ultros",
    description: "Um metroidvania psicodélico que mistura exploração com temas de jardinagem e combate estratégico.",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2386310/capsule_616x353.jpg?t=1718182296"
  },
  {
    id: 9,
    title: "Genshin Impact",
    description: "Um RPG de mundo aberto onde você explora Teyvat, resolve quebra-cabeças e luta usando habilidades de vários personagens jogáveis.",
    imageUrl: "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc"
  },
  {
    id: 10,
    title: "Zelda: Breath of the Wild",
    description: "É um RPG de mundo aberto onde você explora Hyrule, resolve quebra-cabeças e enfrenta inimigos para derrotar Calamity Ganon.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/0/0f/Legend_of_Zelda_Breath_of_the_Wild_capa.png"
  },
  {
    id: 11,
    title: "The Witcher 3: Wild Hunt",
    description: "RPG de mundo aberto com uma rica narrativa, onde você caça monstros e explora um vasto mundo.",
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png"
  },
  {
    id: 12,
    title: "Immortals Fenyx Rising",
    description: "Aventura inspirada na mitologia grega com exploração e resolução de quebra-cabeças.",
    imageUrl: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000021933/1c53ad2b39a5911e89fc48cadb879c81b6f959e9058d3d063404e8b29657d3ec"
  },
  {
    id: 13,
    title: "Assassin's Creed Valhalla",
    description: "RPG de mundo aberto onde você joga como um viking explorando e conquistando a Inglaterra, participando de batalhas e desenvolvendo seu assentamento..",
    imageUrl: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png"
  },
  {
    id: 14,
    title: "Dragon Age: Inquisition",
    description: "RPG de mundo aberto onde você lidera um grupo de heróis em uma guerra contra forças malignas, tomando decisões que afetam o mundo e a história.",
    imageUrl: "https://image.api.playstation.com/cdn/UP0006/CUSA00220_00/neKWa7JlzHCzYu1qPGTR37VA57OPDRWu.png"
  }
];


function App() {
  return (
    <div>

      <GlobalStyle/>
      <Title>Tela de Produtos</Title>
      <Description>Confira nossa vasta lista dos melhores jogos abaixo:</Description>
      <Products products={products}/>
    </div>
  );
}

export default App;