import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

import Task, { TaskState } from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const allTaskState: TaskState[] = ['TASK_INBOX', 'TASK_PINNED', 'TASK_ARCHIVED'];

storiesOf('Task', module)
  .add('default', () => <Task task={{ ...task, state: 'TASK_INBOX' }} {...actions} />)
  .add('with Knobs', () => (
    <Task
      task={{
        ...task,
        title: text('title', 'input your title'),
        state: select('state', allTaskState, 'TASK_INBOX'),
      }}
      {...actions} />
  ))
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
