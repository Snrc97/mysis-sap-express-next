import BaseEntity from '../BaseEntity';

export default interface Category extends BaseEntity {

parent_id?: number;
title: string;
created_at?: Date;
updated_at?: Date;

}