import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '@material-ui/core';
import { Container } from '../helpers';
import { ResponsiveButton, IconKeys, IconNames } from '@ui-kit';
import { Hues, CustomColours } from '../../src/themes';

const title = 'ResponsiveButton';

const colours = Object.keys(Hues).map((k: unknown) => k as CustomColours);

let c = -1;

const Story = () => {
  return (
    <Container title={title}>
      <Grid container spacing={2} justify="center">
        {IconKeys.map((icon: IconNames, i) => {
          c = c < 8 ? c + 1 : 0;
          return (
            <>
              <Grid item xs={3} key={`${i}-iconName-${icon}-${colours[c]}`}>
                <ResponsiveButton iconName={icon} colour={colours[c]}>
                  {icon} {colours[c]}
                </ResponsiveButton>
              </Grid>
              <Grid item xs={3} key={`${i}-startIcon-${icon}-${colours[c]}`}>
                <ResponsiveButton startIcon={icon} colour={colours[c]}>
                  {icon} {colours[c]}
                </ResponsiveButton>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

storiesOf('Core/Buttons', module).add(title, Story);