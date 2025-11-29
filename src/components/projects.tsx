import VerticalTimeline from "./shared/vertical-timeline";

type Project = {
  title: string;
  start_date: string;
  end_date: string;
  description: string;
  stack: { icon: string; name: string }[];
};

const listProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    start_date: "Jan 2022",
    end_date: "Dec 2022",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
    stack: [
      { icon: "🟦", name: "Next.js" },
      { icon: "🟦", name: "TypeScript" },
    ],
  },
  {
    title: "WebApp",
    start_date: "Jan 2025",
    end_date: "May 2025",
    description: "test description",
    stack: [
      { icon: "🟦", name: "Next.js" },
      { icon: "🟦", name: "TypeScript" },
    ],
  },
  {
    title: "WebApp",
    start_date: "Jan 2025",
    end_date: "May 2025",
    description: "test description",
    stack: [
      { icon: "🟦", name: "Next.js" },
      { icon: "🟦", name: "TypeScript" },
    ],
  },
];

export default function Projects() {
  return (
    <div className="w-full">
      <h2 id="projects" className="text-3xl font-bold mb-6">
        Projects
      </h2>
      <div className="grid gap-6">
        <VerticalTimeline items={listProjects} />
      </div>
    </div>
  );
}
