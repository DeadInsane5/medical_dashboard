import "../styles/Form.css"

function Form() {
    return (
        /* name, contact no., date, time, disease, doctor */
        <form onSubmit={(e) => { e.preventDefault(); alert("Appointment Booked Successfully!") }}>
            <div className="form_item">
                <label htmlFor="Name">Name</label>
                <input id="name" type="text" />
            </div>
            <div className="form_item">
                <label htmlFor="Contact">Contact No.</label>
                <input id="contact" type="text" />
            </div>
            <div className="form_item">
                <label htmlFor="Date">Date</label>
                <input id="date" type="date" />
            </div>
            <div className="form_item">
                <label htmlFor="Time">Time</label>
                <input id="time" type="time" />
            </div>
            <div className="form_item">
                <label htmlFor="Disease">Disease</label>
                <input id="disease" type="text" />
            </div>
            <div className="form_item">
                <label htmlFor="Doctor">Doctor</label>
                <select>
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Johnson">Dr. Johnson</option>
                    <option value="Dr. Williams">Dr. Williams</option>
                    <option value="Dr. Brown">Dr. Brown</option>
                    <option value="Dr. Jones">Dr. Jones</option>
                </select>
            </div>
            <button type="submit">Book Appointment</button>
        </form>
    )
}
export default Form