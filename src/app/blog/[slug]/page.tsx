import { allPosts } from "@/contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import Container from "@/components/shared/container";

export async function generateStaticParams() {
  return allPosts.map((blog) => ({ slug: blog.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <article className="py-16">
        <header className="mb-8 border-b pb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime} min de lectura</span>
          </div>

          {post.description && (
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              {post.description}
            </p>
          )}
        </header>

        <MDXContent code={post.body.code} />
      </article>
    </Container>
  );
}
