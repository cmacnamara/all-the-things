import ThingCard from '../../components/ThingCard/ThingCard'
import { Link } from 'react-router-dom'

const EunicesThings = (props) => {
  return (
    <>
      <h1>Eunice's Things</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default EunicesThings