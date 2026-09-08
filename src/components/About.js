import "../about.css";
import AboutImageBack from "../assets/Mario and Adrian A.jpg";
import AboutImageBackB from "../assets/Mario and Adrian b.jpg";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>

        <p>
          Founded by brothers Mario and Adrian, Little Lemon brings the
          flavors of the Mediterranean coast to Chicago. Every dish is built
          on family recipes passed down over three generations, cooked fresh
          each morning and served the way it's always been served: at a
          table, with people who matter.
        </p>
        <p>
          We source what we can from local growers and the rest from the
          same small producers our grandmother trusted. It's a simple way to
          cook, and we think it's the best one.
        </p>
      </div>

      <div className="about-images">
        <img
          className="about-image-back"
          src={AboutImageBack}
          alt="Mario and Adrian A"
        />
        <img
          className="about-image-front"
          src={AboutImageBackB}
          alt="Mario and Adrian B"
        />
      </div>
    </section>
  );
}