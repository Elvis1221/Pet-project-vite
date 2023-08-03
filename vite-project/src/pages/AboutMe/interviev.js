function a() {
  // this.prop = '321'
}

a.prototype = {
  prop: '123'
}

const objA = new a()

// objA.prop = '123'

console.log(objA);