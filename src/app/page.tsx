import Link from 'next/link';
import Image from 'next/image';

const expertise = [
  {
    title: 'Fashion Design Consulting',
    description:
      'Our expert designers work closely with you to develop unique and trend-setting fashion collections that resonate with your target audience.',
    cta: 'Discover More',
    href: '/free-consultation',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing Solutions',
    description:
      'We provide end-to-end manufacturing services, ensuring your products are produced with the highest standards of quality and efficiency.',
    cta: 'Find Out More',
    href: '/free-consultation',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.142-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Sourcing and Supply Chain',
    description:
      'Navigate the complexities of sourcing with our strategic guidance, connecting you with reliable suppliers and optimizing your supply chain.',
    cta: 'Get Started',
    href: '/free-consultation',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    text: 'I worked with Svetlana and she was amazing! We helped me with everything I need and I needed a lot. I am building my clothing line for baby clothes and she exceeded my expectations which I hear is very hard to do in this industry.',
    name: 'Jessica Colindres',
    role: 'CEO, Sunset Threads',
  },
  {
    text: 'I had a vision for an original design and they brought it to life. I so appreciate the time the team took to understand the concept and execute the pattern to perfection. Their customer service has been great and I love that they are local so you can talk to someone in person. They treat me like family and are excited about my project. I highly recommend this team. Thank you to Rosie and Adam.',
    name: 'FEFU, From Earth For Us',
    role: '',
  },
  {
    text: 'Los Angeles Fashion Consulting did a great job with my production samples and help guide me through this crazy business of fashion. Word to the wise start the process very early if you are doing a specific seasonal collection.',
    name: 'Ross DiLeo',
    role: '',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#de5b40]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 00-1.175 0l-3.367 2.446c-.783.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="relative min-h-[400px] md:min-h-[600px]">
            <Image
              src="/images/hero-model.webp"
              alt="Fashion model - Los Angeles Fashion Consulting"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16">
            <p className="text-[#d96a4b] text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              Elevate Your Fashion Brand
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Welcome to Los Angeles Fashion Consulting
            </h1>
            <p className="text-gray-600 text-lg mb-10">
              Discover unparalleled expertise in fashion manufacturing, design, and
              consulting, tailored to elevate your brand to new heights.
            </p>
            <div>
              <Link
                href="#expertise"
                className="inline-block bg-[#d96a4b] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#c05a3d] transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two feature cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-2 mb-20">
        <div className="grid md:grid-cols-2">
          <div className="bg-[#f3c1ac] px-10 py-12">
            <h2 className="text-2xl font-bold text-white">Innovative Design Solutions</h2>
            <p className="text-white/90 mt-3">
              Transform your creative vision into reality with our cutting-edge design services.
            </p>
          </div>
          <div className="bg-gray-100 px-10 py-12">
            <h2 className="text-2xl font-bold text-gray-900">Seamless Manufacturing</h2>
            <p className="text-gray-600 mt-3">
              Experience efficient and high-quality production processes that bring your products to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-600 text-lg leading-relaxed">
            <p>
              Los Angeles Fashion Consulting is at the forefront of the fashion industry,
              offering a wealth of expertise in manufacturing and design. Based in the heart
              of Los Angeles, our mission is to empower brands to create unique and
              sustainable fashion products. With years of experience, we provide tailored
              solutions that cater to the specific needs of each client, ensuring their
              success in a competitive market.
            </p>
            <p>
              Our team of seasoned professionals is dedicated to guiding brands through every
              stage of the fashion production process. From initial concept to final product,
              we offer comprehensive consulting services that cover design, manufacturing,
              and sourcing. Our commitment to innovation and quality has established us as a
              trusted partner for brands looking to make a mark in the fashion world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise — dark image background */}
      <section id="expertise" className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/expertise-bg.jpeg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Our Expertise</h2>
            <Link
              href="/free-consultation"
              className="inline-block bg-[#d96a4b] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c05a3d] transition-colors w-fit"
            >
              Learn More
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {expertise.map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-10 text-center shadow-xl">
                <div className="text-[#d96a4b] flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-8">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-block bg-[#f3c1ac] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d96a4b] transition-colors"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <svg className="w-12 h-12 mx-auto text-[#d96a4b] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Click Below to See Our Google Reviews
            </h3>
            <a
              href="https://g.page/r/Cb65h3UCqnKwEBM/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/reviews.png"
                alt="Los Angeles Fashion Consulting Google Reviews"
                width={600}
                height={200}
                className="mx-auto"
              />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <Stars />
                <p className="text-gray-600 mb-6 leading-relaxed">{t.text}</p>
                <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
                {t.role && <p className="text-gray-500 text-sm">{t.role}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coral CTA band */}
      <section className="bg-[#de5b40] py-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Elevate Your Fashion Brand Today
          </h2>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-[#de5b40] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shrink-0"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
