import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent = ({ inverted = true, content = 'Loading' }) => {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
    );
};

export default LoadingComponent;
