import { notFound } from "next/navigation";

import ProjectPage from "@/components/ProjectPage";

import { ProjectData } from "@/data/projects";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = ProjectData.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}