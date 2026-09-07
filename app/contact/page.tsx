import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <Link href="/" className="contact-back">BACK TO HOME</Link>
        <Link href="/" aria-label="Waseem Saleem Photography home">
          <img src="/images/logo.webp" alt="Waseem Saleem Photography" />
        </Link>
        <span className="contact-header-label">LET&apos;S CONNECT</span>
      </header>

      <section className="contact-hero">
        <div className="contact-intro">
          <p className="contact-eyebrow">WASEEM SALEEM PHOTOGRAPHY</p>
          <h1>LET&apos;S CREATE<br />SOMETHING TIMELESS.</h1>
          <p className="contact-lead">
            Tell us about your wedding, your vision, and the moments that matter most.
            We&apos;ll be in touch to start planning your story.
          </p>
          <div className="contact-links">
            <a href="mailto:waseemsaleemphotography@gmail.com">
              <FaEnvelope /> waseemsaleemphotography@gmail.com
            </a>
            <a href="tel:+923048055553">
              <FaPhoneAlt /> +92 304 805 5553
            </a>
            <a href="https://wa.me/923048055553">
              <FaWhatsapp /> WhatsApp us
            </a>
          </div>
        </div>

        <div className="contact-card">
          <h2>START YOUR STORY</h2>
          <form action="mailto:waseemsaleemphotography@gmail.com" method="post" encType="text/plain">
            <label>
              YOUR NAME
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              EMAIL ADDRESS
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              TELL US ABOUT YOUR DAY
              <textarea name="message" rows={5} placeholder="Your wedding date, location, and photography needs..." required />
            </label>
            <button type="submit">SEND INQUIRY</button>
          </form>
        </div>
      </section>

      <footer className="contact-footer">
        <span>LAHORE · ISLAMABAD · KARACHI · DUBAI</span>
        <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
      </footer>
    </main>
  );
}
