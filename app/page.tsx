
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  FiPlus,
  FiMinus,
  FiChevronDown,
} from "react-icons/fi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const image = (name: string) => `/images/${name}`;

const locationSlug = (label: string) => {
  const city = label
    .toLowerCase()
    .match(/(lahore|karachi|islamabad|dubai)$/)?.[1];

  return (
    city ??
    label.toLowerCase().replace(/\s+/g, "-")
  );
};

/* =========================================================
   GALLERY
   ========================================================= */

const gallery = [
  [
    "Waseem-Saleem-light-and-bright-gallery6-768x768.webp",
    "Wedding Photographer in Lahore",
  ],
  [
    "DSC08333.JPG-insta-2-768x512.jpg",
    "Pre-wedding photoshoot couple",
  ],
  [
    "MGL2923-1-scaled-1-683x1024.jpg",
    "Wedding Couple Candid",
  ],
  [
    "IMG_1499-Insta-1-768x512.jpg",
    "Female Photographer Wedding Shoot",
  ],
  [
    "waseemsaleemphotography_2-741x1024.jpg",
    "Wedding photography",
  ],
  [
    "02-scaled-1-768x512.jpg",
    "Outdoor Wedding Session",
  ],
  [
    "Waseem-Saleem-light-and-bright-gallery8-768x768.webp",
    "Bride and groom portrait",
  ],
  [
    "Waseem-Saleem-light-and-bright-gallery11-768x768.webp",
    "Wedding reception",
  ],
  [
    "home-main-gallery6-2-768x512.webp",
    "Candid wedding moment",
  ],
  [
    "home-main-gallery6-768x512.webp",
    "Wedding celebration",
  ],
  [
    "Waseem-Saleem-home-main-gallery5-1-1-768x512.webp",
    "Wedding couple",
  ],
  [
    "compressed_MGL1402-1-768x512.jpg",
    "Bride portrait",
  ],
  [
    "MGL1402-1-scaled-2-768x512.jpg",
    "Wedding details",
  ],
  [
    "Edits-web-1-768x512.webp",
    "Wedding ceremony",
  ],
  [
    "Edits-web-768x512.webp",
    "Bride and groom",
  ],
  [
    "MGL2603-inta-web-low-1-768x512.webp",
    "Intimate wedding",
  ],
  [
    "MGL2654-Low-1-768x512.jpg",
    "Wedding portrait",
  ],
  [
    "MGL2690-Low-683x1024.jpg",
    "Bridal portrait",
  ],
  [
    "MGL2778-Low-683x1024.jpg",
    "Wedding couple portrait",
  ],
  [
    "MGL5376-instaa-1-683x1024.jpg",
    "Bridal details",
  ],
  [
    "MGL9249-FInal-PSD-768x512.jpg",
    "Wedding reception",
  ],
  [
    "MGL9813-1-768x512.jpg",
    "Cinematic wedding",
  ],
  [
    "MGL9816-2-web-768x512.webp",
    "Cinematic couple",
  ],
  [
    "MGL6561-JPG-1.jpg",
    "Wedding couple shoot",
  ],
  [
    "MGL0026-F-Recovered-scaled-1-683x1024.jpg",
    "Bride getting ready",
  ],
  [
    "MGL0032-F-scaled-1-683x1024.jpg",
    "Bridal makeup",
  ],
  [
    "MGL9434-683x1024.jpg",
    "Light and bright wedding",
  ],
  [
    "MGL9528-683x1024.jpg",
    "Bride portrait",
  ],
  [
    "MGL9535-683x1024.jpg",
    "Wedding details",
  ],
  [
    "MGL9543-683x1024.jpg",
    "Wedding couple",
  ],
  [
    "MGL9688-683x1024.jpg",
    "Wedding ceremony",
  ],
  [
    "MGL9886-Web-768x1152.jpg",
    "Wedding portrait",
  ],
  [
    "MGL9997-web-768x1152.jpg",
    "Wedding celebration",
  ],
];

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  {
    title: "WEDDING PHOTOGRAPHY",
    text: "This special day will remain etched in your memory for the rest of your life. Our wedding photography services make sure that all the emotions, smiles, and moments of your big day are captured in these unforgettable pictures.",
    image: "02-scaled-1-768x512.jpg",
    linkText:
      "LEARN MORE ABOUT WEDDING PHOTOGRAPHY",
  },
  {
    title: "FEMALE PHOTOGRAPHER",
    text: "We are proud to offer the expertise and experience of a Female photographer, for brides or families who prefer intimate moments. She captures the special moments of your wedding with grace and elegance.",
    image: "compressed_MGL1402-1-768x512.jpg",
    linkText:
      "LEARN MORE ABOUT FEMALE PHOTOGRAPHER",
  },
  {
    title: "PRE WEDDING",
    text: "Pre-wedding Photography and Post-wedding Photography will help you celebrate your love story after the wedding. We will make every moment special, whether it is your romantic engagement session or your joyous celebrations following your wedding.",
    image: "DSC08333.JPG-insta-2-768x512.jpg",
    linkText:
      "LEARN MORE ABOUT PRE WEDDING",
  },
  {
    title: "BRIDAL SHOOT",
    text: "Every bride should shine brightly. Our wedding shoot is a timeless portrait that captures your elegance, grace and beauty. Each couple has a distinct style of theirs be it a gentle romantic, a daring modern one or traditional and she fashions the photo-taking approach to fit that.",
    image: "MGL2690-Low-683x1024.jpg",
    linkText:
      "LEARN MORE ABOUT BRIDAL SHOOTS",
  },
  {
    title: "COUPLE SHOOT",
    text: "Celebrate your love with a Couple Shoot. Capture your bond, togetherness, and laughter. We can create pictures that capture your relationship in a beautiful way, whether it's romantic or fun.",
    image: "MGL2778-Low-683x1024.jpg",
    linkText:
      "LEARN MORE ABOUT COUPLE SHOOTS",
  },
  {
    title: "OUTDOOR SHOOT",
    text: "With our outdoor shooting service, nature becomes your backdrop. We capture stunning scenery in every frame, from historical landmarks to gardens.",
    image: "MGL9688-683x1024.jpg",
    linkText:
      "LEARN MORE ABOUT OUTDOOR SHOOTS",
  },
];

