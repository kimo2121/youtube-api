import axios from "axios";
import KEY from "../apiKey";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY,
  },
});
