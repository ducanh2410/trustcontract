<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header>
          <q-toolbar>
            <q-toolbar-title>Tạo hợp đồng</q-toolbar-title>
            <q-btn
              round
              dense
              flat
              icon="minimize"
              @click="maximizedToggle = false"
              :disable="!maximizedToggle"
            >
              <q-tooltip v-if="maximizedToggle">Minimize</q-tooltip>
            </q-btn>
            <q-btn
              round
              dense
              flat
              icon="crop_square"
              @click="maximizedToggle = true"
              :disable="maximizedToggle"
            >
              <q-tooltip v-if="!maximizedToggle">Maximize</q-tooltip>
            </q-btn>
            <q-btn flat @click="$emit('close-modal')" round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding>
            <contract @save-click="createContract"></contract>

            <q-page-scroller
              position="bottom-right"
              :scroll-offset="150"
              :offset="[18, 18]"
            >
              <q-btn fab icon="keyboard_arrow_up" color="accent" />
            </q-page-scroller>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import Contract from './Contract.vue'
import { RepositoryFactory } from '../../libs/HttpClient/RepositoryFactory'
const ContractDetailRepository = RepositoryFactory.get('contracts')

export default {
  props: {
    role: {
      type: String,
      required: true
    }
  },
  components: {
    Contract
  },
  setup (props) {
    const createContract = async (contract) => {
      const ctobj = {
      }
      ctobj.role = props.role
      ctobj.name = contract.name
      ctobj.payment = contract.payment
      ctobj.amount = contract.amount

      const { data } = await ContractDetailRepository.create(ctobj)
      console.log(data)
      return data
    }

    return {
      createContract,
      dialog: ref(true),
      maximizedToggle: ref(true)
    }
  }
}
</script>
