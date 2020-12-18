# 밸로퍼트 리액트 (ES6)

## props 기본값 설정하기

        MyComponent.defaultProps = {
            name : "기본 이름",
        }

## 비구조화 할당 문법

        const MyComponent = ({name}) => {
            return(
                <div>안녕하세요. 제 이름은 {name}입니다.</div>
            )
        }

## 함수내 this사용하기 (bind사용)

        함수내에서 this를 사용하기 위해서는 this를 bind시켜야 사용할 수 있다.
        bind를 사용하지 않고 this를 사용하려면 ES6의 화살표 함수를 사용한다.

## Class Component 객체안에서 [ key ]를 사용하여 중복코드 없애기

        handleChange = e =>{
                this.setState({
                    [e.target.name] : e.target.value
                })
                console.log(e.target.value);
        }
        key값에 [ ]을 사용하고 [ ]안의 래퍼런스가 실제 가리키는 key값으로 사용된다.

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
