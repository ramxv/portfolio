import {
  defineDocumentType,
  LocalDocument,
  makeSource,
} from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx" as const,
  fields: {
    title: { type: "string" as const, required: true },
    date: { type: "date" as const, required: true },
    description: { type: "string" as const, required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, ""),
    },
    readingTime: {
      type: "number",
      resolve: (doc: LocalDocument): number => {
        // Contar palabras (elimina espacios vacíos y calcula WPM)
        const words = doc.body.raw.trim().split(/\s+/).filter(Boolean).length;
        const wordsPerMinute = 200; // Velocidad promedio de lectura
        return Math.ceil(words / wordsPerMinute);
      },
    },
    excerpt: {
      type: "string",
      resolve: (doc) => {
        // Si hay description manual, úsala
        if (doc.description) {
          return doc.description;
        }
        // Sino, genera automático: primeras 30 palabras
        const text = doc.body.raw
          .replace(/^---[\s\S]*?---/, "") // Quitar frontmatter
          .replace(/#+\s/g, "") // Quitar headings (#)
          .replace(/[*_`]/g, "") // Quitar markdown (bold, italic, code)
          .trim();
        const words = text.split(/\s+/).slice(0, 30);
        return words.join(" ") + "...";
      },
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/blog/${doc._raw.flattenedPath.replace(/^blog\//, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append", // Añade # al final en vez de envolver
          properties: {
            className: ["heading-anchor"], // Añade clase para estilos
            ariaLabel: "Enlace directo al encabezado",
          },
        },
      ],
    ],
  },
});
