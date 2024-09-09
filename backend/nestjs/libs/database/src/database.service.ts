import { DATABASE_NAME, SERVICE_NAME } from "libs/shared/enums";
import { DataSourceOptions } from "typeorm";

export class DatabaseService {
    public static getDatasourceOptions(
        databaseName: DATABASE_NAME,
        serviceName: SERVICE_NAME
    ): DataSourceOptions {
        return {
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: databaseName,
            synchronize: false,
            entities: [__dirname + `apps/${serviceName}/**/*.entity{.ts,.js}`],
            migrations: [__dirname + `apps/${serviceName}/migrations/*{.ts,.js}`],
        };
    }
}