<template>
    <div class="post">
    <div>
    <div class="post-id">{{ post.id }} </div>
   <div class="title-1"><strong>Название:  </strong>{{post.title}}</div>
   <div class="body-1"><strong>Описание:  </strong>{{post.body}}</div> 
    </div>
   <div class="post__btns">

    <my-button
   @click="$router.push(`/posts/${post.id}`)"
   >Открыть</my-button>

   <my-button
   @click="$emit('remove', post)"
   >Удалить</my-button>

   </div>
   </div>
</template>

<script>

export default {
    
     props: {
            post: {
                type: Object,
                   required: true,  
                },
               
            }
}
</script>

<style scoped>
    .post {
        padding: 15px;
        border: 3px solid rgb(14, 213, 14);
        margin: 20px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        background-color: rgb(6, 208, 249);
    }
    .post__btns {
        display: flex;
    }
    .post-id {
        color: rgb(193, 33, 193);
        font-size: 17px;
        font-weight: bold;
    }
    .title-1 {
        color: wheat;
        font-weight: bold;
    }
    .body-1 {
        color: wheat;
        font-weight: bold;
    }
</style>