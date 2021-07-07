const Totals = ({ cars }) => {
    const getRentedCount = () => {
        let count = 0;
        cars.map((car) => {
            if (car.isRented) {
                count++;
            }
        })
        return count
    }
    return (
        <div style={{textAlign: 'center'}}>
            Total: <span>{cars.length}</span> | 
            Available: <span>{cars.length - getRentedCount()}</span> | 
            Rented: <span>{getRentedCount()}</span>
        </div>
    )
}

export default Totals
