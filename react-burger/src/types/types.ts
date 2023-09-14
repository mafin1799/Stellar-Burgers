export type TIngredient = {
    readonly calories: number,
    readonly carbohydrates: number,
    readonly fat: number,
    readonly image: string,
    readonly image_large: string,
    readonly image_mobile: string,
    readonly name: string,
    readonly price: number,
    readonly proteins: number,
    readonly type: string,
    readonly _id: string,
    readonly id: string,
    readonly unique?: string;
}

export type TUserInfo = {
    user: {
        email: string,
        name: string
    }
}

export type OrderedData = {
    [name: string]: Array<TIngredient>
}