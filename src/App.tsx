import { Select, Option, ThemeProvider } from "@ui5/webcomponents-react";


function App() {
  return (
      <ThemeProvider>
        <Select>
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
