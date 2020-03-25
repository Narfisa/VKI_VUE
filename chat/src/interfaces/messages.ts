export interface IMessage {
    id: number,
    message: string,
    nickname: string
}

export interface IMessageList {
    [id: number]: IMessage
}
