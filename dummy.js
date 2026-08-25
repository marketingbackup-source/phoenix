// global
let obj = {
    i: 5,
  nestObj: {
    i: 3,
    cal: () => {
      console.log(this.i)
    },
  },
  hello() {
    this.nestObj.cal();
  },
};

obj.hello();
