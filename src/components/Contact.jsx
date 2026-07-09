import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">
          Contact
        </h2>
      </header>

      {/* Google Map */}

      <section className="mapbox">
  <iframe
    title="Shahada Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.402178870565!2d74.47230977523032!3d21.548700985715504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f75.1!3m3!1m2!1s0x3bd9e9b22f30b64b%3A0x5f23d5c47f9642c4!2sShahada%2C%20Maharashtra%20425409!5e0!3m2!1sen!2sin!4v1694165823000!5m2!1sen!2sin"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="Shahada Location"
  />
</section>

      {/* Contact Form */}

      <section className="contact-form">

        <h3 className="h3 form-title">
          Contact Form
        </h3>

        <form
          action="https://formspree.io/f/xzzaooer"
          method="POST"
          className="form"
        >

          <div className="input-wrapper">

            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
              className="form-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="form-input"
            />

          </div>

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="form-input"
          />

          <button
            type="submit"
            className="form-btn"
          >

            <FaPaperPlane />

            <span>
              Send Message
            </span>

          </button>

        </form>

      </section>

    </article>
  );
}

export default Contact;