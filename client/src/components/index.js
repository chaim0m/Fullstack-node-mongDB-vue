import { compose, withData, withProps, withHandlers } from 'vue-compose';
import axios from "axios";
import HelloWorld from './HelloWorld.vue';

const url = 'api/users'

export default compose(
    withData({
      List: {
        initialValue: []
      },
      propsToPlayWith: {
        initialValue: 'My intial Test Value'
      }
    }),
    withProps((props) => ({
      customFunction(){
        //do something like call api
        const test = props.propsToPlayWith + 'Now with secondary value'
        return test;
      },
      async fetchList() {
        const result = await axios.get('url');
        this.$emit('List', result.data);  
    }
    }))
  )(HelloWorld);
