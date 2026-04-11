"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="large"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Order",
          id: "contact",
        },
      ]}
      brandName="Sammy's Downtown Deli"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Real Deli. Real Good."
      description="Hand-sliced meats, fresh-baked bread, and the kind of sandwiches that people drive across town for — right in the heart of downtown Annapolis."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "The corned beef Reuben was the best I've ever had. Felt like family!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-sandwich-with-salami-vegetables-table_23-2148590182.jpg",
        },
        {
          name: "Jake S.",
          handle: "@jakes",
          testimonial: "Owner recommended a sandwich, he was right. Dill pickle was amazing.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/turkey-sandwich-with-cranberry-sauce-thanksgiving-wooden-table_123827-35056.jpg",
        },
        {
          name: "Christal W.",
          handle: "@christalw",
          testimonial: "Excellent sandwiches, cute market. Very personable service.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-toast-with-blackberry-jam-vegan-cream-cheese_53876-41250.jpg",
        },
        {
          name: "Mike R.",
          handle: "@miker",
          testimonial: "The perfect lunch spot. Always fresh and quick!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-salmon-sandwich_23-2148640242.jpg",
        },
        {
          name: "Emily P.",
          handle: "@emilyp",
          testimonial: "Friendly atmosphere and high-quality ingredients.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg?_wi=1",
        },
      ]}
      tag="Since the early days"
      buttons={[
        {
          text: "See Our Menu",
          href: "#menu",
        },
        {
          text: "Call (410) 263-6883",
          href: "tel:4102636883",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-open-sandwich-wooden-board_23-2147749516.jpg"
      imageAlt="fresh artisanal deli sandwich close up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-open-sandwich-wooden-board_23-2147749516.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/green-living-man-enjoying-fresh-smell-locally-grown-lemons-zero-waste-supermarket-customer-happy-find-eco-friendly-organic-fruits-local-neighborhood-store_482257-69679.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/traditional-choripan-argentina-sandwich-with-chorizo-chimichurri-sauce-isolated-white-background_123827-29620.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg",
          alt: "Customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-showing-eclairs-bakery-counter_23-2148189123.jpg",
          alt: "Customer portrait",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="A neighborhood deli with soul"
      description="Tucked on Randall Street just steps from Annapolis's waterfront, Sammy's Downtown Deli is the kind of place you stumble upon — and never forget. We believe a great sandwich is built with care: meat sliced fresh at the counter, bread chosen to complement, and no shortcuts."
      tag="Our Story"
      bulletPoints={[
        {
          title: "4.3★ Rating",
          description: "Highly reviewed by locals",
        },
        {
          title: "Fresh, Never Frozen",
          description: "Hand-sliced daily",
        },
        {
          title: "47 Randall St",
          description: "Downtown Annapolis location",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/green-living-man-enjoying-fresh-smell-locally-grown-lemons-zero-waste-supermarket-customer-happy-find-eco-friendly-organic-fruits-local-neighborhood-store_482257-69679.jpg"
      imageAlt="cozy neighborhood deli interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Corned Beef Reuben",
          price: "$13",
          variant: "Best Seller",
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-choripan-argentina-sandwich-with-chorizo-chimichurri-sauce-isolated-white-background_123827-29620.jpg",
        },
        {
          id: "p2",
          name: "Classic Turkey Club",
          price: "$12",
          variant: "Fresh sliced",
          imageSrc: "http://img.b2bpic.net/free-photo/vietnamese-banh-mi-sandwich-wooden-table_123827-31223.jpg",
        },
        {
          id: "p3",
          name: "Roast Beef Hoagie",
          price: "$13",
          variant: "Fan Favorite",
          imageSrc: "http://img.b2bpic.net/free-photo/bacon-sandwich-with-lettuce-tomato-wooden-table-copy-space_123827-35400.jpg",
        },
        {
          id: "p4",
          name: "Italian Sub",
          price: "$12",
          variant: "Traditional",
          imageSrc: "http://img.b2bpic.net/free-photo/tuna-sandwich-with-mayo-vegetables-gray-stone-background_123827-23250.jpg",
        },
        {
          id: "p5",
          name: "Tuna Salad Melt",
          price: "$11",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/toast-with-vegetables-salami-desk_23-2148590159.jpg",
        },
        {
          id: "p6",
          name: "Veggie Stacker",
          price: "$10",
          variant: "Fresh",
          imageSrc: "http://img.b2bpic.net/free-photo/sandwich-with-meat-vegetables-slices-rye-bread_2829-19880.jpg",
        },
      ]}
      title="Our Menu"
      description="Fresh, hand-crafted sandwiches made to order daily."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "Best Reuben ever. Service is so homey!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Jake S.",
          handle: "@jakes",
          testimonial: "Perfect sandwiches, reminded me of home.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-showing-eclairs-bakery-counter_23-2148189123.jpg",
        },
        {
          id: "3",
          name: "Christal W.",
          handle: "@christalw",
          testimonial: "Personalized service, awesome food.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-beef-kebab-bread-cafe_140725-5033.jpg",
        },
        {
          id: "4",
          name: "David M.",
          handle: "@davidm",
          testimonial: "The best deli spot in Annapolis.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/thrilled-confident-manager-business-attire-celebrates-victorious-milestone_482257-111932.jpg",
        },
        {
          id: "5",
          name: "Lisa B.",
          handle: "@lisab",
          testimonial: "Always fresh, always friendly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-taking-photos_23-2149250065.jpg",
        },
      ]}
      showRating={true}
      title="Guests Love Sammy's"
      description="Don't take our word for it — hear what our neighborhood regulars have to say."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Get in touch"
      title="Call us to order"
      description="Ready to eat? Place your order ahead of time and we'll have it ready when you walk through the door."
      inputPlaceholder="410-263-6883"
      buttonText="Call Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Sammy's Downtown Deli"
      leftLink={{
        text: "© 2025 Sammy's Downtown Deli",
        href: "#top",
      }}
      rightLink={{
        text: "47 Randall St, Annapolis, MD",
        href: "https://maps.google.com/?q=47+Randall+St+Annapolis+MD",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
