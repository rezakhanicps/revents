import { useField, FieldHookConfig } from 'formik';
import { FormField, Label } from 'semantic-ui-react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDateInput: React.FC<
    ReactDatePickerProps & FieldHookConfig<Date | null>
> = ({ ...props }) => {
    const [field, meta, helpers] = useField(props);

    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props['aria-label']}</label>
            {/* @ts-ignore */}
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(date, event) => helpers.setValue(date)}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
};

export default MyDateInput;
