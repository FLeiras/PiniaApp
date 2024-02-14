import clientsApi from '@/api/clients-api'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useQuery } from '@tanstack/vue-query'

import { useClientsStore } from '@/store/clients'
import type { Client } from '../interfaces/client'

const getClients = async (): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>('/clients?_page=1')

  return data
}

const useClients = () => {
  const store = useClientsStore()
  const { clients, totalPages, currentPage } = storeToRefs(store)

  const { isLoading, data } = useQuery({
    queryKey: ['clients?page=', 1],
    queryFn: () => getClients()
  })

  watch(data, (clients) => {
    if (clients) store.setClients(clients)
  })

  return {
    //? Properties
    isLoading,
    clients,
    totalPages,
    currentPage
  }
}

export default useClients
