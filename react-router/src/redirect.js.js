import { Route, Link, Redirect} from 'react-router-dom'

const Portfolio=()=>{
    const loggedIn= false

    if(!loggedIn){
        return <Redirect to='/'/>
    }
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
            <Link to='/profile'>PROFILE</Link>
          </li>
          <li>
            <Link to='/portfolio'>PORTFOLIO</Link>
          </li>
        </ul>
      </nav>
      <section>
          <Redirect exact from='/' to='/home'/>
        <Route exact path='/home'>
            <h1>HOME</h1>
        </Route>
        <Route exact path='/profile'>
            <h1>PROFILE</h1>
        </Route>
        <Route exact path='/portfolio'>
           <Portfolio/>
        </Route>
      </section>
    </div>
  );
}

export default App;
