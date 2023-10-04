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

    email: string,
    name: string

}

export type OrderedData = {
    [name: string]: Array<TIngredient>
}

export type TOrder = {
    _id: string
    createdAt: string,
    ingredients: Array<string>,
    name: string,
    number: number,
    status: string,
    updatedAt: string,
}

export type TIngredientData = { data: TIngredient }

