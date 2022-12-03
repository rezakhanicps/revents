import { useField, FieldHookConfig } from 'formik';
import { FormField, Label } from 'semantic-ui-react';

const MyTextArea: React.FC<FieldHookConfig<string>> = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props['aria-label']}</label>
            {/* @ts-ignore */}
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
};

export default MyTextArea;
