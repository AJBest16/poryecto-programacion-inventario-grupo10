import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';
import { UpdateAuditLogDto } from './dto/update-audit-log.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class AuditLogService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createAuditLogDto: CreateAuditLogDto) {
    return this.auditLog.create({
      data: createAuditLogDto
    })
  }

  findAll() {
    return this.auditLog.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.auditLog.findFirst()
  }

  // update(id: number, updateAuditLogDto: UpdateAuditLogDto) {
  //   return `This action updates a #${id} auditLog`;
  // }

  remove(id: number) {
    return this.auditLog.delete({where: {id}})
  }
}
