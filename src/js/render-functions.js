import { refs } from './refs';

export function renderTasks(tasks) {
  const markup = tasks
    .map(
      (task, idx) => ` <li>
          <span>${task}</span>  <button type="button" data-id="${idx}">X</button>
        </li>`
    )
    .join('');
  refs.taskList.innerHTML = markup;
}
