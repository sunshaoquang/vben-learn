<template>
  <Card title="最新动态" v-bind="$attrs">
    <template #extra>
      <Button type="link" size="small">更多</Button>
    </template>
    <List item-layout="horizontal" :data-source="dynamicInfoItems">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>
              {{ item.date }}
            </template>
            <!-- eslint-disable-next-line -->
            <template #title>
              {{ item.name }} <span v-html="item.desc"> </span>
            </template>
            <template #avatar> icon </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts" setup>
import { Button, Card, List } from "ant-design-vue";
import { dynamicInfoItems } from "./data";

const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;
</script>
