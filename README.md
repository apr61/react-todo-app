# Simple React Todo app

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![Sceenshot of output](./public/output/screenshot.png)

### Links

- Solution Url: [Solution Url](https://github.com/apr61/react-todo-app)
- Live Site Url: [Live Site Url](https://react-todo-app-chi-livid.vercel.app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```js

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return
    const orderedTodos = todos;
    const [reorderd] = orderedTodos.splice(source.index, 1);
    orderedTodos.splice(destination.index, 0, reorderd);
    return setTodos(orderedTodos);
  }

  <Droppable droppableId='todos'>
    {(provided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
      {filteredTodos().map((todo, index) => (
        <ToDo index={index} todo={todo} onClickMarkAsCompleted={markAsCompleted} onRemove={deleteTodo} key={todo.id} />
      ))}
      {provided.placeholder}
      </div>
    )}
  </Droppable>

```

### Useful Resources

- [React Drag and Drop Tutorial | React Beautiful DnD Tutorial](https://www.youtube.com/watch?v=uEVHJf30bWI&t=1196s)

## Author

- Frontend Mentor - [@apr61](https://www.frontendmentor.io/profile/apr61)
- Twitter - [@apradeepreddy9](https://www.twitter.com/apradeepreddy9)

## Acknowledgements

I got inspired by [igomonteiro](https://github.com/igomonteiro/frontendmentor-challenges-monorepo/tree/master/fem_todo) soluiton.
