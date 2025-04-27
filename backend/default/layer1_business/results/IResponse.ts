export default interface IResponse<T> {
    msg: string;
    data: T | T[] | null | undefined;
    success: boolean;

}