export function searchInData(data: any, searchTerm: string) {
    return data?.filter((item: any) => {
        return Object.keys(item).some((key) => {
            const value = item[key];
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            if (typeof value === 'number') {
                return value.toString().includes(searchTerm);
            }
            return false;
        });
    });
}
