export enum toastType {
    SUCCESS = 'success',
    DANGER = 'danger'
}

export type Toast = {
    id: string,
    type: toastType,
    label: string,
    text: string,
    duration?: number | null,
}
