import React from 'react';

interface propTypes {
  task: {
    id: string;
    title: string;
    state: any;
  };
  onArchiveTask: any;
  onPinTask: any;
}

export default function Task({ task: { title } }: propTypes) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly />
    </div>
  );
}
