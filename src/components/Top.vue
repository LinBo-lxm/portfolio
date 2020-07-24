<template lang="pug">
  .top
    .top_catch
    section.top_works
      .top_works-inner
        h2.headline Works
        .works
          div(v-for="d in data").works_box
            router-link(:to="'/works/' + d.slug").common_link-box
              .common_thumb.effect_img-filter(v-if="d.slug === 'workdetail01'")
                img(src="../assets/img/img_work1.jpg" width="" height="" alt="")
              .common_thumb.effect_img-filter(v-if="d.slug === 'workdetail02'")
                img(src="../assets/img/img_work2.jpg" width="" height="" alt="")
              div.works_name(v-cloak) {{ d.title }}
      .common_more
        router-link.common_more-link(to="/works") See More ＞＞

    section.top_about
      .section_inner
        h2.headline About
        .top_about-inner
          .about_text
            h3.about_name LinBo
              small.about_small Code change the world
            div.about_role Web Engineer / Front-end Developer
            div.about_sns
              a(href="https://github.com/LinBo-lxm")
                img(src="../assets/img/github.png" width="32" height="32" alt="")
                | GitHub
              a(href="https://line.me/ti/p/vQb2Q6OM0Z")
                img(src="../assets/img/line.png" width="32" height="32" alt="")
                | Line
              a(href="https://qiita.com/LinBo-lxm")
                img(src="../assets/img/qiita.png" width="32" height="32" alt="")
                | Qiita
              a(href="https://hub.docker.com/repository/docker/linbolxm/static-site")
                img(src="../assets/img/docker.png" width="115" height="32" alt="")
            div.about_other
              router-link(to="/about") See More ＞＞
          .about_thumb
            img(src="../assets/img/icon1.jpg" alt="icon1")
            img(src="../assets/img/icon2.jpg" alt="icon2")

    section.top_contact
      .section_inner
        h2.headline Contact
        .common_text.top_contact-inner
          router-link(to="/contact").txtdec01 お問い合わせフォーム
</template>

<script>
  export default {
    name: 'top',
    title: 'Top',
    description: 'LinBo portfolio',
    props: ['data']
  }

</script>
