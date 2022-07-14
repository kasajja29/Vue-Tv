const app=Vue.createApp({
data(){
    return {
      channels: [
        'images/Happy-Dance.gif',
        'images/Dramatic-Drama.gif',
        'images/Sudden realization.gif',
    ],
      tvIsOn: false,
      position:0
    };
},
methods:{
  switchTv(){
    this.tvIsOn=!this.tvIsOn
  },
  next(){
    this.position++
if(this.position >this.channels.length -1){
  this.position=0
}

  },
  prev(){
    this.position--
    if (this.position < 0) {
      this.position = this.channels.length-1;
    }
  }
}

})


app.mount('#app')