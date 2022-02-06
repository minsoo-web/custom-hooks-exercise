# hooks

## nooks

> hooks made by nomad coder

- useInput
- useTabs
- useTitle
- useClick
- useConfirm
- usePreventLeave
- useBeforeLeave
- useFadeIn
- useNetwork
- useFullScreen
- useNotification

## Rules of hooks

### Only call hooks (useState & useEffect) at the TOP Level

This means don`t call hooks inside loops, conditions or nested functions  
Always use Hooks at the top level of your react function  
By following this rule, you ensure hooks are called in the same order each time a component reders  
This allows react to correctly preserve the state of hooks between useState / useEffect calls

#### Bad Examples

##### ❌ BAD - break the call order

```js
if (randomNo > 50) {
  const [test, setTest] = useState("whooops");
}
```

##### ❌ BAD - conditional must go inside the useEffect

```js
if (randomNo > 50) {
  useEffect(() => {
    console.log("render");
  });
}
```

##### ❌ BAD - no nested functions

```js
function App() {
  const testing = () => {
    useEffect(() => {
      console.log("render");
    });
  };

  return {
    //...
  };
}
```

### Don`t call hooks from regular JS functions

✓ Call hooks from React FC`s  
✓ Call hooks from custom hooks

## 참고자료

1. 노마드코더 hooks
   https://nomadcoders.co/react-hooks-introduction/lectures/1595

2. Sonny Sangha
   https://www.youtube.com/watch?v=NZEUDJvpQMM
