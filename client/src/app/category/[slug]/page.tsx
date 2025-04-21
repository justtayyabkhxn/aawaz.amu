import { notFound } from 'next/navigation';

const mockPosts = {
  rants: [
    { id: 1, text: 'Why is the Wi-Fi always down during exams?!' },
    { id: 2, text: 'Canteen food is getting worse every day.' },
  ],
  suggestions: [
    { id: 1, text: 'We should have a book exchange shelf in the library.' },
    { id: 2, text: 'More power sockets in classrooms, please.' },
  ],
  complaints: [],
  protests: [],
  advice: [],
  confessions: [],
};

export async function generateStaticParams() {
  return Object.keys(mockPosts).map((slug) => ({ slug }));
}

type CategoryPageProps = {
  params: { slug: string };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const posts = mockPosts[slug as keyof typeof mockPosts];

  if (!posts) return notFound();

  return (
    <main className="min-h-screen bg-zinc-900 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold capitalize mb-6">
          {slug.replace(/-/g, ' ')}
        </h1>

        {posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-zinc-800 p-4 rounded-xl shadow-md text-zinc-100"
              >
                {post.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-zinc-400 italic">No posts yet in this category.</p>
        )}
      </div>
    </main>
  );
}
