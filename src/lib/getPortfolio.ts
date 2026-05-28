import { api } from "./api";

// GET ALL SERVICES
export async function getPortfolio() {
  try {
    const res = await api.get("/portfolio?_embed");
    return res.data;
  } catch (e) {
    console.error("Portfolio fetch failed:", e);
    return [];
  }
}

// GET SINGLE SERVICE BY SLUG
export async function getPortfolioBySlug(slug: string) {
  try {
    const res = await api.get(
      `/portfolio?slug=${encodeURIComponent(slug)}&_embed`
    );

    console.log("PORTFOLIO FETCH:", slug, res.data);

    return res.data && res.data.length ? res.data[0] : null;
  } catch (e) {
    console.error("Portfolio fetch failed:", e);
    return null;
  }
}