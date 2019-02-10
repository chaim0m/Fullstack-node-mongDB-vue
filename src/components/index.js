import { compose, withData, withProps, withHandlers } from 'vue-compose';
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

const list = async someList(){
    // try {
     const data = await axios.get(`http://localhost:3000/book`)
         if (data && data.data) {
             return data.data }
    //   }
    //  catch(e){   //add in error handling
    //     return e;
    // }
},

export default compose(
    withData({
      List: {
        initialValue: list
      },
      ecosystem:  {
          iniitalValue: [
            {
              text: 'vuetify-loader',
              href: 'https://github.com/vuetifyjs/vuetify-loader'
            },
            {
              text: 'github',
              href: 'https://github.com/vuetifyjs/vuetify'
            },
            {
              text: 'awesome-vuetify',
              href: 'https://github.com/vuetifyjs/awesome-vuetify'
            }
          ],
      },
      importantLinks: {
          initialValue: [
            {
              text: 'Documentation',
              href: 'https://vuetifyjs.com'
            },
            {
              text: 'Chat',
              href: 'https://community.vuetifyjs.com'
            },
            {
              text: 'Made with Vuetify',
              href: 'https://madewithvuetifyjs.com'
            },
            {
              text: 'Twitter',
              href: 'https://twitter.com/vuetifyjs'
            },
            {
              text: 'Articles',
              href: 'https://medium.com/vuetify'
            }
          ],
      },
      whatsNext: {
          iniitalValue: [
            {
              text: 'Explore components',
              href: 'https://vuetifyjs.com/components/api-explorer'
            },
            {
              text: 'Select a layout',
              href: 'https://vuetifyjs.com/layout/pre-defined'
            },
            {
              text: 'Frequently Asked Questions',
              href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
            }
    
          ] 
      }
    }),
    withProps((props) => ({
      customFunction(){
        //do something like call api
        props.someInjectedProp="New Bla"
      }
    }))
  )(HelloWorld);


  
   
//   methods: {
//     details (book) {
//       this.$router.push({
//         name: 'ShowBook',
//         params: { id: book._id }
//       })
//     }
//   }
// }