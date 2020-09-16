import React from 'react';

interface ChildProp {
  data: { number: number };
  onButtonClick(): void;
}
// 为了减少组件渲染，可以优化
function Child(props: ChildProp) {
  console.log('子组件渲染了');

  return <div onClick={props.onButtonClick}>{props.data.number}</div>;
}
const GoodChild = React.memo(Child);
// useMemo useCallback
export default function MyHookComponent() {
  const [number, setNumber] = React.useState<number>(0);
  const [name, setName] = React.useState<string>('gaigai');
  // 每次渲染的时候都要生成新对象，
  const data = React.useMemo(() => ({ number }), [number]);
  // 每次渲染的时候都声明新函数

  const goodClick = React.useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  // 依赖的对象发生改变的时候才声明新函数，更新闭包

  return (
    <div>
      <div>
        <p>{number}</p>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          +
        </button>
        <div>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <GoodChild data={data} onButtonClick={goodClick} />
        </div>
      </div>
    </div>
  );
}
