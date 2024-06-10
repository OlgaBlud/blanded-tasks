import { tasks } from './data';
import { refs } from './refs';
import { renderTasks } from './render-functions';

export function onTaskFormSubmit(event) {
  event.preventDefault();
  const task = event.target.taskName.value.trim();
  console.log(task);
  if (!task) {
    console.log('Empty input');
    return;
  }
  tasks.push(task);
  event.target.taskName.value = '';
  renderTasks(tasks);
  console.log(tasks);
}

export function delTaskFormClick() {
  console.log(refs.taskList.dataset.id);
  for (let i = 0; i < tasks.length; i++) {
    if (i === refs.taskList.dataset.id) {
    }
  }
}
