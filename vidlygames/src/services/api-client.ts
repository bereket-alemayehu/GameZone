import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "811a9c40b10e4ec381b643d58958f6a2",
  },
});
