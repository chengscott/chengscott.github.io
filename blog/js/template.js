var templates = {
    title_tabs:
        '<h3 class="ui header">TITLE</h3>' +
        '<div class="ui top stackable attached tabular menu" id="pdftabs">TABS</div>',
    title_sub:
        '<h3 class="ui header"><div class="content">TITLE<div class="sub header">SUB</div></div></h3>',
    pdf:
        '<iframe id="pdf" width="100%" height="800" style="border: none;"></iframe>'
};

function add_title_tabs(qid, title, tabs) {
    var content  = templates['title_tabs'] + templates['pdf'];
    content = content.replace('TITLE', title);
    content = content.replace('TABS', tabs.reduce(
        (pre, cur, id) => id == 0 ?
            pre + '<a class="item active">' + cur + '</a>' :
            pre + '<a class="item">' + cur + '</a>',
        ''
    ));
    $(qid).append(content);
    $('#pdftabs .item').on('click', function(e) {
        $('#pdftabs .item').removeClass('active');
        $(this).addClass('active');
        loadPDF(docids[$(this).text()]);
    })
    loadPDF(docids[$('#pdftabs .active').text()]);
}

function add_title_sub(qid, title, sub, docid) {
    var content  = templates['title_sub'] + templates['pdf'];
    content = content.replace('TITLE', title);
    content = content.replace('SUB', sub);
    $(qid).append(content);
    loadPDF(docid);
}
