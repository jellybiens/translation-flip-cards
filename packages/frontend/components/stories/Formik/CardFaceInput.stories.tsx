import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '@material-ui/core';
import { Container } from '../helpers';
import { CardFaceInput, CardFaceViewOption, FlipCardWrapper, Hues } from '@components';
import { Form, Formik } from 'formik';
import { CustomColours } from '@types';

const title = 'CardFaceInput';

const initialValues = {
  frontface: {
    text: '',
    imgLink: '',
    imgFile: null,
    colour: 'white',
  },
  backface: {
    text: '',
    imgLink: '',
    imgFile: null,
    colour: 'blue',
  },
};

const colours = Object.keys(Hues).map((k: unknown) => k as CustomColours);

colours.map((c) => {
  initialValues[`frontface-${c}`] = {
    text: '',
    imgLink: '',
    imgFile: null,
    colour: c,
  };
});

const Story = () => {
  const [cardFaceView, setCardFaceView] = React.useState<CardFaceViewOption>('menu');
  return (
    <Container title={title}>
      <Formik initialValues={initialValues} onSubmit={() => Promise.resolve(false)}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2} justify="center">
              {colours.map((c, i) => (
                <Grid item xs={6} key={i}>
                  <FlipCardWrapper>
                    <CardFaceInput
                      cardIndex={0}
                      name={`frontface-${c}`}
                      front
                      {...{ cardFaceView, setCardFaceView }}
                    />
                    <CardFaceInput
                      cardIndex={0}
                      name="backface"
                      back
                      {...{ cardFaceView, setCardFaceView }}
                    />
                  </FlipCardWrapper>
                </Grid>
              ))}
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

storiesOf('Core/Formik', module).add(title, Story);
