import logo from "../assets/Logo.svg";


export default function Footer() {
    return (
        <footer>
            <section>
                <img src={logo} width="100" height="100" />
            </section>

            <section>
                <div>
                    <h2>Doormat Navigation</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>

                    <h2>Contact</h2>
                    <ul>
                        <li><a href="/">Address</a></li>
                        <li><a href="/">Phone Number</a></li>
                        <li><a href="/">Email</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Social Media Links</h2>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}