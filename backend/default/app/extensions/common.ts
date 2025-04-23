import { Router, response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import BaseController from '../controllers/BaseController';



declare module 'express-serve-static-core' {
  interface Response {
    customJson(data: unknown): Response;
  }

  interface Router {
    resource(path: string, controller: BaseController): this;
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

    return this;
  },
});

Router.prototype.resource = function (
  path: string,
  controller: BaseController
): Router {
  const base = `/${path}`;
  const id = `${base}/:id`;

  if (controller.index) {
    this.get(base, controller.index);
  }
  if (controller.show) {
    this.get(id, controller.show);
  }
  if (controller.store) {
    this.post(base, controller.store);
  }
  if (controller.update) {
    this.put(id, controller.update);
    this.patch(id, controller.update);
  }
  if (controller.destroy) {
    this.delete(id, controller.destroy);
  }

  return this;
};


// declare module 'express-serve-static-core' {
//     interface Router {
//         resource(path: string, controller: ResourceController): this;
//     }
// }
