import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Utility function for making HTTP requests.
 * @param url The URL to make the request to.
 * @param config The Axios request configuration.
 * @returns A promise that resolves to the Axios response.
 */
export async function httpClient<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  try {
    const response = await axios(url, config);
    return response;
  } catch (error: any) {
    throw new Error(`HTTP request failed: ${error.message}`);
  }
}