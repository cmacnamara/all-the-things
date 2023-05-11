import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
<<<<<<< HEAD
      <Link to="/the-daniel-things">Daniel's Things</Link><br/>
=======
      <Link to="/chris-things">Chris's Things</Link><br/>
      <Link to="/the-sad-things">Eunice's Things</Link><br/>
>>>>>>> main
    </>
  )
}
 
export default Landing