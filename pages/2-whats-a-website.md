---
class: bg-orange-50 dark:bg-black
clicks: 5
transition: slide-up
---

# 網站哪來的？
造訪網站時經過<b>伺服器處理</b>，到了你的<b>瀏覽器</b>的時候，如果沒有問題就可以被你看見。

<div class="icons mt-30" :class="{ 'is-disabled': $clicks > 4 }">
    <div class="flex flex-row items-center justify-center gap-4 text-8xl">
        <lucide-laptop />
        <lucide-arrow-right class="text-gray" v-click="1" />
        <lucide-globe class="text-yellow-500" v-click="2" />
        <lucide-arrow-right class="text-gray" v-click="3" />
        <lucide-compass class="text-blue-500" v-click="4" />
    </div>
</div>

<div class="flex flex-row items-center gap-16 blocks flex flex-col justify-center" :class="{ 'is-active': $clicks > 4 }">
    <img src="../images/2_block.svg" />
</div>

<style>
.icons, .blocks {
    transition: all 400ms ease;
}

.icons {
    opacity: 100%;
}

.blocks {
    opacity: 0%;
    transform: translateY(0px);
}

.icons.is-disabled {
    opacity: 50%;
    filter: blur(20px);
}

.blocks.is-active {
    opacity: 100%;
    transform: translateY(-160px);
}
</style>

---
class: bg-orange-50 dark:bg-black
transition: slide-up
clicks: 7
---

# 瀏覽器怎麼知道網站長怎樣？

<div class="flex flex-row gap-10 items-center justify-center mt-30">
    <div class="flex flex-col items-center gap-2">
        <img src="../images/2_html.png" width="120" />
        <h3 class="!m-0" v-click>HTML</h3>
        <p class="!m-0 text-center" v-click>網站內容主要他管的<br />（網站的骨架）</p>
    </div>
    <div class="flex flex-col items-center gap-2 transition-all duration-200" :style="{ opacity: $clicks == 7 ? '40%' : '' }">
        <img src="../images/2_css.png" width="120" />
        <h3 class="!m-0" v-click>CSS</h3>
        <p class="!m-0 text-center" v-click>網站好看都是他害的<br />（網頁的外觀）</p>
    </div>
    <div class="flex flex-col items-center gap-2 transition-all duration-200" :style="{ opacity: $clicks == 7 ? '40%' : '' }">
        <img src="../images/2_js.png" width="120" />
        <h3 class="!m-0" v-click>JavaScript</h3>
        <p class="!m-0 text-center" v-click>網站難用都他造成的<br />（網頁的神經）</p>
    </div>
</div>
