import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'Leave Los Angeles Fashion Consulting a review on Google or Yelp. We appreciate your feedback!',
};

const GOOGLE_REVIEW_URL = 'https://g.page/r/Cb65h3UCqnKwEBM/';

export default function ReviewsPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Please Click on the Button Below to Leave Us a Review
        </h1>

        <div className="flex flex-col items-center gap-16">
          <div>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/google-review-logo.png"
                alt="Leave us a Google Review"
                width={400}
                height={150}
                className="mx-auto mb-6"
              />
            </a>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d96a4b] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#c05a3d] transition-colors"
            >
              Click Here to Leave a Google Review
            </a>
          </div>

          <div>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/yelp-reviews.png"
                alt="Leave us a Yelp Review"
                width={400}
                height={150}
                className="mx-auto mb-6"
              />
            </a>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d96a4b] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#c05a3d] transition-colors"
            >
              Click Here to Leave a Yelp Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
