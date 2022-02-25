import { Route, Link} from 'react-router-dom'

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
           <h1>PORTFOLIO</h1>
         </Route>
         <Route exact path='/'>
            <h1>HOME</h1>
          </Route>
      </section>
    </div>
  );
}

export default App;