import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
export default abstract class BaseEntity {

    @Column()
    globalId: string;

    @CreateDateColumn()
    created: string;

    @UpdateDateColumn()
    modified: string;

}