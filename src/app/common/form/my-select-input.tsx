import { useField, FieldHookConfig } from 'formik';
import { FormField, Label, Select, SelectProps } from 'semantic-ui-react';

const MySelectInput: React.FC<FieldHookConfig<string> & SelectProps> = ({ ...props }) => {
    const [field, meta, helpers] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props['aria-label']}</label>
            {/* @ts-ignore */}
            <Select
                clearable
                value={field.value || null}
                //@ts-ignore
                onChange={(e, data) => helpers.setValue(data.value)}
                //@ts-ignore
                onBlur={() => helpers.setTouched(true)}
                {...props}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
};

export default MySelectInput;
