import { DynamicModule, Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({})
export class StaticModule {
  static register(enabled: boolean): DynamicModule {
    return {
      module: StaticModule,
      imports: enabled
        ? [
            ServeStaticModule.forRoot({
              rootPath: join(__dirname, '..', '..', 'client', 'dist'),
              exclude: ['/api*'],
            }),
          ]
        : [],
    };
  }
}
