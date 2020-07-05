import axios from "axios";

const KEY = "AIzaSyCiLwe_kJdDxKUh5rYuDfp5Onx0LRD-8Wo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyCiLwe_kJdDxKUh5rYuDfp5Onx0LRD-8Wo",
    part: "snippet",
    maxResults: 5,
  },
});
