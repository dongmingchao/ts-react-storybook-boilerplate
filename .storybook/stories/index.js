import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { Button } from "@storybook/react/demo"; // 这里引入你想展示的组件
import { withLiveEdit, withLiveEditScope } from "storybook-addon-react-live-edit";

addDecorator(withLiveEditScope({ React, scopeTest: 'Passed!' })) 

storiesOf("Button", module)
  .add("with text", () => (
    // 一个 add 表示添加一个 story
    <Button>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    // 这里是另一个 story
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf("Demo", module)
  .add('demo', withLiveEdit(`return <div>{scopeTest}</div>`));