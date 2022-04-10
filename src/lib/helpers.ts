/**
 * @author Obada Qawwas <obadaqawwas@teknasyon.com>
 */
export const updateObjectValueByPath = (arrayPath: any, data: any, value: any): any => {
    const key = arrayPath[0];
    const arrayPathLen = arrayPath.length;

    if (Array.isArray(data) && data !== null) {
        if (arrayPathLen > 1) {
            return data.map((el, index) => {
                if (index.toString() === key.toString()) {
                    return updateObjectValueByPath(arrayPath.slice(1, arrayPathLen), el, value);
                }
                return el;
            }, []);
        }
        return [...data, value];
    }

    if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
        if (arrayPathLen > 1) {
            return {
                ...data,
                [key]: updateObjectValueByPath(arrayPath.slice(1, arrayPathLen), data[key], value),
            };
        }
        return { ...data, [key]: value };
    }

    return data;
};

/**
 * @author Obada Qawwas <obadaqawwas@teknasyon.com>
 */
type TypeFormValue = { name: string; value: any; fields?: any; subfields?: any };
export const getFormValues = (formData: any[]): TypeFormValue[] => {
    const fields = formData.map((field) => {
        const result: TypeFormValue = {
            name: field.name,
            value: field.value,
        };

        if (field.fields) {
            result.fields = getFormValues(field.fields);
        }
        if (field.subfields) {
            result.subfields = getFormValues(field.subfields);
        }

        return result;
    });

    return fields;
};
