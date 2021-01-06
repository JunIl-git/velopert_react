# **리액트 (ES6)**

## **TODOLIST** <a href="https://junil-git.github.io/velopert_react/"><U>작품보기!</U></a>

**React Hooks의 useState를 사용하여 state를 설정하고
useCallback, useRef, React.memo를 사용하여 컴포넌트 성능을 최적화하였습니다.
css는 styled-component를 사용하여 js파일 내에서 적용시켰습니다.**<br>

---

## 비구조화 할당 문법

```js
const MyComponent = ({ name }) => {
  return <div>안녕하세요. 제 이름은 {name}입니다.</div>;
};
```

---

## Class Component 객체안에서 [ key ]를 사용하여 중복코드 없애기

```js
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
  console.log(e.target.value);
};
//key값에 [ ]을 사용하고 [ ]안의 래퍼런스가 실제 가리키는 key값으로 사용된다.
```

---

## function Component에서 [ key ] 사용하여 중복코드 없애기

```js
const [form, setForm] = useState({
    message : '',
    username : '',
}
const handleChange = e => {
    const nextForm = {
        ...form,    //기존의 form 내용을 이 자리에 복사한 뒤
        [e.target.name] : e.target.value  //원하는 값을 덮어 씌우기
    }
    setForm(nextForm);
}
```

---

## class Component Ref 사용하기

1. ref 생성하기
   `input = React.createRef();`
2. 해당 태그 props로 전달한다.
   `ref={this.input}`
3. Focus가 동작하기 위한 위치에 넣는다.
   `js handleButtonClick = () =>{ this.setState({ clicked : true, validated : this.state.password === '0000', }) this.input.current.focus(); // 버튼 클릭 시 input창이 focus된다. } `

---

## Hooks UseEffect

_componentDidMount_ 와 _componentDidUpdate_ 를 사용할 때 이용된다.

```js
useEffect(() => {
  console.log('componentDidMount & componentDidUpdate');
  console.log({
    name,
    nickName,
  });
  return () => {
    // 위에 두 경우보다 전에 사용하고 싶다면 return값을 넣고 값을넣는다.
    console.log('cleanup');
  };
}, [name]); //Mounting의 경우만 실행키시고 싶으면 두번 째 인자에 빈칸[]을 넣는다.
//특정 state의 변화에 사용하고 싶으면 []안에 state를 넣는다.
```

---

## Hooks UseReducer

```js
    컴포넌트 외부에서 함수를 제어할 수 있다.
    여러 컴포넌트에서 같은 함수가 들어가야 할 경우 한 함수로 재사용을 할 수 있다.
    function reducer(state, action){
        switch (action.type) {
            case 'INCREMENT' :
                return { value : state.value + 1};
            case 'DECREMENT' :
                return { value : state.value - 1};
            default :       //아무것도 해당하지 않을 떄 기존 상태 반환한다.
                return state;
        }
    }

    const Counter = () => {
        const [state, dispetch] = useReducer(reducer, { value : 0})
        ////state는 현재의 상태, disfetch는 액션을 발생시키는 함수
        //useReducer의 첫 번째 인자는 리듀서 함수, 두 번째는 리듀서의 기본 값

        return(
            <>
                <button onClick ={()=>{dispetch({type :'INCREMENT'})}}>+1</button>
                <button onClick = {()=>{dispetch({type : 'DECREMENT'})}}>-1</button>
                <h1>{state.value}</h1>
            </>
        )
    }
```

## useReducer로 외부파일에 접근하기

```js
import {useReducer} from 'react';

function reducer(state,action){
    return(
        ...state,
        [action.name] : action.value
    )
}

export default function useInputs(initialForm){
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    }
    return [ state, onChange];
}
__________________________________________________________________
import React, {useReducer} from 'react';
import useInputs from './UseInput';


const Info = () =>{

    const [state, onChange] = useInputs({
        name : '',
        nickname : '',
    })

    const {name, nickName} = state;

    return(
        <>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickName" value={nickName} onChange={onChange}/>
            <h1>{name}</h1>
            <h1>{nickName}</h1>
        </>
    )
}

export default Info;
```

---

## UseMemo

state가 수정 될 때마다 함수가 호출 되는 것을 방지하기 위함
ex) input이 수정이 될 때마다 updating이 된다.
주로 랜더링 성능을 최적화 시킬 때 사용한다.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

## useCallback, useMemo

