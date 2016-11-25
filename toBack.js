class ToBack{
    constructor({obj,time=1000}){
        this.obj=obj[0];
        this.time=time;
        this.bOk=false;
        this.init();
    }
    init(){
        let _this=this;
        window.onscroll=()=>{
            if(_this.bOk){
                clearInterval(_this.obj.timer)
            }
            _this.bOk=true;
            _this.showHide();
        };
        this.obj.onclick=()=>{
            _this.scroll();
        }
    }
    showHide(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 40) {
            this.obj.style.display = 'block';
        } else {
            this.obj.style.display = 'none';
        }
    }
    scroll(){
        let start = document.documentElement.scrollTop || document.body.scrollTop,
            iTarget = 0,
            dis = iTarget - start,
            count = Math.floor(this.time / 30),
            n = 0,
            that=this;
        clearInterval(this.obj.timer);
        this.obj.timer = setInterval(function () {
            //js滚动的时候
            that.bOk = false;
            n++;
            let a = 1 - n / count;
            document.documentElement.scrollTop = document.body.scrollTop = start + dis * (1 - Math.pow(a, 3));
            if (n == count) {
                clearInterval(that.obj.timer);
            }
        }, 30);
    }
}
const toBack=({obj,time})=>new ToBack({obj,time});
// export {toBack};
