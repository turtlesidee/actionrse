import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA00760ll2GW8eThNnvXhd
H8iQFFTAbtsD2tWblUK5E7vmH3TBrADmpr5Vg24dhIwv272zc3NGGERpZbQxkGYS
j2vwoDYG3CqGQn9YzIY9K3nqouLPAUCnDfm7p5orMWUoH65hwT+ge17HPfvJeadw
MZv3LKB8nmbU2OWSKTKgWxOVbmfn57mMx5/DCT84qkMSD7hhNjWL0QPtBxWVZ8WX
/oEfiK7pq5LU1RzBOVVhmqrluaPQqPmh/3nH3+9/sT87Zd9UM5BAHR29dkOH28uV
Y9YL3uNsHxNLL0CNnR8iF5kUvqSiGBdAbN1jbyLwSEfCDsBwk6xQDVieK2iZh8Yp
XQIDAQAB
-----END PUBLIC KEY-----`,
    })
  }

  async validate(payload: any) {
    console.log('GET CALLED')
    return {
      userId: payload.sub,
      permissions: payload.permissions
    }
  }
}
