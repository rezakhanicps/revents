import { useField } from 'formik';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { FormField, Label, List, Segment } from 'semantic-ui-react';

const MyPlaceInput: React.FC<any> = ({ options, ...props }) => {
    const [field, meta, helpers] = useField(props);

    const handleSelect: (address: string, placeID?: string) => void = (
        address
    ) => {
        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then((latLng) =>
                helpers.setValue({
                    address,
                    latLng,
                })
            )
            .catch((error) => helpers.setError(error));
    };

    const handleBlur = (e: React.FocusEvent<any>) => {
        // field.onBlur(e);
        if (!field.value.latLng) {
            helpers.setValue({ address: 'Tehran', latLng: {a: 1, b: 2} });
        }
    };

    return (
        <PlacesAutocomplete
            value={field.value['address']}
            onChange={(value) => helpers.setValue({ address: value })}
            onSelect={(value) => handleSelect(value)}
            searchOptions={options}
        >
            {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
            }) => (
                <FormField error={meta.touched && !!meta.error}>
                    <input
                        {...getInputProps({
                            name: field.name,
                            onBlur: (e: React.FocusEvent<any>) => handleBlur(e),
                            ...props,
                        })}
                    />
                    {meta.touched && meta.error ? (
                        <Label basic color='red'>
                            {meta.error}
                        </Label>
                    ) : null}
                    {suggestions?.length > 0 && (
                        <Segment
                            loading={loading}
                            style={{
                                marginTop: 0,
                                position: 'absolute',
                                zIndedx: 1000,
                                with: '100%',
                            }}
                        >
                            <List selection>
                                {suggestions.map((suggestion) => (
                                    <List.Item
                                        {...getSuggestionItemProps(suggestion)}
                                    >
                                        <List.Header>
                                            {
                                                suggestion.formattedSuggestion
                                                    .mainText
                                            }
                                        </List.Header>
                                        <List.Description>
                                            {
                                                suggestion.formattedSuggestion
                                                    .secondaryText
                                            }
                                        </List.Description>
                                    </List.Item>
                                ))}
                            </List>
                        </Segment>
                    )}
                </FormField>
            )}
        </PlacesAutocomplete>
    );
};

export default MyPlaceInput;
