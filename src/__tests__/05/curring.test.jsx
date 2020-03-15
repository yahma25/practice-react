describe('커링 테스트', () => {
  it('케잇', () => {
    function curringFunc(some) {
      return thing => {
        console.log(some + thing);
      };
    }

    const curring = curringFunc('some');
    curring('thing');

    // 출력: something
  });

  it('함수 합치기', () => {
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const multiplyX = x => a => multiply(x, a);
    const addX = x => a => add(x, a);
    const addFour = addX(4);
    const multiplyTwo = multiplyX(2);
    const multiplyThree = multiplyX(3);

    // 배열로 한 번에 reduce
    const compose = [multiplyTwo, multiplyThree, addFour].reduce(
      function(prevFunc, nextFunc) {
        return function(value) {
          return nextFunc(prevFunc(value));
        };
      },
      function(k) {
        return k;
      }
    );
    expect(compose(10)).toBe(64);

    // 직접 구현
    const formulaDirect = function(value) {
      return addFour(
        // multiplyThree에게 파라미터를 전달할 func
        (function(value) {
          return multiplyThree(
            // multiplyTwo에게 파라미터를 전달할 func
            (function(value) {
              return multiplyTwo((k => k)(value)); // 초기 func이 반환한 func에 value 전달
            })(value) // multiplyTwo가 반환한 func에 value 전달
          );
        })(value) // multiplyThree가 반환한 func에 value 전달
      );
    };
    expect(formulaDirect(10)).toBe(64);

    // const equation = (a, b, c) => x => x * a * b + c;
    // const formula2 = equation(2, 3, 4);
    // console.log(formula2(10));
  });

  it('compose 실무', () => {
    function compose() {
      const funcArr = Array.prototype.slice.call(arguments);
      return funcArr.reduce(
        function(prevFunc, nextFunc) {
          return function(value) {
            return nextFunc(prevFunc(value));
          };
        },
        function(k) {
          return k;
        }
      );
    }
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const multiplyX = x => a => multiply(x, a);
    const addX = x => a => add(x, a);
    const addFour = addX(4);
    const multiplyTwo = multiplyX(2);
    const multiplyThree = multiplyX(3);
    const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);

    expect(formulaWithCompose(10)).toBe(64);
  });

  it('compose 실무 - 인자 여러 개', () => {
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const multiplyX = x => a => multiply(x, a);
    const addX = x => a => add(x, a);
    const addFour = addX(4);
    const multiplyTwo = multiplyX(2);
    const multiplyThree = multiplyX(3);

    function compose() {
      const funcArr = Array.prototype.slice.call(arguments);
      return funcArr.reduce(
        function(prevFunc, nextFunc) {
          return function() {
            const args = Array.prototype.slice.call(arguments);
            return nextFunc(prevFunc.apply(null, args));
          };
        },
        function(k) {
          return k;
        }
      );
    }

    const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);

    expect(formulaWithCompose(10)).toBe(64);
  });

  it('compose 실무 - 인자 여러 개 전개 연산자', () => {
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const multiplyX = x => a => multiply(x, a);
    const addX = x => a => add(x, a);
    const addFour = addX(4);
    const multiplyTwo = multiplyX(2);
    const multiplyThree = multiplyX(3);

    function compose(...funcArr) {
      return funcArr.reduce(
        function(prevFunc, nextFunc) {
          return function(...args) {
            return nextFunc(prevFunc(...args));
          };
        },
        function(k) {
          return k;
        }
      );
    }

    const formulaWithCompose = compose(multiplyTwo, multiplyThree, addFour);

    expect(formulaWithCompose(10)).toBe(64);
  });
});