```js
import React, { useCallback, useMemo, useState, useRef } from 'react';

const Average = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);
  const inputEl = useRef(null);

  const handleChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  //useCallback을 사용하여 리랜더링 시 함수가 계속된 호출을 막기위해서
  //함수를 마운트 시 생성하고 재사용 할 수 있도록 한다.

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    console.log(nextList);
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const getAverage = (lists) => {
    console.log('평균값 계산');
    if (list.length === 0) {
      return 0;
    }
    const sum = lists.reduce((a, b) => a + b);
    //a는 배열의 합 b는 현재 값(처음값 : 0)
    return sum / lists.length;
  };
  const avg = useMemo(() => getAverage(list), [list]);
  //state가 변경됨에 따라 리랜더링 시 함수의 재호출을 막기위함

  return (
    <>
                  
      <input
        type={number}
        value={number}
        onChange={handleChange}
        ref={inputEl}
      />
                  <button onClick={onInsert}>등록</button>
                  <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
                  <h1>{avg}</h1>
              
    </>
  );
};

export default Average;
```

---

## UseRef

특정 행동에 focus를 사용하고 싶다면

1. 생성 `const inputEl = useRef(null);`

   - 괄호의 값은 바뀌어도 렌더링 되지 않음
   - 그래서 랜더링과 관련이 없는 값을 관리할 때 사용 할수 있음

2. 코드 적용 `inputEl.current.focus();`

   - focus가 발생할 함수에 적용

3. 컴포넌트 적용 `ref={inputEl}`

---

## Styled-component

```js
import React from 'react';
import styled, { css } from 'styled-components';
// 조건문 사용 시 스타일을 적용하려면 css를 불러와야한다.
// css를 불러오지 않고 사용해도 스타일은 적용되지만 props를 이용하기 위해선 css를 사용하자.

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`; //props.color에 컬러값이 들어가있으면 해당 컬러가 사용되고 들어가있지 않으면 blue가 선택된다.

const Button = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  height: 40px;
  font-weight: bold;
  font-size: 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &: hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponents = () => {
  return (
    <Box color={'black'}>
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponents;
```

---

## React.memo를 사용하여 컴포넌트 성능 최적화

- 수천개의 컴포넌트들이 존재한다면 사용
- 부모 컴포넌트의 state가 바뀌면 하위 컴포넌트가 리렌더링 될수 있기 때문에 성능 최적화를 위해 적용한다.
- 컴포넌트의 props가 바뀌지 않았다면, 리렌더링 하지 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화해 줄 수 있다.
- props의 변화에만 영향을 준다.
- useState나 useContext 훅을 사용한다면 여전히 state나 context 가 변할 때 다시 렌더링이 된다.

```js
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked, id } = todo;
  console.log(todo);
  return (
    <ListItem>
      <CheckBox
        checked={checked}
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div>{text}</div>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </ListItem>
  );
};

export default React.memo(TodoListItem);
//React.memo를 감싸준다.
//todo, onRemove, onToggle이 바뀌지 않으면 리렌더링 하지 않는다.
```

---

## useState의 함수형 업데이트

기존에 setTodos 함수를 사용할 때는 새로운 상태를 파라미터로 넣어 주었지만
새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트를 함수로 넣는다.

```js
const [number, setNumber] = useState(0);
//prevNumbers는 파라미터로, 현재 number값을 가리킨다.

const onCrease = useCallback(() =>
  setNumber((prevNumber) => {
    return prevNumber + 1;
  }),
);
```

---

## Virtualized 렌더링 최적화

리스트를 만들 때 렌더링은 되었지만 실제로 화면에 보이지 않는 컴포넌트들은 비효율적이기 때문에 virtualized를 사용하여 최적화를 시킨다.

---

## 불변성의 중요성

원본의 데이터를 해치지 마라.

```js
const p1 = 1;
const p2 = 1;
console.log(p1 === p2) // true
//원시값들은 메모리에 value를 저장할 경우 같은 값이면 메모리의 한 공간안에 data가 존재하고 같이 사용한다.

const o1 = { name : 'kim' };
const o2 = { name : 'kim' };
console.log(o1 === o2) // false
//반면 원시값이 아닌 가변성이 있는 array, object, function은 value가 같더라도 메모리에 data가 각각 따로 담긴다.
const o3 = o1; //
let o3.name = 'lee';
console.log(o1 === 'kim') // false
```
