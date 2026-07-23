import type { Metadata } from 'next';
import BookingEmbed from '@/components/BookingEmbed';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'FREE Consultation',
  description:
    'Get a FREE consultation with Los Angeles Fashion Consulting. Book a time with our expert team or send us a message about your fashion brand.',
};

export default function FreeConsultationPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#d96a4b] text-sm font-semibold tracking-[0.25em] uppercase mb-6">
            Let&apos;s Talk About Your Brand
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Fill Out the Form Below to Get a FREE Consultation
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Book a time that works for you, or send us a message and our team will reach out.
          </p>
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <BookingEmbed />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Prefer to Send a Message?
          </h2>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
