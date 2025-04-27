import IEntity from '../IEntity';

export default interface Market extends IEntity {

company_id: number;
name: string;
description?: string;
created_at?: Date;
updated_at?: Date;


}