import { Route, Link, useRouteMatch} from 'react-router-dom'

const Project=(props)=>{
    const match= useRouteMatch()
    return(
        <div>
          <h2>Project ...</h2>  
        </div>
        
    )
}
const Portfolio=()=>{
    return(
        <div>
           <h1>PORTFOLIO</h1> 
           <ul>
               <li>
                   <Link to={'/portfolio/project-1'} >Project 1</Link>
               </li>
               <li>
                   <Link to={'/portfolio/project-2'} >Project 2</Link>
               </li>
           </ul>
           <div>
               <Route path={'portfolio/:project_id'} >
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