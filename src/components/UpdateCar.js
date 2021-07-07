import { useState } from 'react'

const UpdateCar = ({ carID, rentCar }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [errors, setErrors] = useState({})

    const getFullDate = (value) => {
        let date = (value) ? new Date(value) : new Date()
        let res = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        return res
    }
    const submit = (e) => {
        e.preventDefault()
        let currDate = getFullDate();
        let inputDateStr = getFullDate(date)

        if (!text) {
            setErrors({ field: "text", value: "Please Enter a Name" })
            return
        }
        if (!date) {
            setErrors({ field: "date", value: "Please Enter a Date" })
            return
        } else if (!date.match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/)) {
            setErrors({ field: "date", value: "Please Enter a Valid Date (YYYY-MM-DD)" })
            return
        } else if (inputDateStr < currDate) { //NEEDS WORK
            setErrors({ field: "date", value: "Please Enter a future Date" })
            return
        }

        rentCar(text, date, e.target.carID.value)
        setText('')
        setDate('')
        setErrors({})
    }

    return (
        <div>
            {errors.field && <li>{errors.value}</li>}
            <form className="update-form" onSubmit={submit}>
                <div className="form-control">
                    <label>Name</label>
                    <input style={ errors.field === "text" ? { color: 'red' } : {} } type="text" placeholder="Enter Name" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input style={ errors.field === "date" ? { color: 'red' } : {} } type="text" placeholder="e.g. 2021-08-20" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <input type="hidden" id="carID" value={carID} />

                <input className="btn btn-block" type="submit" value="Confirm" />
            </form>
        </div>
    )
}

export default UpdateCar
