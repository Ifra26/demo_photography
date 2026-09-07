import Link from "next/link";
import { notFound } from "next/navigation";

const locations = {
  lahore: {
    title: "Wedding Photographer in Lahore",
    image: "/images/Waseem-Saleem-light-and-bright-gallery6-768x768.webp",
    description: "Elegant, cinematic wedding photography for Lahore celebrations, from intimate nikahs to grand receptions.",
  },
  karachi: {
    title: "Wedding Photographer in Karachi",
    image: "/images/MGL9816-2-web-768x512.webp",
    description: "Timeless wedding stories photographed across Karachi with a natural, editorial feel.",
  },
  islamabad: {
    title: "Wedding Photography in Islamabad",
    image: "/images/MGL9434-683x1024.jpg",
    description: "Light-filled wedding photography for Islamabad couples who want their real moments preserved beautifully.",
  },
  dubai: {
    title: "Wedding Photographer in Dubai",
    image: "/images/MGL2778-Low-683x1024.jpg",
    description: "A destination wedding experience built around graceful portraits, honest emotion, and cinematic detail.",
  },
} as const;

type LocationSlug = keyof typeof locations;

export function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({ slug }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!Object.hasOwn(locations, slug)) notFound();

  const location = locations[slug as LocationSlug];
  return (
    <main className="location-page">
      <header className="location-page-header">
        <Link href="/" className="location-back">BACK TO HOME</Link>
        <img src="/images/logo.webp" alt="Waseem Saleem Photography" />
        <Link href="/#contact" className="location-contact">CONTACT</Link>
      </header>
      <section className="location-hero">
        <div className="location-copy">
          <p className="location-eyebrow">WASEEM SALEEM PHOTOGRAPHY</p>
          <h1>{location.title}</h1>
          <p>{location.description}</p>
          <Link href="/#contact" className="hero-gallery-btn">PLAN YOUR STORY</Link>
        </div>
        <div className="location-image">
          <img src={location.image} alt={location.title} />
        </div>
      </section>
    </main>
  );
}
