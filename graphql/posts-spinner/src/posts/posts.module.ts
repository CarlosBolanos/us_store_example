import {
    ApolloFederationDriver,
    ApolloFederationDriverConfig,
  } from '@nestjs/apollo';
  import { Module } from '@nestjs/common';
  import { HttpModule } from '@nestjs/axios'
  import { GraphQLModule } from '@nestjs/graphql';
  import { PostsResolver } from './posts.resolver';
  import { PostsService } from './posts.service';  

  import { User } from './models/user.model';
  import { join } from 'path';
  
  @Module({
    imports: [
        HttpModule,
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
            buildSchemaOptions: {
                orphanedTypes: [User],
            },
        }),
    ],
    providers: [
        PostsService, PostsResolver
    ],
  })
  export class PostsModule {}