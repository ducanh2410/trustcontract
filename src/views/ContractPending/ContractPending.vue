<template>
  <div class="contract-peding">
    <div class="q-pa-md q-gutter-md">
    <q-list bordered class="rounded-borders">
      <q-item-label header>Danh sách pending</q-item-label>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="green" text-color="white" icon="done" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Hợp đồng mua bán xxx</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Trạng thái: </span>
            Đã thanh toán
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          11:50
        </q-item-section>
      </q-item>

      <q-separator inset />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="yellow" text-color="white" icon="timer" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Hợp đồng mua bán xyz</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Trạng thái: </span>
            Chờ thanh toán
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
      <q-separator inset />
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="red" text-color="white" icon="close" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Hợp đồng mua bán abc</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Trạng thái: </span>
            Đã hủy
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          5 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
