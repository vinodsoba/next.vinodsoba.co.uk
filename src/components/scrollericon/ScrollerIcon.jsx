"use client";

import TabView from "../tabview/TabView";

export default function SkillsScroller({ skills = [] }) {
  if (!skills.length) return null;

  const tabs = skills.map((item, i) => {
    const icon =
      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

    const image = item.acf?.post_images || null;

    return {
      name: icon ? (
        <img
          src={icon}
          alt={item.title?.rendered || ""}
          className="w-14 h-auto mx-auto"
        />
      ) : null,

      title: (
        <h4
          key={i}
          className="text-sm font-medium"
          dangerouslySetInnerHTML={{
            __html: item.title?.rendered || "",
          }}
        />
      ),

      content: (
        <div
          dangerouslySetInnerHTML={{
            __html: item.content?.rendered || "",
          }}
        />
      ),

      image: image ? (
        <img
          src={image}
          alt=""
          className="w-full h-auto rounded-xl"
        />
      ) : null,
    };
  });

  return <TabView tabs={tabs} />;
}