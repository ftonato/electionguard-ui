import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

import { Message } from '../../lang';
import FormattedButton from '../FormattedButton';
import IconHeader from '../IconHeader';
import InternationalText from '../InternationalText';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
    },
    spaced: {
        marginBottom: theme.spacing(2),
    },
}));

export interface StepHeaderProps {
    title: Message;
    description: Message;
    buttonText: Message;
    disabledButtonText?: Message;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

/**
 * Common Header for Steps
 */
const StepHeader: React.FC<StepHeaderProps> = ({
    title,
    description,
    buttonText,
    disabledButtonText,
    onClick,
    loading,
    disabled,
}) => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <IconHeader title={title} />
            <InternationalText
                className={classes.spaced}
                component="p"
                id={description.id}
                defaultMessage={description.defaultMessage}
            />
            <FormattedButton
                className={classes.spaced}
                variant="contained"
                color="secondary"
                onClick={onClick}
                disabled={disabled}
                loading={loading}
                text={buttonText}
                disabledText={disabledButtonText}
            />
        </Container>
    );
};

export default StepHeader;
