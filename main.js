const Calculator = {
    data(){
        return{
            num:0,
            num1:0,
            num2:0,
            space:'',
            ans:'Answer',
            val:0
        }
    },
    methods:{
        plus(){
            this.num = this.num1 + this.num2
            this.space = ''
        },
        minus(){
            this.num = this.num1 - this.num2
            this.space = ''
        },
        divis(){
            this.num = this.num1 / this.num2
            this.space = ''
        },
        mult(){
            this.num = this.num1 * this.num2
            this.space = ''
        },
        getNum1(e){
            this.num1 = Number(e.target.value)
        },
        getNum2(e){
            this.num2 = Number(e.target.value)
        },
    }
}


Vue.createApp(Calculator).mount('#calc')