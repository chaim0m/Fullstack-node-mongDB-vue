import { compose, withData, withProps, withHandlers } from 'vue-compose';
import axios from "axios";
import Main from './Main.vue';

const url = 'http://localhost:4000/api/users'

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
        const result = await axios.get(url);
        this.$emit('List', result.data);  
    }
    }))
  )(Main);
