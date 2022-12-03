import { useField, FieldHookConfig } from 'formik';
import { FormField, Label, Select, SelectProps } from 'semantic-ui-react';

const MySelectInput: React.FC<FieldHookConfig<string> & SelectProps> = ({
    ...props
}) => {
    const [field, meta, helpers] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props['aria-label']}</label>
            <Select
                clearable
                value={field.value || null}
                onChange={(e, data) => helpers.setValue(data.value as string)}
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
