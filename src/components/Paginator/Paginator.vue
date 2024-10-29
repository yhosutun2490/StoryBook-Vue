<template>
  <Paginator 
  :pt="{
    root: {
      style: `
      width: fit-content; 
      `
    },
    content: 'paginator-wrap',
    first: 'd-none',
    prev: 'paginator-button prev',
    next: 'paginator-button next',
    last: 'd-none',
    pages: 'custom-pages-link',
    page: 'custom-page-link',
    current: 'current-active',
    contentEnd: 'content-end' 
  }"
  :totalRecords="totalRecords"
  :rows="rows"
  :pageLinkSize="pageLinkSize"
   v-model:currentPage="currentPageNumber"
   v-model:rows="currentRowsNumber"
  >
  <template #end>
    目前 {{ currentPageNumber }}
  </template>
  
  </Paginator>
</template>
<script setup>
import Paginator from 'primevue/paginator';
import { defineProps,ref } from "vue";

defineProps({
  totalRecords: {
    type: Number,
    default: 30
  },
  rows:  {
    type: Number,
    default: 5
  },
  pageLinkSize:  {
    type: Number,
    default: 3
  }

})

const currentPageNumber = ref('')
const currentRowsNumber = ref('')

</script>

<style lang="scss">
.paginator-warp {
  border: none; 
  width: fit-content; 
  height: 40px;
}
.custom-pages-link{

  & > :first-child {
    border: none;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
  }
  & > * {
    border: none;
    border-right: 1px solid grey;
  }
}
.custom-page-link {
  text-align: center;
  position: relative;
  top: -1px;
  width: 40px; 
  height: 40px;
  background: rgba(234, 243, 244, 1);
}
.d-none {
  display: none;
}
.paginator-button {
  color: black; 
  width: 40px; 
  height: 40px;
  font-weight: 500;
  border: none;
  background: rgba(234, 243, 244, 1);
  cursor: pointer;
}
.prev {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.next {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.current-active {
  background: green;
}
.content-end {
  width: fit-content;
  margin-left: auto;
}
</style>

