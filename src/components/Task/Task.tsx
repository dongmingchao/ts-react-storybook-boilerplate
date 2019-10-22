import React from 'react';
import css from './Task.styl';

export type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';

export interface Task {
  id: string;
  title: string;
  state?: TaskState;
  updatedAt?: Date;
}

export interface propTypes {
  task: Task;
  className?: string;
  onArchiveTask?(id: string): void;
  onPinTask?(id: string): void;
}

export default function TaskItem({
  task: { title, state, id },
  onArchiveTask = () => {},
  onPinTask = () => {},
  className,
}: propTypes) {
  return (
    <div className={`${className} ${state} ${css['list-item']}`}>
      <label className={`${css['checkbox-outer']}`}>
        <input
          className={css['checkbox-value']}
          type="checkbox"
          checked={state === 'TASK_ARCHIVED'}
          disabled
          name="checked" />
        <span className={css.checkbox} onClick={() => onArchiveTask(id)} />
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
