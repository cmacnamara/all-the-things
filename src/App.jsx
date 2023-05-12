import { Routes, Route } from 'react-router-dom'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SillyThings'
import Landing from './pages/Landing/Landing'
import DanielThings from './pages/DanielThings/DanielThings'
import EunicesThings from './pages/EunicesThings/EunicesThings'

import ChrisThings from './pages/ChrisThings/ChrisThings'

const App = () => {
  const bensThings = [
    {
      name: 'banana',
      image:
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      attributes: [
        'potassium-rich',
        'yellow when good',
        'not a taco',
        'ring ring ring ring ring ring ring',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const huntersThings = [
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ]
  
  const chrisThings = [
    {
      name: "music",
      image: "https://m.media-amazon.com/images/I/41TEemnxOdL.jpg",  
      attributes: ["guitar", "fun", "pretty", "melodious"],
    },
  ]

  const danielThings = [
    {
      name: "funny blogs",
      image: "https://1.bp.blogspot.com/-S6ryaE6HuZg/Upvh2oS7q9I/AAAAAAAAGcI/R2-QDRd6A7o/s640/P+brain.png",  
      attributes: ["cerebral", "distraction", "no bueno"],
    },
  ]

  const eunicesThings = [
    {
      name: "doggos",
      image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80",  
      attributes: ["cuteness", "happy puppy"],
    },
  ]
  

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={bensThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/the-sad-things"
        element={<EunicesThings things={eunicesThings} />}
      />
      <Route
        path="/chris-things"
        element={<ChrisThings things={chrisThings} />}
      />
      <Route
        path="/the-daniel-things"
        element={<DanielThings things={danielThings} />}
      />
      <Route
        path="/the-sad-things"
        element={<EunicesThings things={eunicesThings} />}
      />
      <Route
        path="/chris-things"
        element={<ChrisThings things={chrisThings} />}
      />
    </Routes>
  )
}

export default App

