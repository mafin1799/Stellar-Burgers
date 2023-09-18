const typeAliasesConfig: any = {
    bun: 'Булки',
    main: 'Начинки',
    sauce: 'Соусы',
    // Добавьте сюда другие типы и соответствующие алиасы при необходимости
};

export const getTypeAlias = (type: string) => {
    if (type) {
        return typeAliasesConfig[type] || 'Неизвестный тип';
    }

};