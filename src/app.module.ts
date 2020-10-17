import { Module } from '@nestjs/common';
import { StaticModule } from './static/static.module';

@Module({
  imports: [StaticModule.register(process.env.NODE_ENV !== 'development')],
  controllers: [],
  providers: [],
})
export class AppModule {}
