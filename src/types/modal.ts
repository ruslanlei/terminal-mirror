export enum modalType {
    CONFIRM = 'confirm',
}

export type Modal = {
    id: string,
    type: modalType,
    payload?: Record<any, any>,
}
