import { Module } from '@nestjs/common';
import { HiddenController } from './hidden.controller';

@Module({
  controllers: [HiddenController]
})
export class HiddenModule {}
