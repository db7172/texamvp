import { useState } from "react";

type StateProp = {
  title: string;
  Content: any;
  key: string;
  closable?: boolean;
};

type ValueProp = {
  activeKey: string;
  panes: StateProp[];
};

export const useTabs = (values: ValueProp, TabContent: any) => {
  const [tabs, setTabs] = useState(values);

  const onChange = (activeKey: string) => {
    setTabs({
      ...tabs,
      activeKey,
    });
  };

  const add = () => {
    const { panes } = tabs;
    const title = `Day ${panes.length + 1}`;
    const activeKey = `day${panes.length + 1}`;
    panes.push({ title, key: activeKey, Content: TabContent });
    setTabs({ panes, activeKey });
  };

  const remove = (targetKey: string) => {
    let { activeKey } = tabs;
    let lastIndex = 0;
    tabs.panes.forEach((pane: { key: string }, i: number) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = tabs.panes.filter(
      (pane: { key: string }) => pane.key !== targetKey
    );
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    setTabs({ panes, activeKey });
  };

  const onEdit = (targetKey: any, action: "add" | "remove") => {
    if (action === "remove") {
      remove(targetKey);
    } else if (action === "add") {
      add();
    }
  };

  const returnValue = {
    state: tabs,
    setState: setTabs,
    methods: {
      add,
      remove,
      onChange,
      onEdit,
    },
  };

  return returnValue;
};
