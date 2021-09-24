var accItem = document.getElementsByClassName('q-a-a');
    var accHD = document.getElementsByClassName('question-and-arrow');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'q-a-a close';
        }
        if (itemClass == 'q-a-a close') {
            this.parentNode.className = 'q-a-a open';
        }
    }