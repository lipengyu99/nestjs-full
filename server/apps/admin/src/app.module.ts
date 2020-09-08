import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { HiddenModule } from './hidden/hidden.module';
import { NewsModule } from './news/news.module';


const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    MulterModule.register({
      storage: MAO({
        config: {
          region: 'oss-cn-shanghai',
          accessKeyId: 'LTAI4Ft91gmaCmRNhjjnbGAW',
          accessKeySecret: 'eEwVynogOMJFKGYNQaE4waJyKMAMjf',
          bucket: 'full-nest-image'
        }
      })

      //dest:'uploads'
    }),
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule,
    HiddenModule,
    NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
