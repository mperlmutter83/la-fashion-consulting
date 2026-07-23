import type { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Los Angeles Fashion Consulting for unparalleled guidance in fashion manufacturing, design, and sourcing. Call (310) 597-4142.',
};

const faqs = [
  {
    q: 'What services do you offer for fashion startups?',
    a: 'We provide comprehensive consulting services including brand development, product sourcing, and manufacturing guidance tailored for emerging fashion brands.',
  },
  {
    q: 'How can you help with sustainable fashion?',
    a: 'Our team specializes in sustainable practices, offering strategies for eco-friendly sourcing and production to minimize environmental impact.',
  },
  {
    q: 'Do you assist with international sourcing?',
    a: 'Yes, we have a global network of suppliers and can facilitate international sourcing to meet your specific needs.',
  },
  {
    q: 'What is your approach to fashion design consulting?',
    a: 'We collaborate closely with clients to refine their design concepts, ensuring alignment with market trends and brand identity.',
  },
  {
    q: 'Can you help with production management?',
    a: 'Absolutely, we offer end-to-end production management services to streamline your manufacturing process and ensure quality control.',
  },
  {
    q: 'How do you support established brands?',
    a: 'For established brands, we provide strategic consulting to enhance brand positioning, expand market reach, and optimize operations.',
  },
];

const testimonials = [
  {
    text: 'Los Angeles Fashion Consulting transformed our brand vision into reality. Their expertise in the fashion industry is unparalleled.',
    name: 'Jessica M.',
    role: 'Founder, Urban Threads',
  },
  {
    text: 'Their guidance on sustainable practices helped us significantly reduce our environmental footprint while maintaining quality.',
    name: 'Michael R.',
    role: 'CEO, GreenWear',
  },
  {
    text: 'The team at Los Angeles Fashion Consulting is incredibly knowledgeable and supportive. They helped us navigate complex manufacturing challenges with ease.',
    name: 'Sophia L.',
    role: 'Creative Director, Luxe Apparel',
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

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#d96a4b] text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Connect with Fashion Experts
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Contact Los Angeles Fashion Consulting
          </h1>
          <p className="text-gray-600 text-lg">
            Reach out to us for unparalleled guidance in fashion manufacturing, design, and
            sourcing. Let us help you bring your brand vision to life.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Phone</h2>
            <a href="tel:+13105974142" className="text-[#d96a4b] font-semibold hover:underline">
              (310) 597-4142
            </a>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Email</h2>
            <a
              href="mailto:info@losangelesfashionconsulting.com"
              className="text-[#d96a4b] font-semibold hover:underline break-all"
            >
              info@losangelesfashionconsulting.com
            </a>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Address</h2>
            <p className="text-gray-600">Los Angeles, CA</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Schedule Your Consultation
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Fill out the form below to book a personalized consultation with our expert team.
            Discover how we can elevate your brand in the competitive fashion industry.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Common Inquiries About Our Consulting Services
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Explore answers to the most frequent questions we receive about our fashion
            consulting services.
          </p>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#d96a4b] text-xl ml-4 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-8 shadow-lg">
                <Stars />
                <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#de5b40] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Connect with Our Fashion Experts
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Ready to elevate your brand to new heights? Contact us today to learn how our
            expert consulting services can transform your fashion business. Schedule a
            consultation and take the first step towards success with Los Angeles Fashion
            Consulting.
          </p>
          <a
            href="tel:+13105974142"
            className="inline-block bg-white text-[#de5b40] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Call (310) 597-4142
          </a>
        </div>
      </section>
    </>
  );
}
