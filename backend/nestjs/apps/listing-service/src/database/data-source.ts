import { DatabaseService } from "libs/database/src";
import { DATABASE_NAME, SERVICE_NAME } from "libs/shared/enums";
import { DataSource } from "typeorm";

export const dataSourceOptions = DatabaseService.getDatasourceOptions(DATABASE_NAME.LISTING, SERVICE_NAME.LISTING)

const dataSource = new DataSource(dataSourceOptions);
export default dataSource