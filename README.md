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
