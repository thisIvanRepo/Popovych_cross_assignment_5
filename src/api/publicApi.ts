import axios from "axios";

const publicApi = axios.create({
  baseURL: "https://6836f5c9664e72d28e42e021.mockapi.io/",
});

export default publicApi;
