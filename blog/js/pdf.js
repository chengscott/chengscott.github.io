function loadPDF(id) {
    var docViewerSrc = 'https://docs.google.com/viewer' +
        '?srcid=DOCID&pid=explorer&efh=false&a=v&chrome=false&embedded=true';
    $('#pdf').attr('src', docViewerSrc.replace('DOCID', id));
}
