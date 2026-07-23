import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Latest news and insights from Los Angeles Fashion Consulting on fashion manufacturing, design, sourcing, and building a clothing brand.',
};

export default function BlogPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[#d96a4b] text-sm font-semibold tracking-[0.25em] uppercase mb-4 text-center">
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Latest News
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {post.image ? (
                <div className="relative aspect-[8/5]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="aspect-[8/5] bg-[#f3c1ac] flex items-center justify-center">
                  <span className="text-white font-bold text-lg px-6 text-center">
                    {post.category}
                  </span>
                </div>
              )}
              <div className="p-6">
                <p className="text-[#d96a4b] text-sm mb-2">
                  {post.date} &bull; {post.category}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#d96a4b] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                <span className="inline-block mt-4 text-[#d96a4b] font-semibold text-sm">
                  read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
