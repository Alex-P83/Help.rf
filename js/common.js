//Data
 var content = [
    {
        'id': 1,
        'title': 'Автоюрист КАСКО ОСАГО ДТП'
    },
    {
        'id': 2,
        'title': 'Алименты'
    },
    {
        'id': 3,
        'title': 'Арест имущества и счетов'
    },
    {
        'id': 4,
        'title': 'Банкротство'
    },
    {
        'id': 5,
        'title': 'Бракоразводный процесс'
    },
    {
        'id': 6,
        'title': 'Брачный договор'
    },
    {
        'id': 7,
        'title': 'Бухгалтерское обслуживание'
    },
    {
        'id': 8,
        'title': 'Возмещение | Взыскание'
    },
    {
        'id': 9,
        'title': 'Вступление в СРО'
    },
    {
        'id': 10,
        'title': 'Дарение собственности'
    },
    {
        'id': 11,
        'title': 'Договора купли-продажи'
    },
    {
        'id': 12,
        'title': 'Защита прав'
    },
    {
        'id': 13,
        'title': 'Заявление | Жалобы | Иски'
    },
    {
        'id': 14,
        'title': 'Ликвидация фирм'
    },
    {
        'id': 15,
        'title': 'Лицензии'
    },
    {
        'id': 16,
        'title': 'Налоговые вопросы'
    },
    {
        'id': 17,
        'title': 'Оформление наследство'
    },
    {
        'id': 18,
        'title': 'Патенты'
    },
    {
        'id': 19,
        'title': 'Признание права'
    },
    {
        'id': 20,
        'title': 'Раздел имущества'
    },
    {
        'id': 21,
        'title': 'Раздел имущества при разводе'
    },
    {
        'id': 22,
        'title': 'Регистрация фирм'
    },
    {
        'id': 23,
        'title': 'Реорганизация фирм'
    },
    {
        'id': 24,
        'title': 'Реструктуризация фирм'
    },
    {
        'id': 25,
        'title': 'Сделки с недвижимостью'
    },
    {
        'id': 26,
        'title': 'Составление | Расторжение договоров'
    },
    {
        'id': 27,
        'title': 'Споры'
    },
    {
        'id': 28,
        'title': 'Страховые споры'
    },
    {
        'id': 29,
        'title': 'Судебное разбирательство'
    },
    {
        'id': 30,
        'title': 'Юридическое обслуживание'
    },
 ];

//GET
var $_GET = {};
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function(){
    function decode(s){
        return decodeURIComponent(s.split("+").join(" "));
    }
    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

if($_GET.id) {
    var id = $_GET.id;
    var service = $_GET.service;
    var title = content[id-1].title;

    if(title) {
        $('#selectmenu1 option').eq(id).prop("selected", true);
        $('#pageTitle').text(title);
    }
}

//Selectmenu
  $(function() {
    $( "#selectmenu1" ).selectmenu()
  });

//Fancybox
  $(document).ready(function() {
    $(".pop-up").fancybox({});        
  });

/////
  $('.load a').on('click',function(e) {
      event.preventDefault();
      $('#load').click();
  });

//Selectmenu select
  $(document).ready(function(){
    $( "#selectmenu1" ).on( "selectmenuselect", function( event, ui ) {
       var service = ui.item.label;
       var id = $(this).val();
       if(id) {
            location.href = "index.html?id="+ id +"&service="+service;
       }
    });             
  });   