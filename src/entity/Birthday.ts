import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { User } from "./User";

@Entity()
export class Birthday {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    day: number;

    @Column()
    month: number;

    @Column()
    status: string;

    @ManyToOne(type => User, user => user.birthdays)
    user: User;

}
