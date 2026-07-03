---
class: bg-black/90 text-white/80
layout: center
transition: slide-up
---

<h1>
    <span class="text-yellow">J</span>
    <span>ava</span>
    <span class="text-yellow">S</span>
    <span>cript</span>
</h1>

---
class: bg-black/90 text-white/80
layout: center
transition: slide-up
clicks: 1
---

<div class="flex flex-col items-center">

<h1 v-if="$clicks == 0">老樣子，到底是不是程式語言？</h1>
<img src="../images/5_thinking.jpg" class="rounded-md" width="320" v-if="$clicks == 1" />

</div>

---
class: bg-black/90 text-white/80
transition: slide-up
colorSchema: dark
---

# 宣告

<div class="absolute inset-0 flex items-center justify-center">
    <pre class="text-6xl flex gap-4">
        <span class="text-blue" v-click="1">let&nbsp;</span>
        <span class="text-orange" v-click="2">const&nbsp;</span>
        <span class="text-red opacity-60% line-through" v-click="3">var</span>
    </pre>
</div>

<div class="absolute inset-0 flex flex-col items-center justify-center mt-80">
    <v-switch class="text-center">
      <template #1>
          <span class="text-4xl">宣告一個變數</span>
      </template>
      <template #2>
          <span class="text-4xl">宣告一個<b>不可替換</b>變數</span>
      </template>
      <template #3>
          <span class="text-4xl opacity-60%">早期宣告方式，不建議</span>
      </template>
    </v-switch>
</div>

---
class: bg-black/90 text-white/80
transition: slide-up
colorSchema: dark
clicks: 1
---

# 分號戰爭

<div class="absolute inset-0 flex flex-col items-center justify-center gap-4">
    <img src="../images/5_drinking.png" class="rounded-md" width="320" v-if="$clicks == 1" />
    <h1 v-if="$clicks == 1">不用</h1>
</div>

---
class: bg-black/90 text-white/80
transition: slide-up
colorSchema: dark
---

# 輸出結果

<div class="absolute inset-0 flex items-center justify-center">
    <pre class="text-4xl flex">
        <span>console</span>
        <span class="opacity-60%" v-click="1">.</span>
        <span class="text-blue" v-click="1">log</span>
        <span class="opacity-60%" v-click="1">(</span>
        <span class="text-orange" v-click="2">"Hello, World!"</span>
        <span class="opacity-60%" v-click="3">)</span>
        <span class="opacity-60%" v-click="4">;</span>
    </pre>
</div>

---
transition: slide-up
---

# 試試看

```js {monaco-run}{autorun:false}
let pizza = 0;
pizza = pizza + 1;
pizza = pizza * 100;

// pizza 現在是 100
console.log(pizza);

// 宣告一個不會替換掉的數字
const zero = 0;

// 這會出錯：
zero = zero + 1;
//   ^ TypeError: Assignment to constant variable.
```

---
layout: center
transition: slide-up
---

# HTML + JavaScript?

---
layout: two-cols
transition: slide-up
---

`index.html`

```html
<button>Wow!</button>
<button>Wie!</button>
```

<br />
<hr />
<br />

`index.js`

```js{none|1|3-5|7|all}
const button = document.querySelector("button");

function onClick() {
    window.alert("我BANG！");
}

button.addEventListener("click", onClick);
```

::right::

<div class="ml-8 mt-4">
    <div v-if="$clicks == 0">
        <Browser url="localhost:3000">
            <div class="p-2">
                <Button class="font-[serif] bg-gray-200 !p-0.5 !py-0 text-xs !rounded-sm !cursor-default">Wow!</Button>
                <Button class="font-[serif] bg-gray-200 !p-0.5 !py-0 text-xs !rounded-sm !cursor-default">Wie!</Button>
            </div>
        </Browser>
        <div class="abs-br m-14">
            <h1>兩顆按鈕</h1>
        </div>
    </div>
    <div v-if="$clicks > 0 && $clicks < 4">
        <Browser url="localhost:3000">
            <div class="p-2">
                <Button class="font-[serif] bg-gray-200 !p-0.5 !py-0 text-xs !rounded-sm !cursor-default ring-2">Wow!</Button>
                <Button class="font-[serif] bg-gray-200 !p-0.5 !py-0 text-xs !rounded-sm !cursor-default opacity-30%">Wie!</Button>
            </div>
        </Browser>
        <div class="abs-br m-14">
            <h1 v-if="$clicks == 1">選取第一個按鈕元素</h1>
            <h1 v-if="$clicks == 2">寫一個函式處理點擊事件</h1>
            <h1 v-if="$clicks == 3">註冊這個事件</h1>
        </div>
    </div>
    <div v-if="$clicks == 4">
        <Browser url="localhost:3000">
            <div class="p-2">
                <Button class="font-[serif] bg-gray-200 !p-0.5 !py-0 text-xs !rounded-sm !cursor-default" onclick="alert('我BANG！')">Wow!</Button>
                <Button class="font-[serif] bg-gray-200 !p-0.5 !py-0 text-xs !rounded-sm !cursor-default">Wie!</Button>
            </div>
        </Browser>
        <div class="abs-br m-14">
            <h1>完成！</h1>
        </div>
    </div>
</div>

---
layout: center
transition: slide-up
---

# 又又又又又寫一個網站
在本地創建一個 `app.js` 檔案，然後嵌入 `index.html`：

<div class="text-left">

```html
<!-- ... -->

<body>
  <!-- ... -->
  <script type="text/javascript" src="/app.js"></script>
</body>

<!-- ... -->
```

</div>
