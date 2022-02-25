import { Route, Link} from 'react-router-dom'

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
               <Route path={'portfolio/project-1'} >
                   <h2>Project 1</h2>
               </Route>
               <Route path={'portfolio/project-2'} >
                   <h2>Project 2</h2>
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