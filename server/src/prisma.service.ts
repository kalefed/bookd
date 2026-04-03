import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            adapter: new PrismaPg(process.env.DATABASE_URL! as string),
        });
    }
}