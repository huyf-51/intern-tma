import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    console.log('auth')
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers.authorization;
    const result = await this.jwtService.verifyAsync(accessToken)

    return true;
  }
}
