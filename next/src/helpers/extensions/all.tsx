export { };

declare global {
    interface String {
        toUpperCaseFirst(): string;
        toLowerCaseFirst(): string;
    }


    interface ArrayConstructor {
        toPluckFromEnum(enm: any): any
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



Array.toPluckFromEnum = function (enm: any) {
    return Object.entries(enm).map(([key, value]) => ({
        value: key,
        label: value,
    }));
}