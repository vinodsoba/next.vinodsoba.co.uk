import { api } from "./api";

export async function getSkills() {
  const res = await api.get("/skill?_embed");

  return res.data.sort(
    (a: any, b: any) => a.menu_order - b.menu_order
  );
}