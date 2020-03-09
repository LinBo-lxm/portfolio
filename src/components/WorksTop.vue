<template lang="pug">
  .works_top
    h1.headline.page_headline Works
      .sub Service
    ul.works_list
      li.works_item(v-for="d in data")
        router-link(:to="'/works/' + d.slug").common_link-box
          div(v-if="d.slug === 'workdetail01'").works_thumb
            img(src="../assets/img/img_work3.jpg" width="" height="" alt="")
          div(v-if="d.slug === 'workdetail02'").works_thumb
            img(src="../assets/img/img_work4.png" width="" height="" alt="")
          h2(v-cloak).works_list-title {{ d.title }}
        .works_list-detail
          a(:href="d.path") GitHubに公開
          p(v-cloak).works_description {{ d.text }}
          p(v-cloak).works_year 制作年：{{ d.year }}
  </template>

<script>
  export default {
    title: 'Works',
    description: 'LinBo制作',
    props: ['data']
  }
</script>
