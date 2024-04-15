import { axiosClient } from "./AxiosClient";

function fetchAllCategories() {
  return axiosClient.get("/get_all_cats").then((res) => {
    return res.data.data.categories;
  });
}
function fetchAllProperties(cat: number) {
  return axiosClient
    .get("/properties", {
      params: { cat },
    })
    .then((res) => {
      return res.data.data;
    });
}

function fetchAllOptions(optionId: number) {
  return axiosClient.get(`/get-options-child/${optionId} `).then((res) => {
    return res.data.data;
  });
}

const getRequests = {
  fetchAllCategories,
  fetchAllProperties,
  fetchAllOptions,
};

export const carsClient = {
  ...getRequests,
};
