import { Select, Option, ThemeProvider } from "@ui5/webcomponents-react";
import { useEffect, useRef, useState } from "react";

// I disabled React strict mode to prevent hooks from running twice in dev mode

function App() {
  const selectRef = useRef(null);
  const [isDefined, setIsDefined] = useState(false);

  useEffect(() => {
    console.log(
      "initial",
      // on initial render, the custom element of the web component won't be defined yet
      customElements.get("ui5-select-demo"),
      // because of that some attributes (like the unscoped tag-name) are not available
      selectRef.current?.hasAttribute?.("ui5-select"),
    );
    // uncomment the debugger to see how the element looks in the dev tools at this point of time
    // debugger;
  }, []);

  useEffect(() => {
    const waitForDefine = async () => {
      customElements.whenDefined("ui5-select-demo").then(() => {
        setIsDefined(true);
      });
    };
    if (!isDefined) {
      waitForDefine();
    } else {
      console.log(
        "wait for define",
        // now the custom element is defined
        customElements.get("ui5-select-demo"),
        // and therefore the attribute is available
        selectRef.current?.hasAttribute?.("ui5-select"),
      );
    }
  }, [isDefined]);

  return (
    <ThemeProvider>
      <Select ref={selectRef}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
        <Option>Option 5</Option>
      </Select>
    </ThemeProvider>
  );
}

export default App;
