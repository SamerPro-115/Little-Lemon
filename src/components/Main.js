import salad from "../assets/greek salad.jpg";
import burschetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";
import Testimonials from "./Testimonials";
import About from "./About";
const specials = [
  {
    id: 1,
    image: salad,
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    image: burschetta,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    image: lemonDessert,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function Main() {
  return (
    <main>
      <section className="specials" id="specials">
        <div className="specials-header">
          <h1>This weeks specials!</h1>
          <a href="#" className="specials-btn">
            Online Menu
          </a>
        </div>

        <div className="specials-cards">
          {specials.map((item) => (
            <article className="specials-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="specials-card-body">
                <div className="specials-card-top">
                  <h2>{item.title}</h2>
                  <span className="specials-price">{item.price}</span>
                </div>

                <p>{item.description}</p>

                <a href="#" className="delivery-link">
                  Order a delivery
                  <span className="delivery-icon" aria-hidden="true">
                    🛵
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <Testimonials />
        <About />
      </section>
    </main>
  );
}