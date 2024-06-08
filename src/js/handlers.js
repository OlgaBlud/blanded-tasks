import { tasks } from './data';
import { renderTasks } from './render-functions';

export function onTaskFormSubmit(event) {
  event.preventDefault();
  const task = event.target.taskName.value.trim();
  if (!task) {
    console.log('Empty input');
    return;
  }
  tasks.push(task);
  event.target.taskName.value = '';
  renderTasks(tasks);
  console.log(tasks);
}
