import axios from 'axios';
import { requestOnResolve, responseOnReject } from '@/api/interceptors';

export type ApiResponse<R = any> = {
  result: boolean,
  status: number,
  data: R,
  meta?: any,
  headers?: Record<any, any>,
}

export type RequestProps = {
  method: 'get' | 'post' | 'patch' | 'put' | 'delete',
  path: string,
  payload: any,
}

export const createHttpTransport = ({
  url = '',
  headers = {},
}) => {
  const api = axios.create({
    baseURL: url,
    timeout: 15000,
    headers,
  });
  api.interceptors.request.use(requestOnResolve, ((error) => error));
  api.interceptors.response.use((response) => response, responseOnReject);

  const request = async <Response>(
    { method, path, payload }: RequestProps,
  ): Promise<ApiResponse<Response>> => {
    try {
      const { status, data, headers } = await api[method](
        path,
        payload,
      );

      return {
        result: true,
        data: data || null,
        status,
        headers: headers || null,
      };
    } catch (err: any) {
      return {
        result: false,
        status: err.response?.status,
        data: err.response?.data || null,
      };
    }
  };

  const get = <Response>(
    path: string,
    queryParams?: any,
  ) => request<Response>({
    method: 'get',
    path,
    payload: { params: queryParams },
  });

  const post = <Response>(
    path: string,
    payload?: any,
  ) => request<Response>({
    method: 'post',
    path,
    payload,
  });

  const put = <Response>(
    path: string,
    payload?: any,
  ) => request<Response>({
    method: 'put',
    path,
    payload,
  });

  const patch = <Response>(
    path: string,
    payload?: any,
  ) => request<Response>({
    method: 'patch',
    path,
    payload,
  });

  const del = <Response>(
    path: string,
    payload?: any,
  ) => request<Response>({
    method: 'delete',
    path,
    payload: {
      data: payload,
    },
  });

  return {
    get,
    post,
    put,
    patch,
    del,
  };
};
