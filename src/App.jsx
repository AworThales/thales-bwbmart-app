import { useEffect, useState } from "react";
import amplitude from "./components/analytics/amplitude";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    amplitude.init();

    amplitude.track("Page Viewed", {
      page: "landing",
    });
  }, []);

  const trackEvent = (name, props = {}) => {
    amplitude.track(name, props);
  };

  const handleSignup = () =>
    trackEvent("Sign Up Clicked", { location: "hero" });

  const handleDemo = () =>
    trackEvent("Request Demo Clicked", { location: "hero" });

  const handleFeatureView = () =>
    trackEvent("Feature Viewed");

  const handlePricingView = () =>
    trackEvent("Pricing Viewed");

  const handleTestimonialView = () =>
    trackEvent("Testimonial Viewed");

  const handleFormStart = () =>
    trackEvent("Lead Form Started");

  const handleSubmit = (e) => {
    e.preventDefault();

    trackEvent("Lead Form Submitted", {
      email_domain: email.split("@")[1] || "",
    });

    alert("Submitted!");
    setEmail("");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container">
          <span className="navbar-brand fw-bold">
            Welcome To Thales Awor Analytics Company
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center min-vh-100">

            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">
                Understand User Behavior
              </h1>

              <p className="text-muted lead">
                Track, analyze, and grow your product faster.
              </p>

              <div className="d-flex gap-3">
                <button
                  className="btn btn-primary"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>

                <button
                  className="btn btn-outline-dark"
                  onClick={handleDemo}
                >
                  Request Demo
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                className="img-fluid rounded"
                alt=""
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="py-5 bg-light"
        onMouseEnter={handleFeatureView}
      >
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-3">
                Funnels
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                Cohorts
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                Insights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-5"
        onMouseEnter={handleTestimonialView}
      >
        <div className="container">
          <h2 className="text-center mb-4">
            Testimonials
          </h2>

          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-3">
                “Great analytics tool”
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                “Increased conversions”
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                “Easy to use”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        className="py-5 bg-light"
        onMouseEnter={handlePricingView}
      >
        <div className="container text-center">
          <h2>Pricing</h2>

          <div className="card p-5 mt-4">
            <h3>Starter Plan</h3>
            <h1>$29</h1>

            <button
              className="btn btn-primary mt-3"
              onClick={handleSignup}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-5">
        <div className="container">
          <div className="col-lg-6 mx-auto">

            <h2 className="mb-3">
              Join Waitlist
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onFocus={handleFormStart}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <button className="btn btn-success w-100">
                Submit
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center p-4">
        <h5>Ready to grow?</h5>

        <button
          className="btn btn-primary mt-2"
          onClick={() =>
            trackEvent("Contact CTA Clicked")
          }
        >
          Contact Sales
        </button>
      </footer>
    </>
  );
}

export default App;