import { TOrder } from "../../types/types"

export type TInfoDesk = {
    name: string,
    arr: ReadonlyArray<TOrder>,
    done?: boolean,
    status: "done" | "pending"
}