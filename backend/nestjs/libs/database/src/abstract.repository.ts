import { DeepPartial, FindManyOptions, FindOneOptions, FindOptionsWhere, QueryRunner, Repository, SelectQueryBuilder } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { NotFoundException } from "@nestjs/common";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Require } from "libs/shared/types";
import { ENTITY_ALIAS, ISOLATION_LEVEL } from "libs/shared/enums";
import { isUndefined } from "lodash";

export abstract class AbstractRepository<Entity extends AbstractEntity<Entity>> {
    private queryRunner?: QueryRunner;

    public constructor(
        private readonly repository: Repository<Entity>
    ) {}

    public createQueryRunner(): QueryRunner {
        if (isUndefined(this.queryRunner) || this.queryRunner?.isReleased) {
            this.queryRunner = this.repository.manager.connection.createQueryRunner()
        }
        return this.queryRunner
    }

    public createQueryBuilder(alias: ENTITY_ALIAS): SelectQueryBuilder<Entity> {
        return this.repository.createQueryBuilder(alias)
    }

    public async queryInTransaction<ExecuteFnReturn>(
        isolationLevel: ISOLATION_LEVEL = ISOLATION_LEVEL.SERIALIZABLE,
        executeFn: () => ExecuteFnReturn | Promise<ExecuteFnReturn>,
    ): Promise<ExecuteFnReturn> {
        const queryRunner = this.createQueryRunner()
        try {
            await queryRunner.connect()
            await queryRunner.startTransaction(isolationLevel)

            const res = await executeFn()
            await queryRunner.commitTransaction()

            return res
        } catch (e) {
            await queryRunner.rollbackTransaction()
            throw e
        } finally {
            await queryRunner.release()
        }
    }

    public async create(
        entity: DeepPartial<Entity>
    ): Promise<Entity> {
        try {
            const record = this.repository.create(entity)
            await this.repository.save(record)
            return record
        } catch (e) {
            throw e
        }
    }

    public async find(
        options?: FindManyOptions<Entity>
    ): Promise<Entity[]> {
        try {
            return await this.repository.find(options)
        } catch (e) {
            throw e
        }
    }

    public async findList(
        options: Require<FindManyOptions<Entity>, 'skip' | 'take'>
    ): Promise<[Entity[], number]> {
        try {
            if (options.skip < 0) {
                options.skip = 0
            }

            if (options.take < 0) {
                options.take = 0
            }

            return await this.repository.findAndCount(options)
        } catch (e) {
            throw e
        }
    }

    public async findOne(
        options?: FindOneOptions<Entity>
    ): Promise<Entity> {
        try {
            const record = await this.repository.findOne(options)

            if (!record) {
                throw new NotFoundException()
            }

            return record
        } catch (e) {
            throw e
        }
    }

    public async update(
        options: FindOptionsWhere<Entity>,
        query: QueryDeepPartialEntity<Entity>
    ): Promise<void> {
        try {
            const res = await this.repository.update(options, query)

            if (!res.affected) {
                throw new NotFoundException()
            }
        } catch (e) {
            throw e
        }
    }

    public async delete(
        options: FindOptionsWhere<Entity>
    ): Promise<void> {
        try {
            const res = await this.repository.delete(options)

            if (!res.affected) {
                throw new NotFoundException()
            }
        } catch (e) {
            throw e
        }
    }
}