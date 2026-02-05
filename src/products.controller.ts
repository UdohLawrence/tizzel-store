import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('/products')
export class ProductsController {
  static products = [
    {
      id: 1,
      name: 'TV',
      price: 99.99,
      image: '/img/tv.png',
    },
    {
      id: 2,
      name: 'Safe',
      price: 159.99,
      image: '/img/safe.png',
    },
    {
      id: 3,
      name: 'Game',
      price: 65.99,
      image: '/img/game.png',
    },
  ];
  @Get('/')
  @Render('products/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Products - Online Store';
    viewData['subtitle'] = 'List of Products';
    viewData['products'] = ProductsController.products;
    return {
      viewData,
    };
  }

  @Get('/:id')
  @Render('products/show')
  show(@Param() params) {
    const product = ProductsController.products[params.id -1];
    const viewData = [];
    viewData['title'] = product.name + '- Online Store';
    viewData['subtitle'] = product.name + '- Product Information';
    viewData['product'] = product;
    return {
      viewData: viewData,
    };
  }
}
