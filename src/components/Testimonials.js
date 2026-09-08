import React from "react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    name: "Maria K.",
    avatar: "https://i.pravatar.cc/100?img=47",
    review:
      "Best Greek salad I've had outside of Athens. The staff remembered our order from last time.",
  },
  {
    id: 2,
    rating: 5,
    name: "James O.",
    avatar: "https://i.pravatar.cc/100?img=12",
    review:
      "Cozy spot, warm service, and the bruschetta is unreal. We come back every week.",
  },
  {
    id: 3,
    rating: 4,
    name: "Priya S.",
    avatar: "https://i.pravatar.cc/100?img=32",
    review:
      "Lovely atmosphere and generous portions. Would love a bit more seating on weekends.",
  },
  {
    id: 4,
    rating: 5,
    name: "Daniel R.",
    avatar: "https://i.pravatar.cc/100?img=15",
    review:
      "The lemon dessert alone is worth the trip. Authentic recipes, no shortcuts taken.",
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial-rating" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h1>Testimonials</h1>

      <div className="testimonials-cards">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.id}>
            <Stars count={t.rating} />

            <div className="testimonial-person">
              <img src={t.avatar} alt={t.name} />
              <span className="testimonial-name">{t.name}</span>
            </div>

            <p>{t.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
}