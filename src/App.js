import { useState } from 'react';
import Header from './components/Header'
import Cars from './components/Cars';
import UpdateCar from './components/UpdateCar';
import Footer from './components/Footer';
import Totals from './components/Totals';

function App() {

  const [cars, setCars] = useState([
    { id: 1, make: 'HYUNDAI', year: '2021', isRented: false, name: "", return_date: '0000-00-00' },
    { id: 2, make: 'KIA', year: '2005', isRented: false, name: "", return_date: '0000-00-00' },
    { id: 3, make: 'BMW', year: '2008', isRented: true, name: "Ronen", return_date: '2021-08-10' },
    { id: 4, make: 'FORD', year: '2018', isRented: true, name: "Ali", return_date: '2021-12-21' },
    { id: 5, make: 'MAZDA', year: '2012', isRented: false, name: "", return_date: '0000-00-00' },
  ])
  const [show, setShow] = useState(false)
  const [carID, setCarID] = useState(0)

  const onRent = (id) => {
    setCarID(id)
  }

  const rentCar = (text, date, carID) => {
    let index = cars.findIndex(x => x.id == carID)

    if (index !== -1) {
      let tempCars = cars.slice()
      tempCars[index].return_date = date
      tempCars[index].isRented = true
      tempCars[index].name = text
      setCars(tempCars)
    }
  }

  const returnCar = (e) => {
    let index = cars.findIndex(x => x.id == e.target.id)

    if (index !== -1) {
      let tempCars = cars.slice()
      tempCars[index].return_date = "0000-00-00"
      tempCars[index].isRented = false
      tempCars[index].name = ""
      setCars(tempCars)
    }
  }

  return (
    <div className="container">
      <Header />
      {show && <UpdateCar carID={carID} rentCar={rentCar} />}
      <Totals cars={cars} />
      <Cars cars={cars} setShow={setShow} show={show} onRent={onRent} onReturn={returnCar} />
      
      <Footer />
    </div>

  );
}

export default App;
