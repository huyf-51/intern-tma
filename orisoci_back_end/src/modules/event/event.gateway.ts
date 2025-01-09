import { UseFilters } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
  OnGatewayConnection,
  WsResponse,
  OnGatewayInit,
  WsException,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { WsExceptionsFilter } from 'src/common/filter/ws-exception.filter';
import { IoAdapter } from '@nestjs/platform-socket.io';

@UseFilters(new WsExceptionsFilter())
@WebSocketGateway({ cors: { origin: process.env.CLIENT_URL } })
export class EventGateway implements OnGatewayConnection {
  @WebSocketServer() private server: Server;

  handleConnection(client: Socket) {
    console.log('user connect with socket id: ', client.id);
  }

  @SubscribeMessage('huy')
  handleMessage(client: Socket, data: string): string {
    console.log('message>>> ', data);
    console.log(client.id);
    // return data will be get at second arg in callback func ack in client
    return data;
  }
}
