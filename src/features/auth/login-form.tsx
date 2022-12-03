import { Form, Formik } from 'formik';
import ModalWrapper from '../../app/common/modals/modal-wrapper';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/my-text-input';
import { Button } from 'semantic-ui-react';

const LoginForm: React.FC = () => {
    return (
        <ModalWrapper size='mini' header='Sign in to Re-vents'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required(),
                })}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form className='ui form'>
                        <MyTextInput name='email' placeholder='Email Address' />
                        <MyTextInput
                            name='password'
                            placeholder='Password'
                            type='password'
                        />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            fluid
                            size='large'
                            color='teal'
                            content='Login'
                        />
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    );
};

export default LoginForm;
