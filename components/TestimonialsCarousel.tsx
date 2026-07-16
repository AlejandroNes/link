import { useLanguage } from "../context/LanguageContext";

interface Testimonial {
  name: string;
  rating: number;
  description: string;
}

export default function TestimonialsCarousel() {
  const { t } = useLanguage();
  const testimonials = (t.testimonials || []) as Testimonial[];

  return (
    <div className="carousel-container" id="carousel-container">
      {testimonials.map((item, index) => (
        <div className="testimonial-card" key={index}>
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill={i < item.rating ? "#ffd700" : "none"}
                stroke={i < item.rating ? "#ffd700" : "rgba(255,255,255,0.2)"}
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--gray)", marginBottom: "12px", fontStyle: "italic" }}>
            &quot;{item.description}&quot;
          </p>
          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, var(--purple-1), var(--purple-2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>
              {item.name.charAt(0)}
            </div>
            <div style={{ fontSize: "12px", fontWeight: 600 }}>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
