import Switch from './Switch';
import Select from './Select';
import { TypeFormField, TypeOnChange } from './Types';

const fieldsMap: {
    [key: string]: React.FC<{ data: TypeFormField; onChange: TypeOnChange }>;
} = {
    switch: Switch,
    select: Select,
};

export default fieldsMap;
