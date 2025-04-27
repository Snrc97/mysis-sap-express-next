import BaseEntity from '../BaseEntity';

export default interface Market extends BaseEntity {

company_id: number;
name: string;
description?: string;
created_at?: Date;
updated_at?: Date;


}