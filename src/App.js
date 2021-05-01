import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import logo from './assets/logo.svg'
import AboutMe from './containers/AboutMe/AboutMe'

function App() {
  return (
    <>
      <Header logo={logo}/>
      <main className="main-container--black">
        {/*<Home />*/}
        <AboutMe />
      </main>
    </>
  );
}



export default App;
