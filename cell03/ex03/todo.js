function getTodos() {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      if (cookie.startsWith('todos=')) {
        return JSON.parse(decodeURIComponent(cookie.split('=')[1]));
      }
    }
    return [];
  }
  
  function saveTodos(todos) {
    document.cookie = 'todos=' + encodeURIComponent(JSON.stringify(todos)) + '; path=/';
  }
  
  function renderTodos() {
    const ft_list = document.getElementById('ft_list');
    ft_list.innerHTML = '';
    const todos = getTodos();
    for(let i = todos.length -1 ; i>=0 ; i--) {
      const div = document.createElement('div');
      div.className = 'todo';
      div.textContent = todos[i];
      div.onclick = function () {
        if (confirm('Do you want to delete this To Do?')) {
          todos.splice(i, 1);
          saveTodos(todos);
          renderTodos();
        }
      };
      ft_list.prepend(div);
    };
  }
  
  function newTodo() {
    const text = prompt('Enter your TO DO:');
    if (text && text.trim() !== '') {
      const todos = getTodos();
      todos.unshift(text.trim());
      saveTodos(todos);
      renderTodos();
    }
  }
  
  window.onload = renderTodos;