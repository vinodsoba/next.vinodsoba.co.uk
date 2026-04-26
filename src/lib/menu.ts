import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export async function getMenu() {
  const response = await axios.get(
    "https://vinod-soba.co.uk/wp-json/wp/v2/header-main-menu",
    {
      httpsAgent,
      timeout: 15000,
    }
  );

  console.log("MENU RESPONSE:", response.data);

  return response.data;
}