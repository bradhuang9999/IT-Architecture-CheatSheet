var wikiModal;
$('#div-cheatsheet button[data-modal-href]').on('click', async function(e) {
    var btn = e.target;
    var href = btn.getAttribute('data-modal-href');
    
    var hrefContentStr = await $.ajax({
        url: href,
        type: 'GET'
    });

    var hrefContent = $(hrefContentStr);
    

    var wikiModalDiv = document.getElementById('wikiModal');
    //wikiModalDiv.querySelector('.modal-title').innerText = btn.innerText;
    wikiModalDiv.querySelector('.modal-body').innerHTML = hrefContent.find('.td-content').html();
    //wikiModalDiv.querySelector('iframe').src = href;
    wikiModal = new bootstrap.Modal(wikiModalDiv, {});
    wikiModal.show();  
    
    
});

if(parent.wikiModal!==undefined) {
    parent.wikiModal.handleUpdate();
}

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}