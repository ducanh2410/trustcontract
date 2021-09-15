<template>
  <div class="contract">
    <div class="q-mt-md q-mx-md">
      <div class="row items-center justify-between">
        <span class="q-mr-md">Type of payment:</span>
        <div>
          <q-select
            standout="bg-teal text-white"
            dense
            v-model="model"
            :options="options"
          />
        </div>
      </div>
      <div>
        <q-btn color="green" text-color="white" label="Save" no-caps />
        <q-btn color="white" text-color="black" label="Edit" class="q-ml-sm" no-caps />
        <q-btn
          color="primary"
          text-color="white"
          label="Deloy"
          class="q-ml-sm"
          @click="alert = true"
          no-caps
        />
      </div>
    </div>
    <q-separator inset class="q-my-sm" />
    <div class="row q-mx-md items-center">
      <div class="q-mr-md">Send invite to:</div>
      <div>
        <q-input outlined v-model="text" dense />
      </div>
    </div>
    <q-separator inset class="q-my-sm" />
    <div class="row justify-center">
      <span class="title">Hợp đồng mua bán xxx</span>
    </div>
    <div class="row justify-around q-mt-sm">
      <div>
        <div class="row justify-around q-my-sm title">Buyer</div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense />
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense />
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense />
        </div>
      </div>
      <div>
        <div class="row justify-center q-my-sm title">Seller</div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense />
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense />
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense />
        </div>
      </div>
    </div>
    <div class="dieu-khoan q-mx-lg">
      <div>
        <div class="title-dk">
          Điều 1: Tên hàng - Số lượng - Giá trị hợp đồng
        </div>
      </div>
      <div class="q-pa-md">
        <q-table
          class="my-sticky-header-table"
          :rows="rows"
          :columns="columns"
          row-key="name"
          flat
          bordered
        >
          <template v-slot:bottom-row>
            <q-tr>
              <q-td style="width: 50px; text-align: left">Tổng</q-td>
              <q-td style="width: 200px; text-align: right"></q-td>
              <q-td style="width: 150px; text-align: right">{{ totalCount }}</q-td>
              <q-td style="width: 150px; text-align: right">{{ totalOrgin }}</q-td>
              <q-td style="width: 150px; text-align: right">{{ totalMoney }}</q-td>
              <q-td style="width: 150px; text-align: right"></q-td>
              <q-td style="width: 150px; text-align: right"></q-td>
              <q-td style="width: 150px; text-align: right"></q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <div>
        <div class="title-dk">
          Điều 2: Yêu cầu chất lượng
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 3: Yêu cầu thời gian
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 4: Trách nhiệm các bên
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 5: Bảo hành và hướng dẫn sử dụng
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 6: Điều khoản ngưng thanh toán
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 7: Bất khả kháng và giải quyết tranh chấp
        </div>
      </div>
    </div>
    <div class="chu-ky row justify-around">
        <div class="title-dk">
            <div>Ký tên bên mua</div>
            <div style="min-height: 50px"></div>
            <q-separator class="q-my-sm" />
        </div>
        <div class="title-dk">
            <div>Ký tên bên mua</div>
            <div style="min-height: 50px"></div>
            <q-separator class="q-my-sm" />
        </div>
    </div>
    <div style="height: 10px"></div>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'STT',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    style: 'width: 50px',
    headerStyle: 'width: 50px',
    sortable: true
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Tên hàng',
    field: 'calories',
    style: 'width: 200px',
    headerStyle: 'width: 200px',
    sortable: true
  },
  { name: 'fat', label: 'Số lượng', field: 'fat', style: 'width: 150px', headerStyle: 'width: 150px', sortable: true },
  { name: 'carbs', label: 'Đơn giá', style: 'width: 150px', headerStyle: 'width: 150px', field: 'carbs' },
  { name: 'protein', label: 'Thành tiền', style: 'width: 150px', headerStyle: 'width: 150px', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', style: 'width: 150px', headerStyle: 'width: 150px', field: 'sodium' },
  {
    name: 'calcium',
    label: 'Calcium (%)',
    field: 'calcium',
    sortable: true,
    style: 'width: 150px',
    headerStyle: 'width: 150px',
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'iron',
    label: 'Iron (%)',
    field: 'iron',
    sortable: true,
    style: 'width: 150px',
    headerStyle: 'width: 150px',
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

export default {
  setup () {
    return {
      alert: ref(false),
      model: ref('Bank'),
      text: ref(''),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      columns,
      rows
    }
  },

  computed: {
    totalCount () {
      let result = 0
      rows.forEach(e => {
        result += e.fat
      })
      return Math.round(result)
    },
    totalOrgin () {
      let result = 0
      rows.forEach(e => {
        result += e.carbs
      })
      return result
    },
    totalMoney () {
      let result = 0
      rows.forEach(e => {
        result += e.protein
      })
      return result
    }
  }
}
</script>

<style lang="scss">
.contract {
  .q-mt-md {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
  }

  .title-dk {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
