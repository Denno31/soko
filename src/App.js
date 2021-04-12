import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Nav from './components/Nav'
import HomeScreen from './Screens/HomeScreen'
import Footer from './components/Footer'
import SecondaryFooter from './components/SecondaryFooter'
import ProductDetails from './Screens/ProductDetails'
function App() {
  console.log('app')
  useEffect(() => {
    document.title = 'Soko'
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Nav />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" exact component={ProductDetails} />
        </Switch>
        <Footer />
        <SecondaryFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
