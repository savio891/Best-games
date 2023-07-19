import './App.css'
import Card from './components/Card/Card'

function App() {

  const item1 = {
    name: "Grand Theft Auto",
    image: "../src/components/img/img1.jpg"
  }

  const item2 = {
    name: "Dragon Ball Budokai Tenkaichi 3",
    image: "../src/components/img/img2.jpg"
  }

  const item3 = {
    name: "Dragon Ball Budokai 3",
    image: "../src/components/img/img3.jpg"
  }

  const item4 = {
    name: "God Of War",
    image: "../src/components/img/img4.png"
  }

  const lists = [item1, item2, item3, item4]

  return (
    <>
      <div className="card-lists">
        {lists.map(function(item, index) {
          return <Card key={index} item={item} />
        })}
      </div>
    </>
  )
}

export default App
