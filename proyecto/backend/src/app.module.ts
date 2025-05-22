import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductSupplierModule } from './product-supplier/product-supplier.module';
import { MovementTypeModule } from './movement-type/movement-type.module';
import { MovementModule } from './movement/movement.module';
import { StockAlertModule } from './stock-alert/stock-alert.module';
import { AuditLogModule } from './audit-log/audit-log.module';


@Module({
  imports: [UserModule, RoleModule, CategoryModule, ProductModule, SupplierModule, ProductSupplierModule, MovementTypeModule, MovementModule, StockAlertModule, AuditLogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