/* =========================================================
   FAQ
   ========================================================= */

const faqs = [
  {
    question:
      "WHAT PHOTOGRAPHY SERVICES DO YOU OFFER?",
    answer:
      "We provide a wide range of photography services including weddings, couple shoots, corporate events, and destination photography. Every shoot is handled creatively to ensure timeless, high-quality images that truly capture your special moments.",
  },
  {
    question:
      "DO YOU OFFER SERVICES OUTSIDE LAHORE?",
    answer:
      "Yes, we offer photography and videography services across Pakistan, including Karachi, Islamabad, and international destination weddings.",
  },
  {
    question:
      "DO YOU PROVIDE BOTH PHOTOGRAPHY AND VIDEOGRAPHY?",
    answer:
      "Yes, we provide complete photography and cinematic videography packages tailored to your event requirements.",
  },
  {
    question:
      "WHY CHOOSE US FOR PHOTOGRAPHY?",
    answer:
      "We focus on candid moments, high-end storytelling, professional lighting, and personalized service to make your memories unforgettable.",
  },
  {
    question:
      "WHO IS THE BEST WEDDING PHOTOGRAPHER?",
    answer:
      "Waseem Saleem Photography is recognized as one of the top wedding photography teams in Pakistan, known for timeless and elegant aesthetics.",
  },
];

/* =========================================================
   NAVIGATION MENUS
   ========================================================= */

const menus = {
  what: [
    "WEDDING PHOTOGRAPHY",
    "FEMALE PHOTOGRAPHER",
    "PRE-WEDDING SHOOTS",
    "CORPORATE PHOTOGRAPHY",
    "BRIDAL SHOOT",
    "COUPLE SHOOT",
    "OUTDOOR SHOOT",
  ],

  about: [
    "PACKAGES",
    "STORIES",
  ],

  location: [
    "WEDDING PHOTOGRAPHER IN LAHORE",
    "WEDDING PHOTOGRAPHER IN KARACHI",
    "WEDDING PHOTOGRAPHY IN ISLAMABAD",
    "DUBAI",
  ],

  gallery: [
    "CREATIVE",
    "LIGHT AND BRIGHT",
    "DARK AND DRAMATIC",
    "DESTINATION WEDDING",
    "FILM MAKING",
  ],
};

