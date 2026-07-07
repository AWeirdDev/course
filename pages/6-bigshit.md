---
layout: two-cols
---

# 大實作：待辦事項

- HTML：標題、輸入框、新增按鈕、`<ul>` 裝東西
- CSS：把這些變得漂亮一點
- JavaScript：監聽按鈕、**創造元素？**、⋯⋯

<br />

```js
// 取得輸入框內容
const input = document.querySelector("input");
const text = input.value;

// 創造 <li>
const li = document.createElement("li");
li.textContent = text;

// 加到 <ul> 裡
const ul = document.querySelector("ul");
ul.appendChild(li);

// 清空輸入框
input.value = "";
```

::right::

<div class="ml-4">
    <Browser url="localhost:3000">
        <Todos />
    </Browser>
</div>

---
layout: center
transition: slide-up
---

# 成發可以做啥

超好笑我也不知道，但你可以試試這些：

- **個人介紹網站**：做圖文排版、加個按鈕互動，絕對 safe
- **簡易計算機**：輸入兩個數字，選運算符號，按按鈕顯示結果
- **1A2B**：輸入 4 位數字，輸出幾 A 幾 B
- **計時器/碼表**：開始/暫停/重置按鈕，需要 `setInterval()`

有不會的話可以問問你身邊的電神，或是問 Claude，<br />但強烈建議不要 vibe code，因為會發生什麼事我不敢說
