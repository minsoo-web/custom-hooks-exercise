import { useState } from "react";

export interface TabItem {
  tab: string;
  content: string;
}

const useTabs = (initialTabIndex: number, allTabs: TabItem[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialTabIndex);

  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

export default useTabs;
