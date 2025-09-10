import Form from "./components/Form"
import './styles/Appointment.css'

function Appointment() {
    return (
        <div id="appointment-container">
            <div id="appointment-text">
                <h1>Book your Doctor Appointment Online</h1>
                <p>A Healthier Tomorrow Starts Today: Schedule Your Appointment! Your Wellness, our Experties: Set Up Your Appointment Today</p>
            </div>
            <div id="appointment_form">
                <Form />
            </div>
        </div>
    )
}

export default Appointment