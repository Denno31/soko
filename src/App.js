import { useEffect } from 'react'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Nav from './components/Nav'
import HomeScreen from './Screens/HomeScreen'
import Footer from './components/Footer'
import SecondaryFooter from './components/SecondaryFooter'
import ProductDetails from './Screens/ProductDetails'
import BagScreen from './Screens/BagScreen'
function App() {
  const history = useHistory()
  useEffect(() => {
    document.title = 'Soko'
    console.log(history)
  }, [history])
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Nav loc={history} />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/bag" exact component={BagScreen} />
          <Route path="/product/:id" exact component={ProductDetails} />
        </Switch>
        <Footer />
        <SecondaryFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
