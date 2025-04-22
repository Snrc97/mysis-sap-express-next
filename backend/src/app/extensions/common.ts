
import  { Router, response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

response.customJson = function ({data, success, msg}) {
    // Add custom behavior here, e.g., logging or wrapping the response
    this.json({
        success: success ?? true,
        data: data,
        msg: msg ?? 'İşlem Başarılı'
    });
};

type ResourceController = {
    index?: RequestHandler;
    show?: RequestHandler;
    store?: RequestHandler;
    update?: RequestHandler;
    destroy?: RequestHandler;
  };


declare module 'express-serve-static-core' {
    interface Router {
        resource(path: string, controller: ResourceController): this;
    }
}


Router.prototype.resource = function (path: string, controller: ResourceController): Router {
    const base = `/${path}`;
    const id = `${base}/:id`;

    if (controller.index) this.get(base, controller.index);
    if (controller.show) this.get(id, controller.show);
    if (controller.store) this.post(base, controller.store);
    if (controller.update) {
        this.put(id, controller.update);
        this.patch(id, controller.update);
    }
    if (controller.destroy) this.delete(id, controller.destroy);

    return this;
};

