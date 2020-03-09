<template lang="pug">
  .page
    section.section
      h1.headline.page_headline About
        .sub LIN BO's Profile
      p(align="center")
        img(src="../assets/img/profileimg.png")
      h2 My 
        small Title
      p.about_paragraph Web Engineer / Front-end Developer
      p.about_paragraph 東京にてフリーランスのWeb開発をしております。

    section.section
      h2.section_headline 経歴

      ul.about_list
        li 2006年より大学を卒業してからSIer会社に入社しシステム開発を始める。（中国）
        li 2012年より日本に移住しSIer会社でシステム開発を従事する。（以降は日本で働く）
        li 2019年よりフリーランスへ転向。

    section.section
      h2.section_headline ディーテイル

      ul.about_list
        li 氏名：藺　波　LIN BO
        li 国籍：中国
        li 性別：男性
        li 年齢：37
        li 所在地：東京

    section.section
      h2.section_headline スキル

      ul.about_list
        li 言語
          ul
            li Javascript / jQuery / Vue.js
            li CSS3 / Scss
            li HTML5
            li JAVA / Python  
        li DB
          ul
           li PostgreSQL
           li MySQL
           li Adobe Illustrator/Figma
        li サーバＯＳ
          ul
            li Windows
            li Linux
            li Unix
        li ツール
          ul
            li GitHub / GitLab

    section.section
      h2.section_headline 関連リンク

      ul.about_list
        li
          a(href="https://github.com/LinBo-lxm") GitHub
        li
          a(href="https://qiita.com/LinBo-lxm") Qiita
        li
          a(href="https://store.line.me/stickershop/product/1018430") LINEスタンプ
</template>

<script>
  export default {
    title: 'About',
    description: 'プロフィール'
  }
</script>
