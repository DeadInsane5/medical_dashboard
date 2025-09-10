import {Link} from 'react-router-dom';
import "../styles/Navigation.css";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/appointment">Appointment</Link>
                    <Link to="/history">Medical History</Link>
                    <Link to="/medicine">Medicine Tracking</Link>
                    <Link to="/billing">Billing</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation