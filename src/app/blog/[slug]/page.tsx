import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-data';
import { getPost, toRenderPost, type RenderPost } from '@/lib/api';

const SITE_DOMAIN = 'losangelesfashionconsulting.com';

export const revalidate = 60;

async function resolvePost(slug: string): Promise<RenderPost | undefined> {
  const apiPost = await getPost(SITE_DOMAIN, slug);
  if (apiPost) return toRenderPost(apiPost);
  return getPostBySlug(slug);
}


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await resolvePost(slug);

  if (!post) notFound();

  return (
    <article className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="text-[#d96a4b] hover:text-[#c05a3d] mb-6 inline-block font-medium"
        >
          &larr; Back to Blog
        </Link>
        <p className="text-[#d96a4b] text-sm mb-4">
          {post.date} &bull; {post.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{post.title}</h1>

        {post.image && (
          <div className="relative aspect-[8/5] mb-12 rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <div className="max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                  {paragraph.slice(3)}
                </h2>
              );
            } else if (paragraph.startsWith('### ')) {
              return (
                <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">
                  {paragraph.slice(4)}
                </h3>
              );
            } else if (paragraph.startsWith('- ')) {
              return (
                <ul key={i} className="list-disc list-inside text-gray-700 my-4 space-y-1">
                  {paragraph
                    .split('\n')
                    .filter((l) => l.startsWith('- '))
                    .map((item, j) => (
                      <li
                        key={j}
                        dangerouslySetInnerHTML={{
                          __html: item
                            .slice(2)
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>'),
                        }}
                      />
                    ))}
                </ul>
              );
            } else {
              return (
                <p
                  key={i}
                  className="text-gray-700 mb-4 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="text-gray-900">$1</strong>'
                    ),
                  }}
                />
              );
            }
          })}
        </div>

        {/* CTA at end of post */}
        <div className="mt-16 bg-[#de5b40] rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Elevate Your Fashion Brand?
          </h2>
          <p className="text-white/90 mb-8">
            Get a FREE consultation with Los Angeles Fashion Consulting.
          </p>
          <Link
            href="/free-consultation"
            className="inline-block bg-white text-[#de5b40] px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Your FREE Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
