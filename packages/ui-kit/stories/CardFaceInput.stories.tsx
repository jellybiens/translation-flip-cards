import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { Container } from './helpers';
import { CardFaceInput, FlipCardSizing } from '@ui-kit';
import { Form, Formik } from 'formik';

const title = 'CardFaceInput';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      margin: 'auto',
      display: 'flex',
      padding: theme.spacing(1),
      ...FlipCardSizing(theme),
    },
  };
});

type CardFacePropsFieldValues = {
  text: string;
  imgLink: string;
};

type InitVals = {
  frontface: CardFacePropsFieldValues;
  backface: CardFacePropsFieldValues;
};

const Story = () => {
  const cs = useStyles();
  const initialValues = {
    frontface: {
      text: '',
      imgLink: '',
    },
  };
  return (
    <Container title={title}>
      <Formik initialValues={initialValues} onSubmit={() => Promise.resolve(false)}>
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={6}>
                <div className={cs.root}>
                  <CardFaceInput name="frontface" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <code>{JSON.stringify(values)}</code>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

storiesOf('Core/Formik', module).add(title, Story);
