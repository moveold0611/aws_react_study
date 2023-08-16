import React, { Fragment } from 'react';

function TestBox({inputTitleName, testName, children, isShow}) { // react return은 괄호가 필요
    // { inputTitleName, testName, children } 을 매개변수로 사용 가능

    const obj = {
        testName : "aaa",
        myName : "김준일"
    }

    // const { testName, myName } = obj;
        // 객체 개별 추출 가능
    // console.log(testName)
    // console.log(inputTitleName)
    // console.log(myName)
    // console.log(props)

    return (
        // 프래그먼트 
        <Fragment> 
        <div>
            {/* <label>{props.inputTitleName}</label> */}
            <label>{inputTitleName}</label>
        </div>

        {isShow && children}
        <div>
            <input type="text"></input>
        </div>
        {children}  
        </Fragment>
    );
    // 자식요소를 받는 children
}

export default TestBox;