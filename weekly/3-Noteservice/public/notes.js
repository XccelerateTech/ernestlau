var notesTemplate = Handlebars.compile(`
    {{#each notes}}
    <div class="note">
        <span class="input"><textarea data-id="{{ @id }}">{{ content }}</textarea></span>

        <button class="remove btn btn-xs" data-id="{{ @id }}"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </div>
    {{/each}}
`);

function reloadNotes(notes) {
    $('#notes').html(notesTemplate({notes: notes}));
}

function beginSaving(target) {
    $(target).prop('disabled', true);
    $('.saving').show();
}

function endSaving(target) {
    $(target).prop('disabled', false);
    $('.saving').hide();
}

$(function() {
    $('#add').submit(function(e) {
        e.preventDefault();
        
        var val = $('textarea[name=note]').val();
        if (val === '') {
            return;
        }
        $('textarea[name=note]').val('');
        axios.post('/api/notes/', {
            note: val
        }).then(function(res) {
            reloadNotes(res.data);
        });
    });

    $('#notes').on('blur', 'textarea', function(evt) {
        beginSaving(evt.currentTarget);

        axios.put('/api/notes/' + $(evt.currentTarget).data('id'), {
            note: $(evt.currentTarget).val()
        }).then(function(res) {
            endSaving(evt.currentTarget);
            reloadNotes(res.data);
        }).catch(function(e) {
            endSaving(evt.currentTarget);
            alert(e);
        });
    });

    $('#notes').on('click', '.remove', function(evt) {
        beginSaving(evt.currentTarget);

        axios.delete('/api/notes/' + $(evt.currentTarget).data('id')).then(function(res) {
            endSaving(evt.currentTarget);
            reloadNotes(res.data);
        }).catch(function(e) {
            endSaving(evt.currentTarget);
            alert(e);
        });
    });
});