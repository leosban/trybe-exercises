import './components/App.css';
import React from 'react';
import First from './components/First';
import Tick from './components/Tick';
import WithParams from './components/WithParams';
import WithChildren from './components/WithChildren';
import Card from './layout/Card';
import Repetition from './components/Repetition';
import Conditional from './components/Conditional';

// eslint-disable-next-line no-unused-vars
export default (props) => (
  <div className="App">
    <Card title=" #05 - Conditional">
      <Conditional number={20}></Conditional>
    </Card>
    <Card title=" #04 - Repetition">
      <Repetition></Repetition>
    </Card>

    <Card title=" #03 - Component with childrens">
      <WithChildren>
        <ul>
          <li>Jatiuca</li>
          <li>Ponta Verde</li>
          <li>Pajuçara</li>
          <li>Cruz das Almas</li>
        </ul>
      </WithChildren>
    </Card>

    <Card title="#02 - Component with parameter">
      <WithParams title="This is the TITLE" subtitle="This is the SUBTITLE" />
    </Card>

    <Card title="#01 - First Component">
      <First />
    </Card>

    <Tick />
  </div>
);
