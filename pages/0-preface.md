---
layout: center
---

<img src="../images/0_china_tv_weird.jpg" width="600" class="rounded-md" />

---
layout: center
transition: fade
---

<img src="../images/0_china_tv_homescreen.jpg" width="600" class="rounded-md" />

---
layout: center
transition: fade
---

<img src="../images/0_china_tv_homescreen_zoomed.png" width="600" class="rounded-md" />

<div v-click="1" class="abs-tl inset-0 flex items-center justify-center ml-120 mt-20">
    <img src="../images/0_broken_image.png" width="240" class="rounded-md" />
</div>

---
layout: center
clicks: 1
transition: slide-up
---

<div 
    class="absolute top-0 left-0 right-0 transition-all ease-in-out"
    :style="{ transform: $clicks == 0 ? 'translateY(-100%)' : 'translate(0%)' }">
    <div class="w-full flex flex-row items-center justify-center text-3xl gap-2 bg-white text-black py-5">
        <span>兄弟以為他是正常的</span>
        <div class="flex flex-row gap-1">
            <Emoji emoji="😭" class="size-8" />
            <Emoji emoji="😭" class="size-8" />
            <Emoji emoji="😭" class="size-8" />
        </div>
    </div>
</div>

<img
  src="../images/0_china_tv_components.png"
  class="rounded-md transition-all ease-in-out"
  :width="$clicks == 0 ? 600 : 450"
  :style="{ marginTop: $clicks == 0 ? 0 : '100px' }"
/>

---
layout: center
---

# 幹嘛學網頁設計？

---
layout: center
---

# 可以學拆解！

<div class="abs-br m-10 text-xs">
    <a 
        href="https://homepage.ntu.edu.tw/~anatomy/Default.html"
        target="_blank"
        class="!border-none !opacity-50 !hover:brightness-50 !hover:text-white
               flex flex-row items-center gap-1"
    >
        <span>國立臺灣大學醫學院解剖學暨細胞生物學科研究所</span>
        <carbon:launch size="3" />
    </a>
</div>
