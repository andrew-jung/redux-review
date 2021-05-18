# ⚡ redux-review ⚡
Catching up with Redux with hooks &amp; RTK

To start, check out the branch you wanna see and:

- `npm i`
- `npm run dev`
- Ignore all my ESLint horrors :'(

Branches contain new fun things based on the typical Counter example (increment, decrement, reset):

- `main`: Plain 'ol Redux, featuring components connecting to store, mapStateToProps, mapDispatchToProps
- `now_with_hooks`: Upgrade! Use new hooks to dispatch, access the store, creating your reducers/actions via slice
- `typed_hooks`: Added TypeScript, typed useSelector and some small stuff
- `rtk_query`: Use RTK Query to call the Pokemon API using our Counter state
