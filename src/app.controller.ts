import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    return {
      title: 'Home Page - Online Store',
    };
  };

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];

    viewData['description'] = 'This is the about page';
    viewData['author'] = 'Developed by Ekomobong Lawrence';
    viewData['title'] = 'About Us - Tizzel Store';
    viewData['subtitle'] = 'About Us';

    return {
      viewData: viewData
    };
  }
}