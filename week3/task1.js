const expect = (el) => {
  return {
      toBe: (newStr) => {
          if (el === newStr)
              return;

          if (typeof el !== typeof newStr) {
              console.log('Not the same type');
              return;
          }


          if (el !== newStr) {
              console.log('Not the expected value')
              return;
          }
      },
      toHaveClass: (className) => {
          if (el.classList.contains(className))
              return;

          if (!(el instanceof HTMLElement)){
              console.log('Not the same type');
              // throw new TypeError('')
              return;
          }

          const elementClassNames = el.getAttribute('class').split(' ');
          const hasClass = elementClassNames.includes(className)

          if (!hasClass) {
              console.log('Class not available')
              // throw new Error('Class not available')
              return;
          }
      }
  };
}

expect('abc').toBe('abc');
expect('abc').toBe('xyz');
expect('abc').toBe(5);




const arr = ['a', 'b', 'c']
console.log(arr.includes('d'))