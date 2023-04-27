const searchItems = (items, searchTerm, searchproperty = "name") => {
    if (searchTerm) {
        const filteredItems = items.filter(
            function (item) {
                const itemData = item[searchproperty]
                    ? item[searchproperty].toUpperCase()
                    : ''.toUpperCase();
                const textData = searchTerm.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }
        );
        return filteredItems;
    } else {
        return items;
    }
};

export default searchItems;