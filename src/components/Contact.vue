<template lang="pug">
  .page
    h1.headline.page_headline Contact 
      .sub お問い合わせ
    form
      input(name="SPREADSHEET_ID" type="hidden" value="1jSEE8Z_QnHYmUMmPIbb12rkxw0vF8FXkcVceAVgPFj4")
      input(name="SHEET_NAME" type="hidden" value="問い合わせフォーム")
      .form
        label.form__label メールアドレス
        input(type="email" name="your-email" placeholder="your@email.com" required).wide#mail
      .form
        label.form__label お名前
        input(type="text" name="your-name" placeholder="Your Name").wide#name
      .form
        label.form__label メッセージ
          span.label-required 必須
        textarea(name="your-message" placeholder="Message" rows="8" required)#message
      .form.text-center
        button(type="button" v-on:click="sendMessage()")#submit.form_submit Submit
</template>

<script>
  import $ from "jquery"
  export default {
    title: 'Contact',
    description: 'LINBOへのお問い合わせページ',
    methods: {
      sendMessage() {
        const form = $('form');
        const message = $('#message');
        const mail = $('#mail');
        const name = $('#name');
        const submitBtn = $('#submit');
        if(!message.val()) {
          alert('メッセージを入力してください');
          return false;
        }
        if(!name.val()) {
          alert('お名前を入力してください');
          return false;
        }
        if(!mail.val()) {
          alert('メールアドレスを入力してください');
          return false;
        }
        $.ajax({
          url: 'https://script.google.com/macros/s/AKfycbzGgD05ev1b16aX1kMzgDTndB5UlomELRaV2vh3KHWoNcnCVjon/exec',
          dataType: 'jsonp',
          data: form.serialize(),
          beforeSend: () => {
            return submitBtn.prop('disabled', true);
          },
          complete: () => {
            return submitBtn.prop('disabled', false),
              message.val(''),
              alert('送信完了しました');
          },
          error: (response) => {
            alert('送信エラーです');
            return;
          }
        });
        event.preventDefault();
      }
    }
  }
</script>
