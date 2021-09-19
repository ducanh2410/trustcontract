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
        <q-btn color="green" text-color="white" label="Save" @click="SaveClick" no-caps />
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
      <span class="title">
      <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="contractName" label="Hợp đồng mua bán" />
    </div>
  </div>

      </span>
    </div>
    <div class="row justify-around q-mt-sm">
      <div>
        <div class="row justify-around q-my-sm title">Buyer</div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense label="name"/>
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense label="wallet address"/>
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense label="contact"/>
        </div>
      </div>
      <div>
        <div class="row justify-center q-my-sm title">Seller</div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense label="name"/>
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense label="wallet address"/>
        </div>
        <div class="q-my-sm">
          <q-input outlined v-model="text" dense label="contact"/>
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
        <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" binary-state-sort>
          <template v-slot:top>
              <q-btn flat outline dense color="primary" label="Add row" @click="showDialog = true" ></q-btn>

            <div class="q-pa-sm q-gutter-sm">
                <q-dialog v-model="showDialog">
                  <q-card>
                    <q-card-section>
                      <div class="text-h6">Add new item!</div>
                    </q-card-section>

                    <q-card-section>
                      <div class="row">
                        <q-input v-model="editedItem.name" label="Tên hàng"></q-input>
                        <q-input v-model="editedItem.calories" label="Số lượng"></q-input>
                        <q-input v-model="editedItem.fat" label="Đơn giá"></q-input>
                      </div>
                    </q-card-section>

                    <q-card-actions align="right">
                      <q-btn flat label="OK" color="primary" v-close-popup @click="addRow" ></q-btn>
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>
          </template>
          <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="desc" :props="props">
                  {{ props.row.name }}
                  <q-popup-edit v-model="props.row.name">
                    <q-input v-model="props.row.name" dense autofocus counter ></q-input>
                  </q-popup-edit>
                </q-td>
                <q-td key="calories" :props="props">
                  {{ props.row.calories }}
                  <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
                    <q-input type="number" v-model="props.row.calories" dense autofocus ></q-input>
                  </q-popup-edit>
                </q-td>
                <q-td key="fat" :props="props">
                  <div class="text-pre-wrap">{{ props.row.fat }}</div>
                  <q-popup-edit v-model="props.row.fat">
                    <q-input type="textarea" v-model="props.row.fat" dense autofocus ></q-input>
                  </q-popup-edit>
                </q-td>
                <q-td key="carbs" :props="props">
                  {{ props.row.carbs }}
                  <q-popup-edit v-model="props.row.carbs" title="Update carbs" buttons persistent>
                    <q-input type="number" v-model="props.row.carbs" dense autofocus hint="Use buttons to close" ></q-input>
                  </q-popup-edit>
                </q-td>
                <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
                <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
                <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
                <q-td key="actions" :props="props">
                  <q-btn color="blue" label="update" @click="editItem(props.row)" size=sm></q-btn>
                  <q-btn color="red" label="delete"  @click="deleteItem(props.row)" size=sm></q-btn>
                </q-td>
              </q-tr>
            </template>
    </q-table>
        <!-- <q-table
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
        </q-table> -->
      </div>
      <div>
        <div class="title-dk">
          Điều 2: Yêu cầu chất lượng
            <div v-for="(item, i) in rule.qualityRequirements" :key="i">
              <q-input v-model="item.content" />
            </div>
            <q-btn color="white" text-color="black" label="+" no-caps @click="Add(rule.qualityRequirements)" />
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 3: Yêu cầu thời gian
            <div v-for="(item, i) in rule.timeRequirements" :key="i">
              <q-input v-model="item.content" />
            </div>
            <q-btn color="white" text-color="black" label="+" no-caps @click="Add(rule.timeRequirements)" />
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 4: Trách nhiệm các bên
            <div v-for="(item, i) in rule.responsibilities" :key="i">
              <q-input v-model="item.content" />
            </div>
            <q-btn color="white" text-color="black" label="+" no-caps @click="Add(rule.responsibilities)" />
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 5: Bảo hành và hướng dẫn sử dụng
            <div v-for="(item, i) in rule.warranty" :key="i">
              <q-input v-model="item.content" />
            </div>
            <q-btn color="white" text-color="black" label="+" no-caps @click="Add(rule.warranty)" />
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 6: Điều khoản ngưng thanh toán
            <div v-for="(item, i) in rule.stopPaying" :key="i">
              <q-input v-model="item.content" />
            </div>
            <q-btn color="white" text-color="black" label="+" no-caps @click="Add(rule.stopPaying)" />
        </div>
      </div>
      <div>
        <div class="title-dk">
          Điều 7: Bất khả kháng và giải quyết tranh chấp
            <div v-for="(item, i) in rule.disputeResolution" :key="i">
              <q-input v-model="item.content" />
            </div>
            <q-btn color="white" text-color="black" label="+" no-caps @click="Add(rule.disputeResolution)" />
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
import { ref, computed } from 'vue'

