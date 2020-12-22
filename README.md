# 밸로퍼트 리액트 (ES6)

## props 기본값 설정하기

        MyComponent.defaultProps = {
            name : "기본 이름",
        }

<br>
<hr>
<br>

## 비구조화 할당 문법

        const MyComponent = ({name}) => {
            return(
                <div>안녕하세요. 제 이름은 {name}입니다.</div>
            )
        }

<br>
<hr>
<br>

## 함수내 this사용하기 (bind사용)

        함수내에서 this를 사용하기 위해서는 this를 bind시켜야 사용할 수 있다.
        bind를 사용하지 않고 this를 사용하려면 ES6의 화살표 함수를 사용한다.

<br>
<hr>
<br>

## Class Component 객체안에서 [ key ]를 사용하여 중복코드 없애기

        handleChange = e =>{
                this.setState({
                    [e.target.name] : e.target.value
                })
                console.log(e.target.value);
        }
        key값에 [ ]을 사용하고 [ ]안의 래퍼런스가 실제 가리키는 key값으로 사용된다.

<br>
<hr>
<br>

## function Component에서 [ key ] 사용하여 중복코드 없애기

        const [form, setForm] = useState({
            message : '',
            username : '',
        })

        const handleChange = e => {
            const nextForm = {
                ...form,    //기존의 form 내용을 이 자리에 복사한 뒤
                [e.target.name] : e.target.value  //원하는 값을 덮어 씌우기
            }
            setForm(nextForm);
        }

<br>
<hr>
<br>

## class Component Ref 사용하기

    1. ref 생성하기
        input = React.createRef();

    2. 해당 태그 props로 전달한다.
        ref={this.input}

    3. Focus가 동작하기 위한 위치에 넣는다.
        handleButtonClick = () =>{
        this.setState({
            clicked : true,
            validated : this.state.password === '0000',
        })
        this.input.current.focus(); // 버튼 클릭 시 input창이 focus된다.
    }

<br>
<hr>
<br>

## life cycle

    1. constructor 메서드
        constructor(props) {...}

    컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음 실행 된다.
    state를 초기화 시킨다.



    2.getDeriveStateFromProps 메서드 v16.3

    props로 받아 온 값을 state에 동기화시키는 용도로 사용하며,
    컴포넌트가 마운트 될 떄와 업데이트 될 때 호출이 된다.



    3. componentDidMount 메서드
    componentDidMount(props){...}

    컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행한다.
    setTimeOut,setInterval, 네트워크 요청과 같은 비동기 작업을 처리하면 된다.



    4. shouldComponentUpdate 메서드
    shouldComponentUpdate(nextProps, nextState){...}

    props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드.
    반드시 true 또는 palse를 반환해야 한다.

    *** 프로젝트 성능을 최적화할 때, 필요없는 리렌더링은  false값을 반환시킨다 ***



    5. getSnapshotBeforeUpdate 메서드 v16.3

    render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출된다.



    6.componentDidUpdate 메서드
    componentDidUpdate(prevProps, prevState, snapshot){...}

    리랜더링을 완료한 후 실행



    7. componentWillUnmount 메서드
    componentWillUnmount(){...}

    컴포넌트를 DOM에서 제거할 때 실행된다.
    componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있따면 여기서 제거 작업을 해야한다.



    8. componentDidCatch 메서드 v16.3

    컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여 줄수 있게 해 준다.

<br>
<hr>
<br>

## Hooks UseEffect

    componentDidMount 와 componentDidUpdate 를 사용할 때 이용된다.

    useEffect(() => {
        console.log("componentDidMount & componentDidUpdate");
        console.log({
            name,
            nickName,
        });
        return ()=>{    // 위에 두 경우보다 전에 사용하고 싶다면 return값을 넣고 값을 넣는다.
            console.log('cleanup');
        }
    },[name])   //Mounting의 경우만 실행키시고 싶으면 두번 째 인자에 빈칸[]을 넣는다.
                //특정 state의 변화에 사용하고 싶으면 []안에 state를 넣는다.

<br>
<hr>
<br>

## Hooks UseReducer

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

<br>
<hr>
<br>

    function reducer(state,action){             // 2. reducer함수 생성
        return {
            ...state,
            [action.name] : action.value
        }
    }

    const Info = () => {

        const [state, dispatch] = useReducer(reducer, {     // 1. state 설정
            name : '',
            nickName : '',
        })

        const {name, nickName} = state;

        const onChange = e => {
            dispatch(e.target);         // 3. dispatch 함수에 해당 태그 전달
        }
        return(
            <>
                <input name="name" value={name} type="text"  onChange={onChange}/>
                <input name="nickName" value={nickName} type="text" onChange={onChange} />
                <h1>{`NAME : ${name}`}</h1>
                <h1>{`NICKNAME :${nickName}`}</h1>
            </>
        )
    }

---

## UseMemo

    state가 수정 될 때마다 함수가 호출 되는 것을 방지하기 위함
    ex) input이 수정이 될 때마다 updating이 된다.
    주로 랜더링 성능을 최적화 시킬 때 사용한다.

    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

---

## UseRef

    특정 행동에 focus를 사용하고 싶다면

    1. 생성 const inputEl = useRef(null);
    //괄호의 값은 바뀌어도 렌더링 되지 않음
    //그래서 랜더링과 관련이 없는 값을 관리할 때 사용 할수 있음

    2. 코드 적용 inputEl.current.focus();
    //focus가 발생할 함수에 적용

    3. 컴포넌트 적용 ref={inputEl}
