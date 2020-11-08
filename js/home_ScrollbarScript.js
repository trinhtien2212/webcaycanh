 /*------------------
        Smooth srollbar
    --------------------*/
    var myCustomScrollbar = document.querySelector('.height-prevent');
    var ps = new PerfectScrollbar(myCustomScrollbar);

    var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

    myCustomScrollbar.onscroll = function () {
        scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${this.scrollRight}px`;
    }