<template>
  <form @submit.prevent>

   <h4>Создание поста</h4>

    <my-input 
    v-focus
    v-model="post.title"     
    type="text" 
    placeholder="Название">
    </my-input>

    <my-input 
    v-model="post.body" 
    type="text" 
    placeholder="Описание">
    </my-input>

    <my-button
    style="aling-self: flex-end; margin-top: 15px"
    @click="createPost"
    >Создать</my-button>

   </form>
   
</template>

<script>

    export default {
         
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                this.post.id = this.getCurrentDate()
                this.$emit('create', this.post,);
                this.post = {
                    title: '',
                    body: ''
                }
        },
        getCurrentDate() {
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false
      };
      const date = new Date().toLocaleString('ru-RU', options);
      return date;
    },
},
        watch: {
            post: {
               handler(newVal) {

               },
               deep: true
            }
        },
    }
</script>

<style scoped>
.form {
        display: flex;
        flex-direction: column;
    }
    
    
</style>