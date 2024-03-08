** Reproduce Layout Rerender after build **

- develop mode `yarn dev` is fine layout call `useEffect` only once
- production mode `yarn build && yarn start` is call `useEffect` every route navigate
