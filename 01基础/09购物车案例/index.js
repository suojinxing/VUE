let app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: '1',
        name: 'Java入门',
        date: '2019-8',
        price: 89.5,
        count: 1
      }, {
        id: '2',
        name: 'C++入门',
        date: '2019-8',
        price: 89.5,
        count: 1
      }, {
        id: '3',
        name: 'Groovy入门',
        date: '2019-8',
        price: 89.5,
        count: 1
      }, {
        id: '4',
        name: 'Scala入门',
        date: '2019-8',
        price: 89.5,
        count: 1
      },
    ],
  },
  methods: {
    increment(id) {
      this.books[id].count++
    },
    decrement(id) {
      this.books[id].count--
    },
    removeHandler(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.books.length; i++) {
        total += this.books[i].count * this.books[i].price;
      }

      total = 0
      for (let i in this.books) {
        total += this.books[i].count * this.books[i].price
      }

      total = 0
      for (let book of this.books) {
        total += book.count * book.price
      }

      total = 0
      return this.books.reduce((pre,book)=>{
        return pre + book.count * book.price
      },0)
    }
  },
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2)
    }
  }
})