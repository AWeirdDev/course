---
class: bg-orange-50 dark:bg-black
---

# 自介

<div class="flex flex-row gap-40 mt-16 items-center">

<div>
    <div class="avatar w-40 h-40"></div>
    <h3 class="font-bold">awd</h3>
    <p class="opacity-50 !p-0 !m-0">AWeirdDev &middot; he/him</p>
</div>

<div>
    <ul>
        <li v-click="1">
            <b>興趣：</b>
            浪費生命、研究系統架構（也就是浪費生命）
        </li>
        <li v-click="2">
            <b>專長：</b>
            浪費生命、網頁、
            <span v-mark.circle.orange="2">初階</span>系統語言
        </li>
        <li v-click="3">
            <b>學歷：</b>
            國中
        </li>
    </ul>
</div>

</div>

<style>
.avatar {
    border-radius: 50%;

    background: url(https://github.com/AWeirdDev.png) no-repeat;
    background-size: cover;
    background-position: center;

    margin-bottom: 12px;
}
</style>
