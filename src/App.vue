<template>
  <div class="card flex-1 align-content-start card-container">
    <DataTable
      v-model:filters="filters"
      :globalFilterFields="['login', 'name', 'phone', 'mail']"
      :value="users"
      :loading="loading"
      class="p-datatable-sm"
      stripedRows
      selectionMode="single"
      sortField="name"
      :sortOrder="1"
    >
      <template #header>
        <div class="flex justify-content-between align-content-center">
          <span class="logo">
            <Image :src="imgUrl" alt="AO Teplohim" width="210" />
          </span>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" class="w-30rem" placeholder="Поиск" />
          </span>
          <span>
            <ToggleButton
              @change="setTheme()"
              v-model="value"
              onLabel=""
              offLabel=""
              onIcon="pi pi-sun"
              offIcon="pi pi-moon"
            />
          </span>
        </div>
      </template>
      <template #loading>Загрузка данных...</template>

      <Column field="login" header="Логин"></Column>
      <Column field="name" sortable header="Имя"></Column>
      <Column field="phone" header="Телефон"></Column>
      <Column header="E-mail">
        <template #body="slotProps">
          <div class="flex align-items-center justify-content-left">
            <span>{{ slotProps.data.mail }}</span>
            <!-- {{ slotProps.data.country.name  }} -->
            <Button
              v-tooltip.bottom="{ value: 'Скопировать в буфер', class: 'doc-section-code-tooltip' }"
              type="button"
              @click="onCopy(slotProps.data.mail)"
              class="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
              icon="pi pi-copy"
            ></Button>
          </div>
        </template>
      </Column>
      <Column field="mashine" header="LLM"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { useUserStore } from './stores/users'
import { usePrimeVue } from 'primevue/config'
import { useCookies } from 'vue3-cookies'

const PrimeVue = usePrimeVue()
const store = useUserStore()
const { cookies } = useCookies()
const imgUrl = new URL('./assets/orig.png', import.meta.url).href

const value = ref(false)
const loading = ref(true)

const users = computed(() => {
  return store.users
})
const onChange = (val) => {
  let aval = val == 'arya-blue' ? 'saga-blue' : 'arya-blue'
  PrimeVue.changeTheme(aval, val, 'theme-link', () => {})
}
const onCopy = (val) => {
  //console.log(val)
  navigator.clipboard.writeText(val)
}
const setTheme = () => {
  if (value.value) {
    cookies.set('theme', 'arya-blue')
  } else {
    cookies.set('theme', 'saga-blue')
  }
  onChange(cookies.get('theme'))
}

onMounted(() => {
  let theme = cookies.get('theme')
  if (theme == 'arya-blue') value.value = true
  onChange(theme)

  store.fetchUsers()
  loading.value = false
})
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})
</script>
<style scoped></style>
