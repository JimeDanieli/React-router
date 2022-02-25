import { Route, NavLink, useRouteMatch, useParams} from 'react-router-dom'

const Project=(props)=>{
    const match= useRouteMatch()
    const {project_id} = match.params
    return(
        <div>
          <h2>Project {project_id} </h2>  
        </div>
        
    )
}
const Portfolio=()=>{
    const match=useRouteMatch()
    return(
        <div>
           <h1>PORTFOLIO</h1> 
           <ul>
               <li>
                   <NavLink activeClassName='active' exact to={`${match.url}/project-1`} >Project 1</NavLink>
                   {/* <Link to={'/portfolio/project-1'} >Project 1</Link> en el caso de que esto cambie, usamos el de arriba */}
               </li>
               <li>
                   <NavLink activeStyle={{fontSize: 20}} exact to={`${match.url}/project-2`} >Project 2</NavLink>
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
            <NavLink exact to='/'>HOME</NavLink>
          </li>
          <li>
            <NavLink isActive={(match, location) =>{
                console.log(match, location)
                return false
            }} exact to='portfolio'>PORTFOLIO</NavLink>
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