import './App.css'
import Header from './Components/header'
import Card from './Components/card'

function App() {
  return(
    <div>
        <Header />
        <div className="cardRow">
        <Card cardTitle="Headcount" cardValue={1886} />
        <Card cardTitle="Seats" cardValue={2500} />
        <Card cardTitle="Occupancy" cardValue="75%" />
        </div>
    </div>
  )
    
}

export default App
