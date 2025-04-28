import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn()
  @Column({ type: 'integer', primary: true })
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  title: string;

  @Column({ nullable: true, type: 'text' })
  description?: string;

  @Column({ nullable: false, type: 'boolean', default: false })
  isCompleted: boolean;

  @CreateDateColumn()
  @Column({ nullable: true, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn()
  @Column({ nullable: true, type: 'timestamp' })
  updated_at: Date;
}