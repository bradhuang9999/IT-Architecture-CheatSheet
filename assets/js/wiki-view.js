var wikiModal;
$('#div-cheatsheet button[data-modal-href]').on('click', async function(e) {
    var btn = e.target;
    var href = btn.getAttribute('data-modal-href');
    
    var hrefContentStr = await $.ajax({
        url: href,
        type: 'GET'
    });

    let hrefContentClean = DOMPurify.sanitize(hrefContentStr, { USE_PROFILES: { html: true } });
    var hrefContent = $(hrefContentClean);
    

    var wikiModalDiv = document.getElementById('wikiModal');
    wikiModalDiv.querySelector('.modal-body').innerHTML = hrefContent.find('.td-content').html();
    wikiModal = new bootstrap.Modal(wikiModalDiv, {});
    wikiModal.show();  
    
    
});

if(parent.wikiModal!==undefined) {
    parent.wikiModal.handleUpdate();
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}