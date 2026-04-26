import { api } from "./api";

// GET ALL SERVICES
export async function getServices() {
  try {
    const res = await api.get("/service?_embed");
    return res.data;
  } catch (e) {
    console.error("Services fetch failed:", e);
    return [];
  }
}

// GET SINGLE SERVICE BY SLUG
export async function getServiceBySlug(slug: string) {
  try {
    const res = await api.get(
      `/service?slug=${encodeURIComponent(slug)}&_embed`
    );

    console.log("SERVICE FETCH:", slug, res.data);

    return res.data && res.data.length ? res.data[0] : null;
  } catch (e) {
    console.error("Service fetch failed:", e);
    return null;
  }
}