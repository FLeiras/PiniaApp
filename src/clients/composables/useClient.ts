import { computed, ref, watch } from 'vue'
import { useQuery, useMutation } from '@tanstack/vue-query'

import clientsApi from '@/api/clients-api'
import type { Client } from '../interfaces/client'

const getClient = async (id: number) => {
  const { data } = await clientsApi.get(`/clients/${id}`)

  return data
}

const updateClient = async (client: Client): Promise<Client> => {
  const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client)

  return data
}

const useClient = (id: number) => {
  const client = ref<Client>()

  const { isLoading, data, isError } = useQuery({
    queryKey: ['client', id],
    queryFn: () => getClient(id),
    retry: false
  })

  const clientMutation = useMutation({
    mutationFn: updateClient
  })

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value }
    },
    { immediate: true }
  )

  return {
    client,
    isError,
    isLoading,
    clientMutation,

    //? Methods
    updateClient: clientMutation.mutate,
    isUpdating: computed(() => clientMutation.isPending.value),
    isUpdatingSucces: computed(() => clientMutation.isSuccess.value),
    isErrorUpdating: computed(() => clientMutation.isError.value),
  }
}

export default useClient
