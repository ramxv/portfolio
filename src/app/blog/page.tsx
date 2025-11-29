import Container from "@/components/shared/container";
import { allPosts } from "@/contentlayer/generated";
import Link from "next/link";

const blogPosts = allPosts;

export default function BlogPage() {
  return (
    <Container as="main" className="py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Artículos sobre desarrollo web, mejores prácticas y tecnologías
          modernas.
        </p>
      </header>

      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
          >
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                {post.title}
              </h2>
            </Link>
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime} minutos de lectura</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 dark:text-blue-400 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
            >
              Leer más →
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
