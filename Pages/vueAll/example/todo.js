var app = new Vue({
   el: "#app",
   data: {
      todos: [],
      newTodo: ''
   },
   methods: {
      addTodo: function (value) {
         // console.log(value);
         //this撈出data內容 vue的規範
         this.todos.push({ content: value, completed: false });
      },
      removeTodo: function (value) {
         // console.log(value);
         this.todos.splice(this.todos.indexOf(value), 1);
      }
   }
});

