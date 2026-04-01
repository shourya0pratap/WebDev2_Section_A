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
import { Demo } from "./components/App.jsx";
```

5. Lifecycle Method:
- Class component uses life cycle methods to perform tasks
- Life cycle methods have unnecessary boilerplate code so the application gets complex and hard to manage
- Lifecycle Methods:
    - Mount
    - Update
    - Unmount
- So thats why we shifted to functional components

6. React "Gotchas!"
- We cannot re-render normal variables in JSX
- Normal variables are treated as constants

7. While handling events, we do not use () as it calls the function immediately, instead we just use the function name