declare type Rule<T> = readonly [string, Config<T>];
declare type Config<T> = T | Promise<T> | ExectableConfig<T>;
declare type ExectableConfig<T> = (() => T) | (() => Promise<T>);
declare type ExecutedRule<T> = readonly [string, T];
export default execute;
export declare function execute<T = unknown>(rule: Rule<T>): Promise<ExecutedRule<T> | null>;
//# sourceMappingURL=index.d.ts.map