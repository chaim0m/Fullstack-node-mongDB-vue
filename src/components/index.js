import { compose, withData, withProps, withHandlers } from 'vue-compose';
import axios from "axios";
import HelloWorld from './HelloWorld.vue';

const url = 'http://localhost:4000/api/users'

export default compose(
    withData({
      List: {
        initialValue: []
      },
      ecosystem:  {
          initialValue: [
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
          initialValue: [
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
        const test = props.ecosystem[0]
        return test.href;
      },
      async fetchList() {
        const result = await axios.get('http://localhost:4000/api/users');
        this.$emit('List', result.data);  
    }
    }))
  )(HelloWorld);
