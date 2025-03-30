"use strict";
import { DynamicKeyValue } from "@/components/ui-reusables/datatable";
import { getCookie } from "./nookies-cookies";

export class ApiService {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getToken(): string | undefined {
    const token = getCookie("auth-token");
    return token;
  }

  public async request(
    endpoint: string | null,
    method: "GET" | "POST" | "PUT" | "DELETE",
    params?: DynamicKeyValue,
    data?: unknown
  ): Promise<any> {
    const url = new URL(`${this.baseUrl}${endpoint || ""}`);
    console.log(url);
    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value as string)
      );
    }


    const fetchOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
        Cookie: document.cookie,
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  }

  public get = (
    endpoint: string | null,
    params?: DynamicKeyValue
  ): Promise<any> => this.request(endpoint, "GET", params);

  public post = (endpoint: string | null, data?: unknown): Promise<any> =>
    this.request(endpoint, "POST", undefined, data);

  public put = (endpoint: string | null, data?: unknown): Promise<any> =>
    this.request(endpoint, "PUT", undefined, data);

  public delete = (
    endpoint: string | null,
    params?: DynamicKeyValue
  ): Promise<any> => this.request(endpoint, "DELETE", params);
}



 const apiService = new ApiService("http://localhost:8000/api/");
// const apiService = new ApiService("https://mysissoft.site/api/");

 console.log("apiService url : ", apiService.baseUrl);

export { apiService } ;