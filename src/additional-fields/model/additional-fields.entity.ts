import { Contract } from "src/contract/models/contract.entity";
import { ContractType } from "src/contractType/models/contractType.entity";
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class AdditionalFields {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  accountId: number;

  @Column()
  value: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Contract, (contract) => contract.additionalFields)
  @JoinColumn()
  contract: Contract;

  @ManyToOne(() => ContractType, { eager: true })
  contractType: ContractType;
}
