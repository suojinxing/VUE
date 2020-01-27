let name = '索金星'

function getName() {
  return name
}
// ES6导出变量
export {
  name
}

// ES6导出函数
export function sum(num1, num2) {
  return num1 + num2;
}

// ES6导出对象
export class Person {
  run() {
    console.log("在奔跑");
  }
}
