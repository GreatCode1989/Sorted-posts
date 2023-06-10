<template>
   <div >

   <h1 class="h-2">Страница с постами</h1>

   <my-input
   v-focus
   v-model="searchQuery" 
   placeholder="Поиск..."
   />
   <div class="app__btns">
   
   <my-button
   @click="showDialog"
   >Создать пост</my-button>

   <my-select 
    :options="sortOptions"
    v-model="selectedSord"
    />

   </div>
   

   <my-dialog 
   v-model:show="dialogVisible">

   <post-form
   @create="createPost"
   />

   </my-dialog>
   
   <post-list 
   :posts="sortedAndSearchedPosts"
   @remove="removePost"
   v-if="!isPostsLoading"
   />

   <div v-else>Идет загрузка...</div>
   <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="page__wrapper">
    <div 
    v-for="pageNumber in totalPages" 
    :key="pageNumber"
    class="page"
    :class="{'current-page': page === pageNumber}"
    @click="changePage(pageNumber)"
    >{{ pageNumber }}</div> 
    </div> -->
   </div>
</template>


<script>
import PostForm from '@/Components/PostForm';
import PostList from '@/Components/PostList';
import MyButton from '@/Components/UI/MyButton';
import axios from 'axios';
import MySelect from '@/Components/UI/MySelect';
export default {
    components: {
       PostForm, PostList, MyButton, axios, MySelect, 
    },
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSord: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержанию'},
           ],
        }
    },
    methods: {
    createPost(post) {
           this.posts.push(post);
           this.dialogVisible = false;
            },
    removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
            },
    showDialog() {
            this.dialogVisible = true;
            },
    //changePage(pageNumber) {
      //      this.page = pageNumber
     //       },
    async fetchPosts() {
        try {
            this.isPostsLoading = true;
            
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
            });
            this.posts = response.data;
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        }   
        catch (e) {
            alert('Ошибка')
        }   
        finally {
           this.isPostsLoading = false;
        }
           },
    async loadMorePosts() {
        try {
            this.page += 1;
            
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
            });
            this.posts = [...this.posts, ...response.data];
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        }   
        catch (e) {
            alert('Ошибка')
        }   
        
           }
    },
     
    mounted() {
      this.fetchPosts();
      console.log(this.$refs.observer);
    //   const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    //     }
    //   const callback = (entries, observer) => {
    //        if(entries[0].isIntersecting && this.page < this.totalPages) {
    //         this.loadMorePosts()
    //        }
    //    };
    //   const observer = new IntersectionObserver(callback, options);
    //   observer.observe(this.$refs.observer);
    },
    computed: {
       sortedPosts() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSord]?.localeCompare(post2[this.selectedSord]))
            
       },
       sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
       }
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    },

}
</script>


<style>
   
    .app__btns {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }
    .page__wrapper {
        display: flex;
        margin-top: 15px;
    }
    .page {
        border: 1px solid orange;
        padding: 10px;
    }
    .current-page {
        border: 2px solid teal;
    }
    .observer {
        height: 20px;
        
    }
    .h-2 {
        color: rgb(16, 169, 90);
        text-shadow: 3px 4px 1px rgba(14, 220, 14, 0.5);
    }
</style>
    
