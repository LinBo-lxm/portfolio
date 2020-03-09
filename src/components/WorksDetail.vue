<template lang="pug">
  div
    nav.breadcrumb-nav
      ul
        li
          router-link(to="/") Home
        li
          router-link(to="/works") Works
    article.article
      h1.headline(v-cloak) {{ filteredData.itema }}
      div(v-if="filteredData.slug === 'workdetail01'").works_imgtxt01
        img(src="../assets/img/img_protfolio01.jpg" width="" height="" alt="")
        p Protfolio Site
      div(v-if="filteredData.slug === 'workdetail02'").works_imgtxt01a
        img(src="../assets/img/img_ea01.jpg" width="" height="" alt="")
        p Expert Advisor
      .works_detail-detail
        p(v-cloak) {{ filteredData.text }}
        p(v-cloak) 制作年：{{ filteredData.year }}
        p(v-cloak) {{ filteredData.role }}
        p(v-cloak)
          a(:href="filteredData.url" target="_blank") {{ filteredData.urlTitle }}
      div(v-if="filteredData.slug === 'workdetail01'").works_imgtxt02
        img(src="../assets/img/img_work5.jpg" width="" height="" alt="")
        p Code Changes The World
      div(v-if="filteredData.slug === 'workdetail02'").works_imgtxt02a
        img(src="../assets/img/img_work7.jpg" width="" height="" alt="")
        p プログラムにて世界を美しく
</template>

<script>
  export default {
    props: ['data'],
    mounted() {
      document.title = this.filteredData.itema + '- LinBo\'s portfolio'

      let meta = document.getElementsByTagName('meta')
      for (var i = 0; i < meta.length; i++) {
        if (meta[i].name.toLowerCase() == 'description') {
          meta[i].content = 'LinBoが作成した ' + this.filteredData.itema + ' のページです'
        }
      }
    },
    computed: {
      filteredData: function () {
        console.log(window.location.host);
        console.log(window.location.href);
        console.log(window.location.protocol);
        var url = window.location.protocol+ '//' + window.location.host + '/portfolio/works/'
        var matchData = this.data.filter(function(item, index){
          if (item.slug === window.location.href.replace(url, '')) return true;
        })
        return matchData[0]
      }
    }
  }
</script>

<style lang="scss">
  .breadcrumb-nav {
    font-size: 1.2rem;
    text-align: left;
    li {
      display: inline-block;
      & + li {
        &::before {
          content: ' / ';
        }
      }
    }
  }
</style>
