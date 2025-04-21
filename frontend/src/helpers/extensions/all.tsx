export {};

declare global {
    interface String {
        toUpperCaseFirst(): string;
        toLowerCaseFirst(): string;
    }
}

String.prototype.toUpperCaseFirst = function (this: string): string {
    if (this.length === 0) return this;
    return this.charAt(0).toUpperCase() + this.slice(1);
};

 String.prototype.toLowerCaseFirst = function (this: string): string {
    if (this.length === 0) return this;
    return this.charAt(0).toLowerCase() + this.slice(1);
};
