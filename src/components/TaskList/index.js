(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.AntdExt = {}, global.React));
}(this, function (exports, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".title {\n  display: inline-block;\n}\n.checkbox {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n}\n.checkbox-value:checked+.checkbox {\n  background-color: #ffc0cb;\n}\n.checkbox-value {\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.checkbox-value:checked:after {\n  content: '\\2714';\n  top: -3px;\n  left: -2px;\n  position: absolute;\n}\n";
  styleInject(css);

  function TaskItem(_a) {
      var _b = _a.task, title = _b.title, state = _b.state, id = _b.id, _c = _a.onArchiveTask, onArchiveTask = _c === void 0 ? function () { } : _c, _d = _a.onPinTask, onPinTask = _d === void 0 ? function () { } : _d;
      return (React.createElement("div", { className: "list-item " + state },
          React.createElement("label", null,
              React.createElement("input", { className: css['checkbox-value'], type: "checkbox", checked: state === 'TASK_ARCHIVED', disabled: true, name: "checked" }),
              React.createElement("span", { className: css.checkbox, onClick: function () { return onArchiveTask(id); } })),
          React.createElement("div", { className: css.title },
              React.createElement("input", { type: "text", value: title, readOnly: true, placeholder: "Input title" })),
          React.createElement("div", { className: "actions", onClick: function (event) { return event.stopPropagation(); } }, state !== 'TASK_ARCHIVED' && (React.createElement("a", { onClick: function () { return onPinTask(id); } },
              React.createElement("span", { className: 'icon-star' }))))));
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function TaskList(_a) {
      var _b = _a.loading, loading = _b === void 0 ? false : _b, tasks = _a.tasks, onPinTask = _a.onPinTask, onArchiveTask = _a.onArchiveTask;
      var events = {
          onPinTask: onPinTask,
          onArchiveTask: onArchiveTask,
      };
      if (loading) {
          return React.createElement("div", { className: "list-items" }, "loading");
      }
      if (tasks.length === 0) {
          return React.createElement("div", { className: "list-items" }, "empty");
      }
      var tasksInOrder = tasks.filter(function (t) { return t.state === 'TASK_PINNED'; }).concat(tasks.filter(function (t) { return t.state !== 'TASK_PINNED'; }));
      return (React.createElement("div", { className: "list-items" }, tasksInOrder.map(function (task) { return (React.createElement(TaskItem, __assign({ key: task.id, task: task }, events))); })));
  }

  exports.TaskItem = TaskItem;
  exports.TaskList = TaskList;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
