import { Route, Link, useRouteMatch, useParams} from 'react-router-dom'

const Project=(props)=>{
    const match= useRouteMatch()
    const params=useParams()
    const {project_id} = match.params
    return(
        <div>
          <h2>Project {project_id} </h2>  
        </div>
        
    )
}
const Portfolio=()=>{
    const match=useRouteMatch()
    console.log({match})
    return(
        <div>
           <h1>PORTFOLIO</h1> 
           <ul>
               <li>
                   <Link to={`${match.url}/project-1`} >Project 1</Link>
                   {/* <Link to={'/portfolio/project-1'} >Project 1</Link> en el caso de que esto cambie, usamos el de arriba */}
               </li>
               <li>
                   <Link to={`${match.url}/project-2`} >Project 2</Link>
               </li>
           </ul>
           <div>
               {/* <Route path={'portfolio/:project_id'} > esto se modifica por modificar lo de arriba */} 
               <Route path={`${match.path}/:project_id`} >
                   <Project/>
               </Route>
           </div>
        </div>
        
    )
}
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='portfolio'>PORTFOLIO</Link>
          </li>
        </ul>
      </nav>
      <section>
         <Route exact path='portfolio'>
           <Portfolio/>
         </Route>
         <Route exact path='/'>
            <h1>HOME</h1>
          </Route>
      </section>
    </div>
  );
}

export default App;