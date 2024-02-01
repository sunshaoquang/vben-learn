<template>
  <div class="lg:flex">
    <div class="lg:w-7/10 w-full !mr-4 enter-y">
      <ProjectCard :loading="loading" class="enter-y" />
      <DynamicInfo :loading="loading" class="!my-4 enter-y" />
    </div>
    <div class="lg:w-3/10 w-full enter-y">
      <QuickNav :loading="loading" class="enter-y" />

      <Card class="!my-4 enter-y" :loading="loading">img </Card>

      <SaleRadar :loading="loading" class="enter-y" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { Card } from "ant-design-vue";
import WorkbenchHeader from "./components/WorkbenchHeader.vue";
import QuickNav from "./components/QuickNav.vue";
import DynamicInfo from "./components/DynamicInfo.vue";
import SaleRadar from "./components/SaleRadar.vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1500);
</script>
