$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = 
        `<div class="Main_chat__content__box" data-message-id=${message.id}>
          <div class="Main_chat__content__box__info">
            <div class="Main_chat__content__box__info__user_name">
              // ${message.user_name}
            </div>
            <div class="Main_chat__content__box__info__timestamps">
              ${message.created_at}
            </div>
          </div>
          <div class="Main_chat__content__box__message">
            <p class="Main_chat__content__box__message__content">
              ${message.content}
            </p>
            <img class="Main_chat__content__box__message" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Main_chat__content__box" data-message-id=${message.id}>
        <div class="Main_chat__content__box__info">
          <div class="Main_chat__content__box__info__user_name">
            ${message.user_name}
          </div>
          <div class="Main_chat__content__box__info__timestamps">
            ${message.created_at}
          </div>
        </div>
        <div class="Main_chat__content__box__message">
          <p class="Main_chat__content__box__message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.Main_chat__form__contents').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main_chat__content').append(html);
      $('.Main_chat__content').animate({ scrollTop: $('.Main_chat__content')[0].scrollHeight});
      $('form')[0].reset();
      $('.Main_chat__form__contents__btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  });
});