import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { join } from 'path';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [
    HttpModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    }),
  ],
})
export class UsersModule {}