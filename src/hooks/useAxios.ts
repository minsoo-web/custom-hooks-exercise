import axios, { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

interface AxiosOptions {
  url: string;
}

const useAxios = ({
  axiosInstance = axios,
  options
}: {
  axiosInstance?: AxiosInstance;
  options: AxiosOptions;
}) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState<Date>(new Date());

  const refetching = () => {
    setState({
      ...state,
      loading: true
    });

    setTrigger(new Date());
  };

  useEffect(() => {
    axiosInstance(options)
      .then(response => {
        setState({
          ...state,
          loading: false,
          data: response.data,
          error: null
        });
      })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          data: null,
          error: error
        });
      });
  }, [trigger]);

  return { ...state, refetching };
};

export default useAxios;
