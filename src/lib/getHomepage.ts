import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export async function getHomepage() {
  const res = await axios.get(
    "https://vinod-soba.co.uk/wp-json/wp/v2/pages/7",
    { httpsAgent }
  );

  return res.data;
}