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
      pb="base"
      mb="base"
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
      <Card>
        <Section
          title="Default: Large & Primary"
          titleCode={`<Button title="Sign up" />`}
        >
          <Example label="Idle">
            <Button title="Sign up" />
          </Example>
          <Example label="Focused">
            <Button
              title="Sign up"
              forceButtonStates={{
                focused: true,
              }}
            />
          </Example>
          <Example label="Hovered">
            <Button
              title="Sign up"
              forceButtonStates={{
                hovered: true,
              }}
            />
          </Example>
          <Example label="Pressed">
            <Button
              title="Sign up"
              forceButtonStates={{
                pressed: true,
                hovered: true,
              }}
            />
          </Example>
          <Example label="Disabled">
            <Button
              title="Sign up"
              forceButtonStates={{
                disabled: true,
              }}
            />
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
            <Button
              title="See more"
              size="small"
              forceButtonStates={{
                focused: true,
              }}
            />
          </Example>
          <Example label="Hovered">
            <Button
              title="See more"
              size="small"
              forceButtonStates={{
                hovered: true,
              }}
            />
          </Example>
          <Example label="Pressed">
            <Button
              title="See more"
              size="small"
              forceButtonStates={{
                pressed: true,
                hovered: true,
              }}
            />
          </Example>
          <Example label="Disabled">
            <Button
              title="See more"
              size="small"
              forceButtonStates={{
                disabled: true,
              }}
            />
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
            <Button
              title="Add to list"
              size="micro"
              forceButtonStates={{
                focused: true,
              }}
            />
          </Example>
          <Example label="Hovered">
            <Button
              title="Add to list"
              size="micro"
              forceButtonStates={{
                hovered: true,
              }}
            />
          </Example>
          <Example label="Pressed">
            <Button
              title="Add to list"
              size="micro"
              forceButtonStates={{
                pressed: true,
                hovered: true,
              }}
            />
          </Example>
          <Example label="Disabled">
            <Button
              title="Add to list"
              size="micro"
              forceButtonStates={{
                disabled: true,
              }}
            />
          </Example>
        </Section>

        <Section
          title="Secondary type"
          titleCode={`<Button title="Go back" type="secondary" />`}
          borderBottomWidth="0"
          mb="0"
        >
          <Example label="Idle">
            <Button title="Go back" type="secondary" />
          </Example>
          <Example label="Focused">
            <Button
              title="Go back"
              type="secondary"
              forceButtonStates={{
                focused: true,
              }}
            />
          </Example>
          <Example label="Hovered">
            <Button
              title="Go back"
              type="secondary"
              forceButtonStates={{
                hovered: true,
              }}
            />
          </Example>
          <Example label="Pressed">
            <Button
              title="Go back"
              type="secondary"
              forceButtonStates={{
                pressed: true,
                hovered: true,
              }}
            />
          </Example>
          <Example label="Disabled">
            <Button
              title="Go back"
              type="secondary"
              forceButtonStates={{
                disabled: true,
              }}
            />
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
