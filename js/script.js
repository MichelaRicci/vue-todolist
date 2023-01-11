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

    



  
}).mount('#root');