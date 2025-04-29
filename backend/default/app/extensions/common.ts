import { Router, response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import BaseController from '../controllers/BaseController';
import express from 'express';

declare module 'express-serve-static-core' {
  interface Response {
    customJson(data: unknown): Response;
  }



  


  interface Router {
    group(
      prefix: string,
      callback: (router: Router) => void,
      middleware?: RequestHandler | RequestHandler[]
    ): Router;
    resource(
      path: string,
      controller: BaseController,
      middleware?: RequestHandler | RequestHandler[]
    ): Router;
  }
}


Object.defineProperty(response, 'customJson', {
  value: function ({ data, success, msg }) {
    // Add custom behavior here, e.g., logging or wrapping the response
    this.json({
      success: success ?? true,
      data: data,
      msg: msg ?? 'İşlem Başarılı',
    });
  },
  enumerable: false,
  configurable: true,
  writable: true,
});




Object.defineProperty(Router, 'group', {
  value: function (
    prefix: string,
    callback: (router: Router) => Router,
    middleware?: RequestHandler | RequestHandler[]
  ): Router {
    prefix = `/${prefix}`;
    const router = Router();
   
    if (middleware) {
      router.use(middleware);
    }

    callback(router);
    
    if (prefix) {
      this.use(prefix, router);
    } else {
      this.use(router);
    }

    

    return this;
  },
});

Object.defineProperty(Router, 'resource', {
  value: function (path: string, controller: BaseController) {
    const base = `/${path}`;
    const id = `${base}/:id`;
    if (controller.index) {
      this.get(base, async (req, res) => await controller.index(req, res));
    }

    if (controller.show) {
      this.get(id, async (req, res) => await controller.show(req, res));
    }
    if (controller.store) {
      this.post(base, async (req, res) => await controller.store(req, res));
    }
    if (controller.update) {
      this.put(id, async (req, res) => await controller.update(req, res));
      this.patch(id, async (req, res) => await controller.update(req, res));
    }
    if (controller.destroy) {
      this.delete(id, async (req, res) => await controller.destroy(req, res));
    }

    if (controller.pluck) {
      this.get(base, async (req, res) => await controller.pluck(req, res));
    }

    return this;
  },
});

// declare module 'express-serve-static-core' {
//     interface Router {
//         resource(path: string, controller: ResourceController): this;
//     }
// }
