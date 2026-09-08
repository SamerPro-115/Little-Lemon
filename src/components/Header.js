

import foodImage from "../assets/restauranfood.jpg";

export default function Header() {
    return (
        <header className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>

                    <article>
                        <p>
                            We are a family owned Moditerranean restaurant, focused on
                            traditional recipes served with a modern twist.
                        </p>

                        <a href="#">Reserve a Table</a>
                    </article>
                </div>

                <img
                    className="hero-image"
                    src={foodImage}
                    alt="Little Lemon dish"
                />
            </div>
        </header>
    );
}