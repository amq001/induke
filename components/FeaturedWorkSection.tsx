"use client";

import { useMemo, useState } from "react";
import HeadingComponent from "./HeadingComponent";
import ProjectCard from "./ProjectCard";
import SectionEyebrow from "./SectionEyebrow";
import { portfolioCategories, portfolioData } from "@/constants/data";

const INITIAL_COUNT = 8;

const FeaturedWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const tabs = useMemo(
    () => [
      { label: "All", count: portfolioData.length },
      ...portfolioCategories.map((category) => ({
        label: category,
        count: portfolioData.filter((p) => p.category === category).length,
      })),
    ],
    []
  );

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioData
        : portfolioData.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const visibleProjects = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const remaining = filtered.length - visibleProjects.length;

  const handleTabChange = (label: string) => {
    setActiveCategory(label);
    setShowAll(false);
  };

  return (
    <section id="work" className="w-full scroll-mt-24 bg-black py-20 md:py-32">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6">
          <SectionEyebrow label="Featured Work" accent="#8B5CF6" dark={true} />
          <HeadingComponent
            heading="Recent work we're proud of"
            description="A few of the products we've helped take from idea to production."
            variant="secondary"
            textCentered={true}
            italicWord="proud"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTabChange(tab.label)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === tab.label
                  ? "border-transparent bg-white text-black"
                  : "border-white/15 text-gray-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-xs ${
                  activeCategory === tab.label
                    ? "bg-black/10 text-black"
                    : "bg-white/10 text-gray-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {remaining > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/30 hover:text-white"
          >
            View {remaining} More Project{remaining > 1 ? "s" : ""}
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
