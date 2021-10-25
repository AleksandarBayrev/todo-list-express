import { AccessTime } from './AccessTime'

export type DeleteResponse = AccessTime & {
    itemKey: string
    deletedItem: null
    deleted: boolean
}