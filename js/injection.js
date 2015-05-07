$(document).ready(function () {
    //document.body.style.backgroundColor="red";
    $('.export').remove();
    $('.dict-filter.dict-actions').find('.last-btn').before('<a class="export" role="button"><button data-tooltip-pos="bottom right" data-tooltip="Export"><i style="display: inline-block; background: url(url) no-repeat; width: 16px; height: 16px;">&#222;</i></button></a>');

    $(".export").click(function () {
        var $table = $('div.dict-item-word.checked').find('.item-word-translate');
        function exportTableToCSV($table, filename) {

            var colDelim = '","', rowDelim = '"\r\n"', csv = '"';
            $table.each(function(index) {
                var eng = $(this).find('b').text();
                var rus = $(this).find('span').text();
                csv += index + colDelim + eng + colDelim + rus + rowDelim;
            });
            console.log(csv);

            var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

            $(this).attr({
                'download': filename,
                'href': csvData
            });
        }
        exportTableToCSV.apply(this, [$table, 'lingualeo.csv']);
    });
});