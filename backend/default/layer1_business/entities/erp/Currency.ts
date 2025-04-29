import IEntity from '../IEntity';

export default interface Currency extends IEntity {

  CurrencyCode: string;
  CurrencyName: string;
  CountryName?: string;
  Symbol?: string;
  created_at?: Date;
  updated_at?: Date;

}