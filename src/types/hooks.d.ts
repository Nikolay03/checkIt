type TAction = (params) => (dispatch, store) => Promise<void>;
export type TOnSubmit = (action: any) => Promise<void | Pick<any, string | number | symbol>>

export type A = any
