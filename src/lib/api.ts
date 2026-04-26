import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const api = axios.create({
  baseURL: "https://vinod-soba.co.uk/wp-json/wp/v2",
  httpsAgent,
   headers: {
    "Cache-Control": "no-cache",
  },
});