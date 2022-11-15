import axios from "axios";
import {nanoid} from "nanoid";
export default {
    namespaced:true,
    actions: {
        addPersonWang(context,value){
            if(value.name.indexOf('王')==0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then((reponse)=>{
                context.commit('ADD_PERSON',{name:reponse.data,id:nanoid()})
            },error=>{
                console.log(error.message)
            })
        }

    },
    mutations: {

        ADD_PERSON(state, personObj) {
            state.personList.push(personObj)
        }
    },
    state: {
        personList: [{id: '001', name: '张三'}]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}