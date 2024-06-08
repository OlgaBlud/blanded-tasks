import"./assets/modulepreload-polyfill-3cfb730f.js";const a=[],o={taskForm:document.querySelector(".task-form"),taskList:document.querySelector(".task-list")};function r(t){const s=t.map((n,e)=>` <li>
          <span>${n}</span>  <button type="button" data-id="${e}">X</button>
        </li>`).join("");o.taskList.innerHTML=s}function u(t){t.preventDefault();const s=t.target.taskName.value.trim();if(!s){console.log("Empty input");return}a.push(s),t.target.taskName.value="",r(a),console.log(a)}o.taskForm.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
