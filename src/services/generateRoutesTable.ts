import { table } from 'table';
import { Application } from 'express';

class RoutesTable  {
  private endpoints = [];

  public generate(app: Application) {
    // Find all endpoints and add them to this.endpoints
    app._router.stack.forEach(this.print.bind(null, []));

    const config = {
      columns: {
        0: {
          width: 15,
        },
        1: {
          width: 25,
        },
      },
    };

    const headers = ['Method', 'Endpoint'];
    const tableData = [headers, ...this.endpoints];

    console.info(table(tableData, config));
  }

  private print = (path, layer) => {
    if (layer.route) {
      layer.route.stack.forEach(
        this.print.bind(null, path.concat(this.split(layer.route.path)))
      );
    } else if (layer.name === 'router' && layer.handle.stack) {
      layer.handle.stack.forEach(
        this.print.bind(null, path.concat(this.split(layer.regexp)))
      );
    } else if (layer.method) {
      this.endpoints.push([
        layer.method.toUpperCase(),
        path.concat(this.split(layer.regexp)).filter(Boolean).join('/'),
      ]);
    }
  }

  private split = (thing) => {
    if (typeof thing === 'string') {
      return thing.split('/');
    }

    if (thing.fast_slash) {
      return '';
    }

    const match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);

    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : `<complex: ${thing.toString()}>`;
  }
}

export const routesTable = new RoutesTable();
