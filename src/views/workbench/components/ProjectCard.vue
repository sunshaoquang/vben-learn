<template>
  <Card title="项目" v-bind="$attrs">
    <template #extra>
      <Button type="link" size="small">更多</Button>
    </template>

    <CardGrid
      v-for="item in groupItems"
      :key="item.title"
      class="!md:w-1/3 !w-full"
    >
      <span class="flex"> </span>
      <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div>
      <div class="flex justify-between text-secondary">
        <span>{{ item.group }}</span>
        <span>{{ item.date }}</span>
      </div>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
import { Button, Card, CardGrid } from "ant-design-vue";
import { groupItems } from "./data";
</script>
