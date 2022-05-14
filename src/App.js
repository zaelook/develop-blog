import React, { useState } from "react";
import logo from "./logo.svg";
import statePaint from "./source/state.png";
import "./App.css";

function App() {
  let [title, titleChange] = useState([
    "javascript class",
    "react class",
    "this is my private blog",
    "what is state change",
    "develop A to Z",
  ]);

  let [likeCount, likeCountChange] = useState(0);
  // @ let [변수, 변수변경할때] = useState(변하는값?);
  // @ state를 사용해야 값이 변하면 HTML이 재렌더링이 됌 (새로고침 말고)
  let posts = "my title";

  return (
    <div className="App">
      <div className="black-nav">
        <div>develop Blog</div>
      </div>

      <section className="section01">
        <div className="content">
          <div className="comment">
            <p>
              <span>안녕</span>하세요
            </p>
            <p>
              여기는 <span>개발자 블로그</span> 입니다
            </p>
            <p>
              <span>좋은 아이디어를</span> 메모해요.
            </p>
          </div>
        </div>
      </section>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          titleChange(copy);
        }}
      >
        abc 순서 정렬
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          // !!! 밑에 기나긴 주석에 대한 선 요약
          // ! state가 array/object면 shallow copy(독립적 사본)을 만들어서 수정해야함

          // ? 원본 title 데이터(array)를 수정하지 않기 위해서 복사본을 만들어서 한다
          // ? copy에 title에 담긴 array(javascript class, react class, this is... 를 넣는다)
          // ? copy 에 title을 넣었으니 copy[0] = title[0]이 된다 [1] [2]도 마찬가지

          // ! state 변경함수 특징
          // ! - 기존 state와 신규 state의 내용이 같으면 변경 안해줌

          // ! ( [...title] 처럼 써야하는 이유? )
          // ! 그냥 let copy = title 하면 안되는 이유
          // ! title에는 array가 담긴게 아니라 array가 담긴 위치(화살표로 연결)가 담긴것
          // ! 고로 let copy = title 하면 copy == title > state 변경함수 특징상 같으니 변경x
          // ! [...title] 은 새로운 array를 만들어서 새로운 화살표를 연결해주세요 라는 문법
          // ! title에 담긴 array의 괄호를 벗겼다가 다시 씌운다고 함.>이건 뭔소린지 잘

          // ! [ array/object ] 특징
          // !  let arr = [1,2,3]
          // ! >> arr 에는 [1,2,3]이 담기는게 아니라 [1,2,3]이 담기는 위치(화살표로 연결)가 저장되는것
          // ! 더 자세히 궁금하면 reference data type에 대해서 공부 해보세요.

          copy[0] = "HTML/CSS class";
          // copy[0]>'javascript class'를 'HTML/CSS class'로 변경한다.

          titleChange(copy);
          // title에 담긴 titleChange라는 변경함수를 통해서 title을 copy로 바꾸는것
          // 이 과정에서 원본 array(title)은 그대로 남아있고 수정된 array(copy)가 적용

          // # title[0] = 'HTML/CSS class';
          // # >> title array에 담긴 0번째 내용을 변경하는것이지 title를 변경하는것이 아님
          // # 고로 아래에 적힌 title은 원래 맨 위에 선언한 title과 같기 때문에
          // # state 변경함수 특징상 기존 state와 신규 state의 내용이 같아서 변경이 안됌.
          // # 기존 state == 신규 state > 변경 x
          // # titleChange(title);
        }}
      >
        버튼
      </button>
      <div className="list">
        <h3>
          <span> {title[0]} </span>
          <span
            onClick={() => {
              likeCountChange(likeCount + 1);
            }}
          >
            👍
          </span>{" "}
          {likeCount}
          <span
            onClick={() => {
              likeCountChange(likeCount - 1);
            }}
          >
            👎
          </span>
        </h3>
        <p>created 22-05-12 </p>
        <p className="view"></p>
        <hr />
      </div>
      <div className="list">
        <h3>
          <span> {title[1]}</span>
        </h3>
        <p>created 22-05-12 </p>
        <p className="view"></p>
        <hr />
      </div>
      <div className="list">
        <h3>
          <span>{title[2]}</span>
        </h3>
        <p>created 22-05-12 </p>
        <p className="view"></p>
        <hr />
      </div>
      <div className="list">
        <h3
          onClick={() => {
            document.querySelector(".testview").classList.toggle("show");
          }}
        >
          <span>{title[3]}</span>
        </h3>
        <p>created 22-05-12 </p>
        <p className="view testview">
          <img src={statePaint}></img>
        </p>

        <hr />
      </div>
      <div className="list">
        <h3>
          <span>{title[4]}</span>
        </h3>
        <p>created 22-05-12 </p>
        <p className="view"></p>
        <hr />
      </div>
    </div>
  );
}

export default App;
