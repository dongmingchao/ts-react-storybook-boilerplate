import React from 'react';
import css from './Task.styl';

export type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';

export interface propTypes {
  task: {
    id: string;
    title: string;
    state: TaskState;
  };
  onArchiveTask?(id: string): void;
  onPinTask?(id: string): void;
}

export default function Task({
  task: { title, state, id },
  onArchiveTask = () => {},
  onPinTask = () => {},
}: propTypes) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input type="checkbox" checked={state === 'TASK_ARCHIVED'} disabled name="checked" />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className={css.title}>
        <input type="text" value={title} readOnly placeholder="Input title" />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
            <span className={'icon-star'} />
          </a>
        )}
      </div>
    </div>
  );
}
