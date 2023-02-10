import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules';

@Module({
  imports: [
    HttpModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true
    }),
  ],
})
export class AppModule {}
