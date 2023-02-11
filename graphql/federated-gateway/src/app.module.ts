import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [    
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        // ... Apollo server options
        cors: true,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'users', url: 'http://spinner1:4001/graphql' },
            { name: 'posts', url: 'http://spinner2:4002/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
