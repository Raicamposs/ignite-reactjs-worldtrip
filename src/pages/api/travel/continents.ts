
const continents = [
  {
    id: 1,
    name: 'Ásia',
    title: 'O mais extenso territorialmente e o mais populoso também',
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    name: 'América',
    title: 'É um dos cinco continentes do mundo, sendo o maior deles territorialmente de norte a sul',
    image: "https://images.unsplash.com/photo-1591533985302-42123fa9240b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 3,
    name: 'África',
    title: 'África é o terceiro maior continente do mundo e um dos mais populosos',
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
  },
  {
    id: 4,
    name: 'Europa',
    title: 'Composto por 50 países e possui o maior bloco econômico do mundo',
    image: "https://images.unsplash.com/photo-1566745609223-23bce7140997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    name: 'Oceania',
    title: 'Localizado entre os oceanos Índico e Pacífico, formado por 14 países insulares e diversos territórios ultramarinos',
    image: "https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
]

export default function handler(req, res) {
  res.status(200).json(continents)
}
