import { Route, Link, useLocation} from 'react-router-dom'

function useQuery(){
    return new URLSearchParams(useLocation)
}
function App() {
    const query=useQuery()
    const chancho= query.get('chanchito')
    const nombre= query.get('nombre')
    console.log({chancho, nombre})
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/profile'>PROFILE</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Route exact path='/'>
            <h1>HOME</h1>
        </Route>
        <Route exact path='/profile'>
            <h1>PROFILE</h1>
        </Route>
        <Route path='*'>
           404: Page not found 
        </Route>
      </section>
    </div>
  );
}

export default App;
