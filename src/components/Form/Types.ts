type TypeSelectOption = { label: string; value: string };

export type TypeFormSection = {
    label: string;
    cols: string;
    fieldsGroups: TypeFormFieldGroup[];
};

export type TypeFormFieldGroup = {
    cols: string;
    fields: TypeFormField[];
};

export type TypeFormField = {
    label: string;
    name: string;
    type: string;
    value: boolean | string | number | readonly string[] | undefined;
    options?: TypeSelectOption[];
    fields?: TypeFormField[];
    subfields?: TypeFormField[];
};

export type TypeOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

export type TypeHandleInputChange = (object: (string | number)[]) => TypeOnChange;
