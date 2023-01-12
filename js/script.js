console.log('Vue Ok');


const app = Vue.createApp({

    data(){
      return {
  
  
        newItem: '',
        items: [
  
        {
          text: 'Ritirare pacco in posta',
          done: true,
        },  
        {
            text: 'Fare la spesa',
            done: false,
          },
          {
            text: 'Passare in lavanderia',
            done: false,
          },
          {
            text: 'Ritirare la posta',
            done: false,
          },
          {
            text: 'Chiamare amministrazione',
            done: false,
          },
  
       ]}
    },

    methods: {


        addItem() {

            if(this.newItem) {

            const item = {done: false, text: this.newItem};
            this.items.push(item);

            this.clearInput();
        }
        },

        clearInput() {
            this.newItem.text = ':'
        },



        deleteItem(index) {
            this.items.splice(index, 1);
        },


    
    }







  
}).mount('#root');