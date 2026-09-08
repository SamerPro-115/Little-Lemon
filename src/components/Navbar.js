
import logo from "../assets/Logo.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} width="100" height="100" />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}