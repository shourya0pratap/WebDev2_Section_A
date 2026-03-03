# The Promise Object
A Promise is a proxy for a value not necessarily known when the promise is created. It represents the **eventual completion** (or failure) of an asynchronous operation.

### The Three States
1. **Pending:** Initial state, neither fulfilled nor rejected.

2. **Fulfilled (Resolved):** The operation completed successfully. `resolve()` was called.

3. **Rejected:** The operation failed. `reject()` was called.

    **Note:** Once a Promise is either Fulfilled or Rejected, it is **Settled**. It cannot change its state again (it is "immutable").

# Consumer Methods
These methods allow us to "react" to the state changes.

1. `.then(onFulfilled, onRejected)`
   - **Success:** It runs when the promise is resolved. It receives the value passed into `resolve(value)`.
   - **Chaining:** `.then()` always returns a new promise, which is why we can chain them together.

2. `.catch(onRejected)`
   - **Error Handling:** It runs if the promise is rejected or if any error is thrown in a previous `.then()`.
   - **Shortcut:** It's just a shorthand for `.then(null, onRejected)`.

3. `.finally()` **(The "Cleanup" addition)**
   - **Execution:** Runs regardless of whether the promise was resolved or rejected.
   - **Use Case:** Perfect for hiding "loading" spinners or closing database connections.

# Advanced Concepts
### Static Methods
Sometimes we need to manage multiple promises at once:

- `Promise.all([p1, p2])`: Waits for all to finish. If one fails, the whole thing fails immediately.
- `Promise.allSettled([p1, p2])`: Waits for all to finish, regardless of whether they succeeded or failed.
- `Promise.race([p1, p2])`: Returns the result of the first promise to settle (fastest one wins).

### The "Microtask" Queue
Promises don't just run "later", they have priority. They go into the **Microtask Queue**, which means they execute immediately after the current script finishes, but before the browser renders or handles timers (like `setTimeout`).