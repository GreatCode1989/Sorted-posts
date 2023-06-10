<template>

   <div v-if="posts.length > 0">

    <h3 style="margin-top: 15px; color:blue">Список Поcтов</h3>

    <transition-group name="post-list">
    <post-item
    v-for="post in posts"
    :post="post"
    :key="post.id"
    @remove="$emit('remove', post)"
     />
    </transition-group>
   
   </div>
   <h2 v-else style="color: red; margin-top: 15px">
   Список постов пуст
   </h2>
</template>

<script>
import PostItem from '@/Components/PostItem';
    export default {
        components: {PostItem},
        props: {
            posts: {
                type: Array,
                required: true,
            }
        }
    }
</script>

<style scoped>

.post-list-item {
  display: inline-block;
  margin-right: 5px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.7s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.post-list-move {
  transition: transform 0.5s ease;
}

</style>