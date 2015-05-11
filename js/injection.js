$(document).ready(function () {
    $('.export').remove();
    $('.dict-filter.dict-actions').find('.last-btn').before('<a class="export" role="button"><button data-tooltip="Export"><i style="display: inline-block; background: url(https://raw.githubusercontent.com/bilabon/Export-leo/master/export-leo-16.png) no-repeat; width: 16px; height: 16px;"></i></button></a>');

    $(".export").click(function () {
        function exportTableToCSV(table, filename) {
            var colDelim = '","', rowDelim = '"\r\n', csv = '';

            table.each(function(index) {
                index += 1;
                transcription = $(this).parent().find('.item-word-sound').data('tooltip');
                var eng = $.trim($(this).find('b').text());
                var rus = $.trim($(this).find('span').text());
                csv += '"' + index + colDelim + eng + colDelim + transcription + colDelim + rus + rowDelim;
            });

            var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

            $(this).attr({
                'download': filename,
                'href': csvData
            });
        }
        var table = $('div.dict-item-word.checked').find('.item-word-translate');
        exportTableToCSV.apply(this, [table, 'lingualeo.csv']);
    });
});