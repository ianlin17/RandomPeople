# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


## 該如何執行你完成的專案。

1. 依照畫面確認元件, 分別有select, switch, pagination, list, 以及 card
2. 先去打api, 確認資料後開始做畫面
3. 開發Card, UI完成後把api的資料做搭配排好成30個
4. 開發上方header, switch先用好UI, 主要做select以及對接onChange時打api
5. 開發pagination, 以及onChange時打api
6. 實作switch功能修改CSS樣式
7. 重整後依然記住設定
8. RWD調教

## 在這份專案中你遇到的困難、問題，以及解決的方法

1. 由於此專案tech stack對我皆為全新, 所以一開始先花時間認識vite, vue3, tailwindcss, pug
2. 在做pagination要置中時, 發現tailwindcss沒有相對的class, 所以設置客製化class使用@layer
3. 抽離元件需要監聽上下層元件, 所以重看官方文件, 使用了emit以及watch去實作
4. rwd部分, 由於pug不支援特殊語法(:), 所以使用tailwindcss的separator去實現