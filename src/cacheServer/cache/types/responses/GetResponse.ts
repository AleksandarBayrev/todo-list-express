import { AccessTime } from './AccessTime'

export type GetResponse = AccessTime & {
    itemKey: string
    itemData: object | null
    ttl: number | null
}