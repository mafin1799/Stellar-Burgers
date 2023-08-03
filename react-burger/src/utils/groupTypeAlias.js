const typeAliasesConfig = {
    bun: 'Булки',
    main: 'Начинки',
    sauce: 'Соусы',
    // Добавьте сюда другие типы и соответствующие алиасы при необходимости
};

export const getTypeAlias = (type) => {
    if (type) {
        return typeAliasesConfig[type] || 'Неизвестный тип';
    }

};