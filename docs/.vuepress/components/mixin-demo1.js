

export default {
    data(){
        return{
            name:'哈哈',book:'JS'
        }
    },
    mounted(){
        console.log('mixin mounted')
    },
    methods:{
        sayName(){
            alert(`mixin提供的方法：${this.name}`)
        }
    }
}

