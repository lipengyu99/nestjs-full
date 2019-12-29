import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { file } from '@babel/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/imgupload')
  @UseInterceptors(FileInterceptor('file'))
  async imgupload(@UploadedFile('file') file){
    // return {
    //   url:'http://127.0.0.1:3000/imgupload/'+file.filename
    // }
    return file
  }
}
