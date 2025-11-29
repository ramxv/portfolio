import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

/**
 * Componentes personalizados para MDX
 * Estos reemplazan los elementos HTML por defecto con componentes React
 */
export const mdxComponents: MDXComponents = {
  // ===== Headings con estilos Tailwind =====
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-100">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-100">
      {children}
    </h3>
  ),

  // ===== Enlaces: externos vs internos =====
  a: ({ href, children }) => {
    // Si es enlace externo, abre en nueva pestaña
    if (href?.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
          <span className="ml-1 text-xs align-super">↗</span>
        </a>
      );
    }

    // Si es enlace interno, usa next/link
    return (
      <Link
        href={href || "#"}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </Link>
    );
  },

  // ===== Imágenes con next/image =====
  img: ({ src, alt }) => {
    if (!src) return null;

    return (
      <figure className="my-8">
        <Image
          src={src}
          alt={alt || ""}
          width={1200}
          height={600}
          className="rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        {alt && (
          <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },

  // ===== Code inline vs code blocks =====
  code: ({ children, className }) => {
    // Code block (tiene className con lenguaje)
    if (className) {
      return <code className={`${className} text-sm`}>{children}</code>;
    }

    // Inline code
    return (
      <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 text-sm font-mono">
        {children}
      </code>
    );
  },

  // ===== Blockquotes con estilo =====
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 p-4 italic">
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </blockquote>
  ),

  // ===== Listas =====
  ul: ({ children }) => (
    <ul className="my-4 space-y-2 list-disc list-inside">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="my-4 space-y-2 list-decimal list-inside">{children}</ol>
  ),

  // ===== Tablas =====
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        {children}
      </table>
    </div>
  ),

  th: ({ children }) => (
    <th className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
      {children}
    </td>
  ),
};
