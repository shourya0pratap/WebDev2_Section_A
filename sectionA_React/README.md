# Note

1. First letter of the component must be capital
2. Diffing algo and reconciliation
3. Only one component (function) allowed to default export
4. Wrap named export named components in { }

```js
const Demo = () => "hello world";

export { Demo };
```

Import in other component

```js
import { Demo } from "./components/App.jsx"
```