export default {
  setup (props, { emit }) {
    // #region Property
    const alert = ref(false)
    const model = ref('Bank')
    const contractName = ref('')
    const text = ref('')
    const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
    const rule = ref({
      qualityRequirements: [],
      timeRequirements: [],
      responsibilities: [],
      warranty: [],
      stopPaying: [],
      disputeResolution: []
    })
    const columns = ref([
      {
        name: 'calories',
        align: 'center',
        label: 'Tên hàng',
        field: 'calories',
        sortable: true
      },
      {
        name: 'fat',
        label: 'Số lượng',
        field: 'fat',
        sortable: true,
        style: 'width: 10px'
      },
      { name: 'carbs', label: 'Đơn giá', field: 'carbs' },
      {
        name: 'actions',
        label: 'Actions',
        field: 'actions'
      }
    ])
    const rows = ref([
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      }
    ])
    var editedItem = ref({
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      sodium: 0,
      calcium: '0%',
      iron: '0%'
    })
    const defaultItem = ref({
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
      sodium: 0,
      calcium: '0%',
      iron: '0%'
    })
    var showDialog = ref(false)
    var editedIndex = ref(-1)
    // #endregion

    // #region Computed
    const totalCount = computed(() => {
      let result = 0
      rows.value.forEach(e => {
        result += e.fat
      })
      return Math.round(result)
    })

    const totalOrgin = computed(() => {
      let result = 0
      rows.value.forEach(e => {
        result += e.carbs
      })
      return result
    })

    const totalMoney = computed(() => {
      let result = 0
      rows.value.forEach(e => {
        result += e.protein
      })
      return result
    })
    // #endregion

    // #region Function
    const Add = (arr) => {
      arr.push({ content: '' })
    }

    const SaveClick = () => {
      const ctobj = {
        role: '',
        information: '',
        name: contractName.value,
        payment: '6140acdb4aebec3c4c6f5915',
        amount: totalMoney.value,
        rule:
            {
              qualityRequirements: [{
                content: ConvertToString(rule.value.qualityRequirements)
              }],
              timeRequirements: [{
                content: ConvertToString(rule.value.timeRequirements)
              }],
              responsibilities: [{
                content: ConvertToString(rule.value.responsibilities)
              }],
              warranty: ConvertToString(rule.value.warranty),
              stopPaying: ConvertToString(rule.value.stopPaying),
              disputeResolution: ConvertToString(rule.value.disputeResolution)
            }
      }
      emit('save-click', ctobj)
    }
    // #endregion

    // #region Function return
    function ConvertToString (params) {
      var newArray = []
      params.map(e => newArray.push(e.content))
      return newArray.join('|')
    }
    function addRow () {
      showDialog = false
      if (editedIndex.value > -1) {
        Object.assign(rows[editedIndex], editedItem)
      } else {
        rows.value.push(editedItem.value)
      }
    }
    function deleteItem (item) {
      const index = rows.value.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        rows.value.splice(index, 1)
    }
    function editItem (item) {
      editedIndex = rows.value.indexOf(item)
      editedItem = Object.assign({}, item)
      showDialog = true
    }
    function close () {
      showDialog = false
      setTimeout(() => {
        editedItem = Object.assign({}, defaultItem)
        editedIndex = -1
      }, 300)
    }
    // #endregion

    return {
      alert,
      model,
      rule,
      text,
      totalCount,
      totalOrgin,
      totalMoney,
      contractName,
      options,
      Add,
      SaveClick,
      showDialog,
      columns,
      rows,
      editedItem,
      defaultItem,
      addRow,
      deleteItem,
      editItem,
      close
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
