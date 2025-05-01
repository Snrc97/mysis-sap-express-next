"use strict";
import { DynamicKeyValue } from "@/components/ui-reusables/datatable";
import { getCookie } from "./nookies-cookies";
import * as restConfig from "@/config/json/rest.config.json";

export class ApiService {
  public name: string;
  public baseUrl: string;

  constructor(name: string, baseUrl: string) {
    this.name = name;
    this.baseUrl = baseUrl;
  }

  private getToken(): string | null {
    if(typeof window !== 'undefined')
    {
      const token = localStorage.getItem('auth-token') ;

      return token;
    }

    return null;
  }

  public async request(
    endpoint: string | null,
    method: "GET" | "POST" | "PUT" | "DELETE",
    params?: DynamicKeyValue,
    data?: unknown
  ): Promise<any> {
    const url = new URL(`${this.baseUrl}${endpoint || ""}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value as string)
      );
    }


    const fetchOptions : RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
        Cookie: document.cookie,
      },
      credentials: "include",
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

class MicroservicesContainer
{
  public services: ApiService[] = [];
  constructor(services: ApiService[]) {
    this.services = services;
  }
  
  public getService(name: string): ApiService | undefined {
    return this.services.find(service => service.name == name);
  }
}

const microServices : ApiService[] = []; 
restConfig.hosts.forEach((service: typeof restConfig.hosts[0]) => {
  const apiService = new ApiService(service.name, service.url);
  microServices.push(apiService);
}, [microServices]);
// const apiService = new ApiService("https://mysissoft.site/api/");

 const microservicesContainer = new MicroservicesContainer(microServices);
 const apiService : ApiService = microservicesContainer.getService("default") ?? new ApiService("default","http://localhost:8000/api/"); 

export { apiService, microservicesContainer } ;