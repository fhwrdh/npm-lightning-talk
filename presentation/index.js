// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Notes,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#282c34',
    secondary: '#fff',
    tertiary: '#fff',
    quarternary: 'rgba(26,29,35,.5)',
  },
  {
    // primary: {name: 'Oswald', googleFont: true, styles: ['400', '700i']},
    pp: {name: 'PT Sans', googleFont: true, styles: ['400', '700i']},
    // primary: "Arial Narrow"
    primary: 'Avenir',
  },
);

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const H = ({children, ...props}) => (
  <Heading
    textColor="secondary"
    fit={!props.size}
    caps
    lineHeight={1}
    {...props}>
    {children}
  </Heading>
);

const CJSpan = styled.span`
  color: rgb(0, 175, 102);
`;

const H1 = props => <H size={1} {...props} />;
// const H2 = props => <H size={2} {...props} />;

const T = props => <Text textColor="secondary" {...props} />;
const AppearText = ({children, ...props}) => (
  <Appear>
    <Text textColor="secondary" {...props}>
      {children}
    </Text>
  </Appear>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        controls={false}
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress="bar">
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            5 minutes of npm
          </Heading>
          <T textAlign="right">May 2018</T>
          <T textAlign="right">WLVJS</T>
        </Slide>

        <Slide>
          <H>Franklin Henderson</H>
          <T textAlign="right">@fhwrdh</T>
          <T textAlign="right">
            <Row>
              <CJSpan>CJ Affiliate</CJSpan>
            </Row>
          </T>
        </Slide>

        <Slide>
          <T>( set timer for 4 mins )</T>
        </Slide>

        <Slide>
          <H1>NPM</H1>
          <AppearText>node package manager</AppearText>
          <AppearText>world's largest software registry</AppearText>
          <AppearText>npmjs.com</AppearText>
          <AppearText>cli</AppearText>
          <Notes>3b downloads / week 600k packages</Notes>
        </Slide>

        <Slide>
          <H>setup project</H>
          <AppearText>npm init</AppearText>
          <AppearText>package.json</AppearText>
          <Notes>-y option</Notes>
        </Slide>

        <Slide>
          <H>install dependencies</H>
          <AppearText>npm install --save express</AppearText>
          <AppearText>npm install --save-dev webpack</AppearText>
          <AppearText>node_modules</AppearText>
          <Notes>
            available to code via the path executables available in package.json
          </Notes>
        </Slide>

        <Slide>
          <H>global install</H>
          <AppearText>npm install -g create-react-app</AppearText>
          <Notes>
            for things you want to run from the command line without a project
          </Notes>
        </Slide>

        <Slide>
          <H>run-script</H>
          <AppearText>package.json</AppearText>
          <AppearText>npm start</AppearText>
          <AppearText>npm test</AppearText>
          <AppearText>npm run build</AppearText>
          <AppearText>npm run lint</AppearText>
          <AppearText>npm run clean</AppearText>
          <Notes />
        </Slide>

        <Slide>
          <H>updates</H>
          <AppearText>npm outdated</AppearText>
          <AppearText>npm install -g npm-check-updates</AppearText>
          <Notes />
        </Slide>

        <Slide>
          <H>publishing</H>
          <AppearText>npm adduser</AppearText>
          <AppearText>npm version</AppearText>
          <AppearText>npm link</AppearText>
          <AppearText>npm publish</AppearText>
          <Notes>
            for things you want to run from the command line without a project
          </Notes>
        </Slide>

        <Slide>
          <H>other topics</H>
          <AppearText>npm view</AppearText>
          <AppearText>npm audit</AppearText>
          <AppearText>organizations / teams / scope</AppearText>
          <AppearText>yarn</AppearText>
          <Notes />
        </Slide>

        <Slide>
          <H>References</H>
          <T>http://docs.npmjs.com</T>
        </Slide>

        <Slide>
          <H>Questions?</H>
          <T>https://github.com/fhwrdh/npm-lightning-talk</T>
        </Slide>
      </Deck>
    );
  }
}
