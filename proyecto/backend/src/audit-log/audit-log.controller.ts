import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';
import { UpdateAuditLogDto } from './dto/update-audit-log.dto';

@Controller('audit-log')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Post()
  create(@Body() createAuditLogDto: CreateAuditLogDto) {
    return this.auditLogService.create(createAuditLogDto);
  }

  @Get()
  findAll() {
    return this.auditLogService.findAll();
  }

  // @Get()
  // findOne() {
  //   return this.auditLogService.findOne();
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuditLogDto: UpdateAuditLogDto) {
  //   return this.auditLogService.update(+id, updateAuditLogDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditLogService.remove(+id);
  }
}
