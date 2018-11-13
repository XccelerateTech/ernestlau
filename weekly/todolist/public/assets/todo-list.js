$(document).ready(function () {

    $('form').on('submit', function (event) {
        event.preventDefault();
        var item = $('form input');
        var todo = { item: item.val().trim() };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            },
            error: function (e) {
                console.log(e)
                popupS.alert({
                    content: e.responseText
                });
            }
        });

        return false;

    });

    $('li').on('click', function () {
        var item = encodeURIComponent($(this).text().trim());
        console.log(item);
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function (data) {
                //do something with the data via front-end framework
                location.reload();
            }
        });
    });

});