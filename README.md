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
