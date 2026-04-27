"use client";

import TabView from "../tabview/TabView";

export default function SkillsScroller({ skills = [] }) {
  if (!skills.length) return null;

  function stripHtml(html) {
    if (!html || typeof html !== "string") return "";
    return html.replace(/<[^>]+>/g, "");
  }

  const tabs = skills.map((item) => {
    const icon =
      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

    const image = item.acf?.post_images || null;

    return {
      name: icon ? (
        <img
          src={icon}
          alt={stripHtml(item.title?.rendered)}
          className="w-14 h-auto mx-auto"
        />
      ) : null,

      title: stripHtml(item.title?.rendered || ""),

      content: (
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{
            __html: item.content?.rendered || "",
          }}
        />
      ),

      image: image ? (
        <img
          src={image}
          alt={stripHtml(item.title?.rendered)}
          className="w-full h-auto rounded-xl"
        />
      ) : null,
    };
  });

  return <TabView tabs={tabs} />;
}