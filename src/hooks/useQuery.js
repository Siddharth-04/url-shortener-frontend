import { useQuery } from "@tanstack/react-query";
import api from "../api/api";


export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shorten-urls"],
    queryFn: async () => {
      const response = await api.get(
        "api/urls/myurls",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response;
    },
    enabled: !!token,
    select: (data) => {
      const sortedData = data.data.sort(
        (a,b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sortedData;
    },
    onError,
    staleTime: 5000,
  });
};

export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick"],
    queryFn: async () => {
      const response = await api.get(
        "api/urls/totalClicks?startDate=2024-12-01&endDate=2035-06-12",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response;
    },
    enabled: !!token,
    select: (data) => {
      const convertToArray = Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key],
      }));
      return convertToArray;
    },
    onError,
    staleTime: 5000,
  });
};
