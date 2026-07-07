const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

function addTodo() {
    // 如果輸入框是空的，不做任何事
    if (input.value === "") {
        return;
    }

    // 建立一個新的 <li> 元素
    const item = document.createElement("li");

    // 設定文字內容
    item.textContent = input.value;

    // 把新的 <li> 加進 <ul> 裡
    list.appendChild(item);

    // 清空輸入框，方便繼續輸入下一項
    input.value = "";
}

button.addEventListener("click", addTodo);
