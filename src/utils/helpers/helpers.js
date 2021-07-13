export const updateObjectInArray = (items, objPropName, itemId, newObjProps) => {

    items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}
