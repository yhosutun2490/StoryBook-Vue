<template>
  <Paginator 
  class="paginator"
  :pt="{
    root: {
      style: `
      width: fit-content; 
      `
    },
    content: {
      class: 'content',
      style: `border: none; 
      width: fit-content; 
      height: 40px;
      `

    },
    first: {
      style: buttonStyle + borderLeft,
    },
    prev: {
      style: buttonStyle
    },
    next: {
      style: buttonStyle
    },
    last: {
      style: buttonStyle + borderRight,
    }
    
  }"
  ></Paginator>
</template>
<script setup>
import Paginator from 'primevue/paginator';
const buttonStyle = `
      color: black; 
      width: 40px; 
      height: 100%;
      font-weight: 500;
      border: none;
      background: rgba(234, 243, 244, 1);
      cursor: pointer;
      `
const borderLeft = `
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
`

const borderRight = `
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
`
</script>



