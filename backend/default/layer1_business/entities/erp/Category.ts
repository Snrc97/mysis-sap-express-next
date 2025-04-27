import IEntity from '../IEntity';

export default interface Category extends IEntity {

parent_id?: number;
title: string;
created_at?: Date;
updated_at?: Date;

}