import { Test, TestingModule } from '@nestjs/testing';
import { HiddenController } from './hidden.controller';

describe('Hidden Controller', () => {
  let controller: HiddenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiddenController],
    }).compile();

    controller = module.get<HiddenController>(HiddenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
