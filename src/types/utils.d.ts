export type Merge<A, B> = {
    [K in keyof A]: K extends keyof B ? B[K] : A[K]
} & B

export type TObject<T = any> = Record<string, T>