const menuHref = (
  label: string,
  item: string
) =>
  label === "LOCATION"
    ? `/location/${locationSlug(item)}`
    : "#services";

/* =========================================================
   DESKTOP MENU ITEM
   ========================================================= */

function MenuItem({
  label,
  items,
}: {
  label: string;
  items?: string[];
}) {
  return (
    <div className="menu-item relative group py-2">
      <button
        type="button"
        className="menu-trigger flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        aria-haspopup={
          items ? "true" : undefined
        }
      >
        <span>{label}</span>

        {items && (
          <FiChevronDown
            className="text-[11px] text-white/80 group-hover:rotate-180 transition-transform duration-200"
          />
        )}
      </button>

      {items && (
        <div className="dropdown absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex group-focus-within:flex flex-col bg-black/95 border border-white/10 min-w-[220px] py-3 z-50 shadow-2xl">
          {items.map((item) => (
            <a
              href={menuHref(label, item)}
              key={item}
              className="px-5 py-2 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 transition-colors tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   HOME
   ========================================================= */

export default function Home() {
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  const galleryStickyRef = useRef<HTMLDivElement>(null);
  const galleryViewportRef = useRef<HTMLDivElement>(null);
  const galleryTrackRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] =
    useState(false);

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [mobileMenuSection, setMobileMenuSection] =
    useState<string | null>(null);

  /* =======================================================
     HEADER SCROLL
     ======================================================= */

  useEffect(() => {
    const updateHeader = () => {
      setScrolled(window.scrollY > 30);
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateHeader
      );
    };
  }, []);

  /* =======================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
     ======================================================= */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =======================================================
     GSAP
     ======================================================= */

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const removeHoverListeners: Array<
      () => void
    > = [];

    const mm = gsap.matchMedia();

    const context = gsap.context(() => {
      /* Hero animation */

      gsap.from(
        ".hero-title, .hero-subtitle",
        {
          x: -120,
          opacity: 0,
          duration: 1.2,
          stagger: 0.14,
          ease: "power4.out",
          delay: 0.35,
        }
      );

      gsap.fromTo(
        ".hero-gallery-btn",
        {
          x: -80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.9,
        }
      );

      /* Section reveal */

      gsap.utils
        .toArray<HTMLElement>(
          ".reveal-section"
        )
        .forEach((section) => {
          gsap.from(section, {
            y: 55,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",

            scrollTrigger: {
              trigger: section,
              start: "top 82%",
            },
          });
        });

      /* Cards reveal */

      gsap.utils
        .toArray<HTMLElement>(
          ".service-card, .styles article, .faq-item, .footer-col"
        )
        .forEach((item) => {
          gsap.from(item, {
            y: 35,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",

            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          });
        });

      /* ---------------------------------------------------
         PHOTO GALLERY — scroll-driven horizontal track

         Vertical scroll pins the gallery and scrubs the
         track horizontally; distance is measured dynamically.
         --------------------------------------------------- */

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const section = gallerySectionRef.current;
        const sticky = galleryStickyRef.current;
        const viewport = galleryViewportRef.current;
        const track = galleryTrackRef.current;

        if (!section || !sticky || !viewport || !track) return;

        const getDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        const galleryTween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: sticky,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        let refreshFrame: number | null = null;
        const refreshGallery = () => {
          if (refreshFrame !== null) return;

          refreshFrame = window.requestAnimationFrame(() => {
            refreshFrame = null;
            ScrollTrigger.refresh();
          });
        };

        const resizeObserver = new ResizeObserver(refreshGallery);
        resizeObserver.observe(viewport);
        resizeObserver.observe(track);

        track
          .querySelectorAll<HTMLImageElement>("img")
          .forEach((img) => {
            if (!img.complete) {
              img.addEventListener("load", refreshGallery, { once: true });
              img.addEventListener("error", refreshGallery, { once: true });
            }
          });

        refreshGallery();

        return () => {
          if (refreshFrame !== null) {
            window.cancelAnimationFrame(refreshFrame);
          }
          resizeObserver.disconnect();
          galleryTween.scrollTrigger?.kill();
          galleryTween.kill();
        };
      });

      /* Image hover */

      gsap.utils
        .toArray<HTMLElement>(
          ".gallery-item, .service-img-wrapper, .styles article, .story img"
        )
        .forEach((item) => {
          const imageElement =
            item.matches("img")
              ? item
              : item.querySelector("img");

          if (!imageElement) return;

          const enter = () => {
            gsap.to(item, {
              y: -5,
              duration: 0.35,
              ease: "power2.out",
            });

            gsap.to(imageElement, {
              scale: 1.06,
              filter: "brightness(1.08)",
              duration: 0.55,
              ease: "power3.out",
            });
          };

          const leave = () => {
            gsap.to(item, {
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            });

            gsap.to(imageElement, {
              scale: 1,
              filter: "brightness(1)",
              duration: 0.55,
              ease: "power3.out",
            });
          };

          item.addEventListener(
            "mouseenter",
            enter
          );

          item.addEventListener(
            "mouseleave",
            leave
          );

          removeHoverListeners.push(() => {
            item.removeEventListener(
              "mouseenter",
              enter
            );

            item.removeEventListener(
              "mouseleave",
              leave
            );
          });
        });
    });

    return () => {
      removeHoverListeners.forEach(
        (removeListener) =>
          removeListener()
      );

      mm.revert();

      context.revert();
    };
  }, []);

  /* =======================================================
     FAQ
     ======================================================= */

  const toggleFaq = (index: number) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  /* =======================================================
     CLOSE MOBILE MENU
     ======================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuSection(null);
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">

      {/* =====================================================
          LANDING SECTION
      ===================================================== */}

      <section
        className="landing-hero relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat flex flex-col justify-between"
        style={{
          backgroundImage: `url(${image(
            "compressed_IMG_1487-F-1.jpg"
          )})`,
        }}
      >

        {/* Background video */}

        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="/backgorund_video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}

        <div
          className="absolute inset-0 z-0 bg-black/35"
          aria-hidden="true"
        />

        {/* =================================================
            FIXED HEADER
        ================================================= */}

        <header className="site-header">

          {/* TOPBAR */}

          <div className="topbar hidden xl:flex">

            <div className="socials">

              <a
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

            </div>

            <div className="topbar-contact">

              <a
                href="mailto:waseemsaleemphotography@gmail.com"
              >
                <FaEnvelope className="text-[11px]" />

                <span>
                  WASEEMSALEEMPHOTOGRAPHY@GMAIL.COM
                </span>
              </a>

              <a
                href="tel:+923048055553"
              >
                <FaPhoneAlt className="text-[11px]" />

                <span>
                  +92 304 8055553
                </span>
              </a>

            </div>

          </div>

          {/* =================================================
              MAIN NAVBAR
          ================================================= */}

          <nav
            className={`home-nav ${
              scrolled
                ? "scrolled"
                : "bg-gradient-to-b from-black/80 to-transparent"
            }`}
          >

            {/* DESKTOP LEFT */}

            <div className="home-links left hidden xl:flex">

              <a
                className="active"
                href="#"
              >
                HOME
              </a>

              <MenuItem
                label="WHAT WE DO"
                items={menus.what}
              />

              <MenuItem
                label="ABOUT"
                items={menus.about}
              />

            </div>

            {/* CENTER LOGO */}

            <a
              href="#"
              className="logo-link"
              aria-label="Waseem Saleem Photography Home"
            >
              <img
                src={image("logo.webp")}
                alt="Waseem Saleem Photography"
              />
            </a>

            {/* DESKTOP RIGHT */}

            <div className="home-links right hidden xl:flex">

              <MenuItem
                label="LOCATION"
                items={menus.location}
              />

              <MenuItem
                label="GALLERY"
                items={menus.gallery}
              />

              <a
                href="/contact"
                className="hover:opacity-80 transition-opacity"
              >
                CONTACT
              </a>

            </div>

            {/* =================================================
                MOBILE HAMBURGER
            ================================================= */}

            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={
                mobileMenuOpen
              }
              aria-controls="mobile-navigation"
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setMobileMenuOpen(true);
                }
              }}
              className={`mobile-menu-button ${
                mobileMenuOpen
                  ? "is-open"
                  : ""
              }`}
            >
              <span />
              <span />
              <span />
            </button>

          </nav>

          {/* =================================================
              MOBILE NAVIGATION
              IMPORTANT:
              This is outside <nav> to avoid stacking issues.
          ================================================= */}

          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
            >

              {/* HOME */}

              <a
                href="#"
                onClick={
                  closeMobileMenu
                }
              >
                HOME
              </a>

              {/* MENU GROUPS */}

              {Object.entries(
                menus
              ).map(
                ([key, items]) => {

                  const sectionLabels: Record<
                    string,
                    string
                  > = {
                    what: "WHAT WE DO",
                    about: "ABOUT",
                    location: "LOCATION",
                    gallery: "GALLERY",
                  };

                  const displayLabel =
                    sectionLabels[key] ||
                    key.toUpperCase();

                  const isOpen =
                    mobileMenuSection ===
                    key;

                  return (
                    <div
                      className="mobile-menu-group"
                      key={key}
                    >

                      {/* GROUP BUTTON */}

                      <button
                        type="button"
                        className="mobile-menu-trigger"
                        aria-expanded={
                          isOpen
                        }
                        aria-controls={`mobile-submenu-${key}`}
                        onClick={() => {
                          setMobileMenuSection(
                            isOpen
                              ? null
                              : key
                          );
                        }}
                      >

                        <span>
                          {displayLabel}
                        </span>

                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            isOpen
                              ? "rotate-180"
                              : ""
                          }`}
                          aria-hidden="true"
                        />

                      </button>

                      {/* SUBMENU */}

                      {isOpen && (
                        <div
                          className="mobile-submenu"
                          id={`mobile-submenu-${key}`}
                        >

                          {items.map(
                            (item) => (
                              <a
                                href={menuHref(
                                  displayLabel,
                                  item
                                )}
                                key={item}
                                onClick={
                                  closeMobileMenu
                                }
                              >
                                {item}
                              </a>
                            )
                          )}

                        </div>
                      )}

                    </div>
                  );
                }
              )}

              {/* CONTACT */}

              <a
                href="/contact"
                onClick={
                  closeMobileMenu
                }
              >
                CONTACT
              </a>

            </div>
          )}

        </header>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="hero-content-wrapper z-10">

          <div className="hero-copy">

            <h1 className="hero-title">
              WEDDING
              <br />
              PHOTOGRAPHER
              <br />
              TIMELESS, CINEMATIC
              <br />
              STORYTELLING
            </h1>

            <p className="hero-subtitle">
              Waseem Saleem Photography offers
              cinematic &amp; timeless wedding
              photography, capturing love, joy,
              and memories with creative elegance
              and storytelling.
            </p>

            <a
              className="hero-gallery-btn"
              href="#gallery"
            >
              SEE OUR WEDDING GALLERY
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          PHOTO GALLERY
      ===================================================== */}

      <section
        className="gallery-intro reveal-section py-20 px-6 max-w-[1400px] mx-auto text-center"
        id="gallery"
      >

        <h2 className="text-3xl font-serif tracking-widest mb-4 uppercase">
          PHOTO GALLERY
        </h2>

        <p className="text-sm text-gray-400 max-w-3xl mx-auto mb-2 leading-relaxed">
          Your wedding day will always be one
          that you remember with immense
          fondness, and the best wedding
          photography in Lahore is offered by us
          to make sure you immortalize that
          special day in the best way possible.
          As some of the best wedding
          photographers in Lahore, we take care
          to make sure all your smiles, gazes,
          and emotions are captured through
          cinematography.
        </p>

        <p className="text-sm font-semibold text-white mb-12">
          Get the best wedding photography
          experience from us.
        </p>

        <div
          className="gallery-section"
          ref={gallerySectionRef}
        >

          <div
            className="gallery-sticky"
            ref={galleryStickyRef}
          >

            <div
              className="gallery-viewport"
              ref={galleryViewportRef}
            >

              <div
                className="gallery-track"
                ref={galleryTrackRef}
              >

                {gallery.map(
                  ([src, alt]) => (
                    <div
                      key={src}
                      className="gallery-item"
                    >
                      <img
                        src={image(src)}
                        alt={alt}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="services-home reveal-section bg-white text-black py-20 px-6"
        id="services"
      >

        <div className="services-container max-w-[1300px] mx-auto text-center">

          <h2 className="text-3xl font-serif tracking-widest mb-14 text-black uppercase">
            OUR SERVICES
          </h2>

          <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map(
              (item) => (
                <article
                  key={item.title}
                  className="service-card flex flex-col items-center text-center bg-white"
                >

                  <div className="service-img-wrapper w-full h-[280px] overflow-hidden mb-6">

                    <img
                      src={image(
                        item.image
                      )}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  <div className="service-content flex flex-col items-center flex-grow w-full px-2">

                    <h3 className="font-serif text-2xl tracking-wide text-black mb-4 uppercase max-w-[260px] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-8 max-w-[360px]">
                      {item.text}
                    </p>

                    <a
                      href="#contact"
                      className="service-btn mt-auto bg-black text-white text-[10px] font-bold tracking-widest px-6 py-3.5 uppercase hover:bg-neutral-800 transition-colors inline-block"
                    >
                      {item.linkText}
                    </a>

                  </div>

                </article>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section
        className="story reveal-section py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        id="about"
      >

        <div>

          <h2 className="text-2xl md:text-4xl font-light tracking-widest leading-snug mb-6">
            EVERY MOMENT DESERVES
            <br />
            TO BE REMEMBERED FOREVER
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Your love story is made of the
            little glances, loud laughter, and
            beautiful chaos you never want to
            forget. We turn those honest moments
            into timeless photographs you can
            relive for generations.
          </p>

          <a
            className="outline-button border border-white px-6 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-all inline-block"
            href="#contact"
          >
            LET YOUR MOMENT BLOOM FOREVER
          </a>

        </div>

        <div>

          <img
            src={image(
              "Waseem-Saleem-home-story-768x997.webp"
            )}
            alt="Wedding photography story"
            className="w-full h-auto object-cover"
          />

        </div>

      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <section className="styles reveal-section py-20 px-6 bg-zinc-950">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-light tracking-widest mb-12">
            WEDDING PHOTOGRAPHY STYLE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <article>

              <img
                src={image(
                  "MGL9816-2-web-768x512.webp"
                )}
                alt="Cinematic"
                className="w-full h-72 object-cover mb-4"
              />

              <h3 className="text-sm tracking-widest font-medium">
                CINEMATIC
              </h3>

            </article>

            <article>

              <img
                src={image(
                  "MGL9434-683x1024.jpg"
                )}
                alt="Light and bright"
                className="w-full h-72 object-cover mb-4"
              />

              <h3 className="text-sm tracking-widest font-medium">
                LIGHT &amp; BRIGHT
              </h3>

            </article>

            <article>

              <img
                src={image(
                  "MGL0576-F-F-min-1536x1024-2-768x512.webp"
                )}
                alt="Dark and dramatic"
                className="w-full h-72 object-cover mb-4"
              />

              <h3 className="text-sm tracking-widest font-medium">
                DARK &amp; DRAMATIC
              </h3>

            </article>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        className="faq-section reveal-section bg-[#f8f8f8] text-black py-28 px-8 md:px-16"
        id="faq"
      >

        <div className="faq-container max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24 items-start">

          <div className="faq-left">

            <h2 className="font-serif text-5xl md:text-6xl xl:text-[68px] leading-[1.08] mb-10 text-black uppercase tracking-wide font-normal">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS
            </h2>

            <a
              href="#contact"
              className="faq-contact-btn inline-block bg-black text-white px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors shadow-sm"
            >
              CONTACT US
            </a>

          </div>

          <div className="faq-right flex flex-col gap-5">

            {faqs.map(
              (faq, index) => {

                const isOpen =
                  openIndex === index;

                return (
                  <div
                    key={index}
                    className={`faq-item transition-all duration-300 ${
                      isOpen
                        ? "bg-white p-8 md:p-10 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                        : "border-b border-gray-300/80 py-6 px-2"
                    }`}
                  >

                    <button
                      type="button"
                      className="faq-question w-full flex justify-between items-center text-left text-base md:text-[17px] font-normal tracking-[0.06em] text-gray-900 uppercase cursor-pointer"
                      onClick={() =>
                        toggleFaq(index)
                      }
                    >

                      <span className="pr-4">
                        {faq.question}
                      </span>

                      <span className="faq-icon-circle w-9 h-9 rounded-full border border-black flex items-center justify-center flex-shrink-0 transition-transform duration-200">

                        {isOpen ? (
                          <FiMinus className="text-base" />
                        ) : (
                          <FiPlus className="text-base" />
                        )}

                      </span>

                    </button>

                    {isOpen && (
                      <div className="faq-answer mt-6 text-sm md:text-base text-gray-600 leading-[1.8] font-light max-w-[720px]">

                        <p>
                          {faq.answer}
                        </p>

                      </div>
                    )}

                  </div>
                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="site-footer reveal-section bg-black text-white pt-24 pb-12 px-8 border-t border-white/10"
        id="contact"
      >

        <div className="footer-container max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20 items-start">

          {/* FOOTER COLUMN 1 */}

          <div className="footer-col flex flex-col items-center">

            <img
              src="/images/logo.webp"
              alt="Waseem Saleem Photography"
              className="h-16 md:h-20 object-contain mb-8"
            />

            <h3 className="font-serif text-2xl tracking-[0.18em] mb-6 uppercase text-white font-normal">
              FOLLOW US
            </h3>

            <div className="footer-socials flex justify-center gap-5">

              <a
                href="#"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* FOOTER COLUMN 2 */}

          <div className="footer-col flex flex-col items-center">

            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.18em] mb-8 uppercase text-white font-normal">
              CONTACT
            </h2>

            <p className="text-base text-gray-200 mb-4 tracking-wide font-light">

              <a
                href="mailto:waseemsaleemphotography@gmail.com"
                className="hover:underline"
              >
                waseemsaleemphotography@gmail.com
              </a>

            </p>

            <p className="text-base text-gray-200 mb-2 tracking-wide font-light">
              +92 309-925 2015
            </p>

            <p className="text-base text-gray-200 tracking-wide font-light">
              +92 304-805 5553
            </p>

          </div>

          {/* FOOTER COLUMN 3 */}

          <div className="footer-col flex flex-col items-center">

            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.18em] mb-8 uppercase text-white font-normal">
              LOCATIONS
            </h2>

            <p className="text-base text-gray-200 max-w-[320px] leading-relaxed mb-6 font-light">
              We providing the best photography
              services in Major Areas.
            </p>

            <p className="text-base text-gray-200 mb-2 tracking-wide font-light">
              Lahore – Islamabad
            </p>

            <p className="text-base text-gray-200 tracking-wide font-light">
              Karachi
            </p>

          </div>

        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom max-w-[1350px] mx-auto text-center flex flex-col items-center gap-3 pt-10 border-t border-white/10 text-sm md:text-base text-gray-300 tracking-wide font-light">

          <p>
            Copyright © 2026 – Waseem Saleem Photography |
            Terms &amp; Conditions | Privacy Policy
          </p>

          <p className="text-gray-300">

            Designed By{" "}

            <a
              href="#"
              className="text-white underline hover:text-gray-200 font-normal"
            >
              Ifra Fatima
            </a>

          </p>

        </div>

      </footer>

    </main>
  );
}
