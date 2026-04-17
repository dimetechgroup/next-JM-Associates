// utils/hooks/useDefaultSectionArray.ts
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../functions/axios";

export const useDefaultSectionArray = (endpoint: string) => {
  const [sectionArray, setSectionArray] = useState<DefaultSectionInterface[]>(
    []
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  const fetchHowWeDoit = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axiosInstance.get<DefaultSectionInterface[]>(
        `https://cms.jmassociates.co.ke/api/content/items/${endpoint}?locale=en`
      );
      setSectionArray(data); // Set fetched data
      console.log("Fetched data for", endpoint, ":", data);
    } catch (axiosError: unknown) {
      // Handle errors
      const message =
        axiosError instanceof Error
          ? axiosError.message
          : "An unknown error occurred";
      setError(message);
    } finally {
      setLoading(false); // Stop loading
    }
  }, [endpoint]);

  // Fetch data on endpoint change
  useEffect(() => {
    fetchHowWeDoit();
  }, [fetchHowWeDoit]);

  // Return data, error, and loading state
  return { sectionArray, error, loading };
};
