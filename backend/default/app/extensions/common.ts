import { Router, response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import BaseController from '../controllers/BaseController';

type RouterCallback = (r: Router) => void;
type MiddlewareOrCallback = RequestHandler | RequestHandler[] | RouterCallback;
declare module 'express-serve-static-core' {
  interface Response {
    customJson(data: unknown): Response;
  }

  interface Router {
    group(
      prefix: string,
      ...middlewareOrCallback: MiddlewareOrCallback[]
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

let subRouter : Router;
Object.defineProperty(Router, 'group', {
  value: function (
    prefix: string,
    ...middlewareOrCallbacks: MiddlewareOrCallback[]
  ) {
     const router = Router();
     subRouter = Router();

    middlewareOrCallbacks.forEach(
      (middlewareOrCallback) => {
        if (typeof middlewareOrCallback === 'function') {
          const paramsLength = middlewareOrCallback.length;
          if (paramsLength > 1) {
            const mw = Array.isArray(middlewareOrCallback)
              ? middlewareOrCallback
              : [middlewareOrCallback];
              router.use([...mw]);
          } else {
            (middlewareOrCallback as RouterCallback)(router);
          }
        }
      },
      [router]
    );

    subRouter.use(prefix, this);

    return subRouter;
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
