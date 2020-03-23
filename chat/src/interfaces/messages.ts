export interface IMessage {
    id: Number,
    message: string
    nickname: string
}

export interface IMessageList {
    [index: number]: IMessage
}