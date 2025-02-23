export const skimArgs = <T,>(fn: (arg: number | string, ...reset: any[]) => Promise<T>) =>
    (args: Array<number | string>, ...reset: any[]): Promise<T> =>
        fn(args[0], ...reset);  
