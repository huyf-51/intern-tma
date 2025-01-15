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
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { WsExceptionsFilter } from 'src/common/filter/ws-exception.filter';
import { IoAdapter } from '@nestjs/platform-socket.io';

@UseFilters(new WsExceptionsFilter())
@WebSocketGateway({ cors: { origin: process.env.CLIENT_URL } })
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() private server: Server;

  handleConnection(socket: Socket) {
    console.log('socket socket id>>>', socket.id)
    try {
      if (socket.handshake.auth.token !== 'huy') {
        throw new WsException('authentication failed')
      }
    } catch (error) {
      socket.emit('error', error.error)
    }
  }

  handleDisconnect(socket: Socket) {
    
  }

  @SubscribeMessage('huy')
  handleMessage(socket: Socket, data: string): string {
    console.log('message>>> ', data);
    console.log(socket.id);
    console.log('recover>>>', socket.recovered)
    // return data will be get at second arg in callback func ack in client
    return data;
  }
}
