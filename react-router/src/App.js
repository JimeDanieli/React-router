import { Route, Link, useHistory} from 'react-router-dom'


function App() {
    const history = useHistory()
    console.log({history})
    const forward=()=>{
        history.goForward()
    }
    const back=()=>{
        history.goBack()
    }
    const push=(url)=>{
        history.push(url)
    }
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
          <button onClick={back}>Previous</button>
          <button onClick={forward}>Next</button>
          <button onClick={()=>push('/idk')}>Push</button>
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
