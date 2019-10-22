import React from 'react';
import TaskItem, { Task } from '../Task/Task';
import css from './TaskList.styl';

interface propTypes {
  loading?: boolean;
  tasks: Task[];
  onArchiveTask?(id: string): void;
  onPinTask?(id: string): void;
}

function TaskList({ loading = false, tasks, onPinTask, onArchiveTask }: propTypes) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <TaskItem className={`${css['list-item']}`} key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default TaskList;
