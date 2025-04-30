import { Router, response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import BaseController from '../controllers/BaseController';

type RouterCallback = (r: Router) => void;
type MiddlewareOrRouteCallback =
  | RequestHandler
  | RequestHandler[]
  | RouterCallback;
declare module 'express-serve-static-core' {
  interface Response {
    customJson(data: unknown): Response;
  }

  interface Router {
    group(
      prefix: string,
      groupRouteCallback: RouterCallback,
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

Object.defineProperty(Router as any, 'group', {
  value: function (
    prefix: string,
    groupRouteCallback: RouterCallback,
    middleware?: RequestHandler | RequestHandler[]
  ) {
    const subRouter = Router();

    if (middleware) {
      subRouter.use(middleware);
    }

    groupRouteCallback(subRouter);

    this.use(`/${prefix}`, subRouter);

    return this;
  },
});

Object.defineProperty(Router, 'resource', {
  value: function (
    path: string,
    controller: BaseController,
    middleware?: RequestHandler | RequestHandler[]
  ) {
    const base = `/${path}`;
    const id = `${base}/:id`;

    middleware = middleware || [];

    if (controller.index) {
      this.get(
        base,
        middleware,
        async (req, res) => await controller.index(req, res)
      );
    }

    if (controller.show) {
      this.get(
        id,
        middleware,
        async (req, res) => await controller.show(req, res)
      );
    }
    if (controller.store) {
      this.post(
        base,
        middleware,
        async (req, res) => await controller.store(req, res)
      );
    }
    if (controller.update) {
      this.put(
        id,
        middleware,
        async (req, res) => await controller.update(req, res)
      );
      this.patch(
        id,
        middleware,
        async (req, res) => await controller.update(req, res)
      );
    }
    if (controller.destroy) {
      this.delete(
        id,
        middleware,
        async (req, res) => await controller.destroy(req, res)
      );
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
