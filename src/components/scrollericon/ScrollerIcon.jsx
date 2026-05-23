"use client";

import TabView from "../tabview/TabView";

export default function SkillsScroller({ skills = [] }) {

  if (!skills.length) return null;

  function stripHtml(html) {
    if (!html || typeof html !== "string") return "";
    return html.replace(/<[^>]+>/g, "");
  }

  const tabs = skills.map((item, index) => {

  const icon =
    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  return {

    name: icon ? (
      <img
        key={index}
        src={icon}
        alt={stripHtml(item.title?.rendered)}
        className="w-14 h-auto mx-auto"
      />
    ) : null,
    

    title: stripHtml(item.title?.rendered || ""),

    content: (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: item.content?.rendered || "",
        }}
      />
    ),

    code: item.acf?.code_snippet || "",

  };

  });

  return (
    <TabView tabs={tabs} />
  );

}