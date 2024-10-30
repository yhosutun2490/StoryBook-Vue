<template>
  <Paginator
  ref="paginator" 
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
    contentEnd: 'content-end', 
  }"
  :totalRecords="totalRecords"
  :rows="rows"
  :pageLinkSize="pageLinkSize"
  >
  <template #end="slotProps">
    <div v-if="(updatePaginatorState(slotProps.state))">
      目前 {{slotProps.state.page + 1}} 共 {{ totalPage }} 頁
    </div>
   
  </template>
  
  </Paginator>
</template>
<script setup>
import Paginator from 'primevue/paginator';
import { defineProps, computed, ref, defineEmits } from "vue";

const props = defineProps({
  totalRecords: {
    type: Number,
    default: 25
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

const emits = defineEmits(['currentPage'])
const paginator = ref(null)
const totalPage = computed(()=> Math.ceil(props.totalRecords / props.rows))
function updatePaginatorState(state) {
  emits('currentPage',state.page + 1)

}
</script>

<style lang="scss">
 $border-color: rgba(196, 196, 196, 1);
.paginator-warp {
  border: none; 
  width: fit-content; 
  height: 40px;
}
.custom-pages-link{

  & > :first-child {
    border: none;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
  }
  & > * {
    border: none;
    border-right: 1px solid $border-color;
  }
}
.custom-page-link {
  text-align: center;
  position: relative;
  top: -1px;
  width: 40px; 
  height: 40px;
  background: rgba(234, 243, 244, 1);
  &[data-p-active=true] {
    background: rgba(113, 175, 182, 1);
    color: white;
  }
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

.content-end {
  width: fit-content;
  margin-left: auto;
}
</style>

