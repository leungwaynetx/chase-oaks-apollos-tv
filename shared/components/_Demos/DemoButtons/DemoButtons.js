import React from 'react';

import { withTheme } from 'styled-components';

import {
  Box,
  Button,
  Card,
  H1,
  H3,
  H4,
  SystemText,
  systemPropTypes,
} from 'shared/ui-kit';

/* eslint-disable react/prop-types */
function Section(props = {}) {
  return (
    <Box
      pb="l"
      mb="l"
      borderBottomWidth="1px"
      borderBottomColor="text.quaternary"
      {...props}
    >
      <H3>{props.title}</H3>
      <H4 mb="xs" color="text.primary" fontFamily="monospace">
        {props.titleCode}
      </H4>
      <Box
        flexDirection="row"
        maxWidth="100%"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {props.children}
      </Box>
    </Box>
  );
}

function Example(props = {}) {
  return (
    <Box m="xs">
      <SystemText fontWeight="bold" mb="xs">
        {props.label}
      </SystemText>
      <Box>{props.children}</Box>
    </Box>
  );
}

/* eslint-enable react/prop-types */

function DemoButtons(props = {}) {
  return (
    <Box {...props}>
      <H1 mb="s">Buttons</H1>
      <Card pt="l">
        <Section
          title="Default: Large & Primary"
          titleCode={`<Button title="Sign up" />`}
        >
          <Example label="Idle">
            <Button title="Sign up" />
          </Example>
          <Example label="Focused">
            <Button title="Sign up" focused />
          </Example>
          <Example label="Hovered">
            <Button title="Sign up" hovered />
          </Example>
          <Example label="Pressed">
            <Button title="Sign up" pressed hovered />
          </Example>
          <Example label="Disabled">
            <Button title="Sign up" disabled />
          </Example>
        </Section>

        <Section
          title="Small size"
          titleCode={`<Button title="See more" size="small" />`}
        >
          <Example label="Idle">
            <Button title="See more" size="small" />
          </Example>
          <Example label="Focused">
            <Button title="See more" size="small" focused />
          </Example>
          <Example label="Hovered">
            <Button title="See more" size="small" hovered />
          </Example>
          <Example label="Pressed">
            <Button title="See more" size="small" pressed hovered />
          </Example>
          <Example label="Disabled">
            <Button title="See more" size="small" disabled />
          </Example>
        </Section>

        <Section
          title="Micro size"
          titleCode={`<Button title="Add to list" size="micro" />`}
        >
          <Example label="Idle">
            <Button title="Add to list" size="micro" />
          </Example>
          <Example label="Focused">
            <Button title="Add to list" size="micro" focused />
          </Example>
          <Example label="Hovered">
            <Button title="Add to list" size="micro" hovered />
          </Example>
          <Example label="Pressed">
            <Button title="Add to list" size="micro" pressed hovered />
          </Example>
          <Example label="Disabled">
            <Button title="Add to list" size="micro" disabled />
          </Example>
        </Section>

        <Section
          title="Secondary type"
          titleCode={`<Button title="Go back" type="secondary" />`}
          borderBottomWidth="0"
          mb="0"
          pb="base"
        >
          <Example label="Idle">
            <Button title="Go back" type="secondary" />
          </Example>
          <Example label="Focused">
            <Button title="Go back" type="secondary" focused />
          </Example>
          <Example label="Hovered">
            <Button title="Go back" type="secondary" hovered />
          </Example>
          <Example label="Pressed">
            <Button title="Go back" type="secondary" pressed hovered />
          </Example>
          <Example label="Disabled">
            <Button title="Go back" type="secondary" disabled />
          </Example>
        </Section>
      </Card>
    </Box>
  );
}

DemoButtons.propTypes = {
  ...systemPropTypes,
};

export default withTheme(DemoButtons);
