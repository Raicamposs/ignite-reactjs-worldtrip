
const types = [
  {
    id: 1,
    title: 'vida noturna',
    image: "/svg/cocktail.svg"
  },
  {
    id: 2,
    title: 'praia',
    image: "/svg/surf.svg"
  },
  {
    id: 3,
    title: 'moderno',
    image: "/svg/building.svg"
  },
  {
    id: 4,
    title: 'clássico',
    image: "/svg/museum.svg"
  },
  {
    id: 5,
    title: 'e mais ...',
    image: "/svg/earth.svg"
  },
]

export default function handler(req, res) {
  res.status(200).json(types)
}
