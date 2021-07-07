const Car = ({ car, setShow, show, onRent, onReturn }) => {
    const clickRent = (e) => {
        onRent(e.target.id)
        setShow(!show)
    }
    return (
        <div className="car">
            <h3>{car.make} {car.year}
                <p><button onClick={(car.isRented) ? onReturn : clickRent}
                    id={car.id} className='btn'>
                    {(car.isRented ? 'Return' : 'Rent')}</button></p></h3>

            {car.name && <p>Rented By: <span className="renter">{car.name}</span></p>}
            <p>{(car.return_date === '0000-00-00') ? 'Car Available' : 'Return Date: ' + car.return_date}</p>
        </div>
    )
}

export default Car
