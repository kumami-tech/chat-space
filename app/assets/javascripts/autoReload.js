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
  
  let reloadMessages = function() {
    let last_message_id = $('.Main_chat__content__box:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Main_chat__content').append(insertHTML);
        $('.Main_chat__content').animate({ scrollTop: $('.Main_chat__content')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});