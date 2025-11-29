"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "@/lib/mdx-components";

/**
 * Componente para renderizar MDX compilado por Contentlayer
 *
 * Nota: ESLint marca esto como "crear componentes durante render"
 * pero es un falso positivo. useMDXComponent está diseñado específicamente
 * para usarse de esta forma y maneja la memoization internamente.
 */
export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
      {/* @ts-expect-error - ESLint false positive for MDX component pattern */}
      <Component components={mdxComponents} />
    </div>
  );
}
