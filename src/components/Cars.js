import Car from "./Car"

const Cars = ({ cars, setShow, show, onRent , onReturn }) => {
    return (
        <div>
            {cars.map((car) => (
                <Car key={car.id} car={car} setShow={setShow} show={show} onRent={onRent} onReturn={onReturn} />
            ))}
        </div>
    )
}

export default Cars
